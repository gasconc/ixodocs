import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync, gunzipSync } from 'node:zlib';
import matter from 'gray-matter';
import MiniSearch from 'minisearch';
import { derivePortal, deriveSection, pathToUri, type Portal, type DocEntry, type BundleManifest } from '../../src/search/types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES_DIR = path.resolve(__dirname, '../fixtures');
const FIXTURE_DOCS_DIR = path.join(FIXTURES_DIR, 'docs');
const OUTPUT_BUNDLE_DIR = path.join(FIXTURES_DIR, '.tmp-integration-bundle');

function walkMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkMdFiles(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

beforeAll(() => {
  if (fs.existsSync(OUTPUT_BUNDLE_DIR)) {
    fs.rmSync(OUTPUT_BUNDLE_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_BUNDLE_DIR, { recursive: true });

  const mdFiles = walkMdFiles(FIXTURE_DOCS_DIR);
  const docs: DocEntry[] = [];
  const portalCounts: Record<Portal, number> = {
    'ixopay-dev': 0, 'ixopay-manual': 0, 'ixopay-modules': 0, 'tokenex': 0, 'congrify': 0,
  };

  for (const absPath of mdFiles) {
    const relativePath = path.relative(FIXTURES_DIR, absPath).replace(/\\/g, '/');
    const parsed = matter(fs.readFileSync(absPath, 'utf-8'));
    const portal = (parsed.data.portal as Portal) || derivePortal(relativePath);
    const section = deriveSection(relativePath);
    const uri = pathToUri(relativePath, portal);
    const tags: string[] = Array.isArray(parsed.data.tags) ? parsed.data.tags : [];

    const entry: DocEntry = {
      uri, relativePath, portal, section,
      title: String(parsed.data.title || path.basename(absPath, '.md')),
      summary: String(parsed.data.summary || ''),
      tags, sourceUrl: String(parsed.data.source_url || ''),
      updated: String(parsed.data.updated || ''),
      related: Array.isArray(parsed.data.related) ? parsed.data.related : [],
      content: parsed.content,
    };

    docs.push(entry);
    portalCounts[portal] = (portalCounts[portal] || 0) + 1;
  }

  const miniSearch = new MiniSearch<{
    id: string; title: string; summary: string; tags: string;
    body: string; uri: string; portal: string; section: string;
  }>({
    fields: ['title', 'summary', 'tags', 'body'],
    storeFields: ['uri', 'portal', 'title', 'summary', 'section'],
    searchOptions: { prefix: true, fuzzy: 0.2, boost: { title: 4, tags: 3, summary: 2 } },
  });

  miniSearch.addAll(docs.map((doc) => ({
    id: doc.uri, title: doc.title, summary: doc.summary,
    tags: doc.tags.join(' '), body: doc.content,
    uri: doc.uri, portal: doc.portal, section: doc.section,
  })));

  const contentMap: Record<string, DocEntry> = {};
  for (const doc of docs) contentMap[doc.uri] = doc;

  const metaMap: Record<string, string> = {};
  for (const name of ['index.md', 'llms.txt', 'llms-full.txt']) {
    const metaPath = path.join(FIXTURES_DIR, name);
    if (fs.existsSync(metaPath)) {
      const key = name.replace('.md', '').replace('.txt', '').replace('-', '_');
      metaMap[key] = fs.readFileSync(metaPath, 'utf-8');
    }
  }

  const now = new Date().toISOString();
  const manifest: BundleManifest = {
    version: '0.1.0', generatedAt: now,
    docCount: docs.length, portals: portalCounts,
    buildInfo: { bundleVersion: '0.1.0', generatedAt: now, docsDir: FIXTURE_DOCS_DIR, docCount: docs.length },
  };

  fs.writeFileSync(path.join(OUTPUT_BUNDLE_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(OUTPUT_BUNDLE_DIR, 'search-index.json'), JSON.stringify(miniSearch));
  fs.writeFileSync(path.join(OUTPUT_BUNDLE_DIR, 'content.json.gz'), gzipSync(JSON.stringify(contentMap)));
  fs.writeFileSync(path.join(OUTPUT_BUNDLE_DIR, 'meta.json'), JSON.stringify(metaMap, null, 2));
});

afterAll(() => {
  if (fs.existsSync(OUTPUT_BUNDLE_DIR)) {
    fs.rmSync(OUTPUT_BUNDLE_DIR, { recursive: true });
  }
});

describe('build-bundle output', () => {
  it('creates manifest.json', () => {
    expect(fs.existsSync(path.join(OUTPUT_BUNDLE_DIR, 'manifest.json'))).toBe(true);
  });

  it('creates search-index.json', () => {
    expect(fs.existsSync(path.join(OUTPUT_BUNDLE_DIR, 'search-index.json'))).toBe(true);
  });

  it('creates content.json.gz', () => {
    expect(fs.existsSync(path.join(OUTPUT_BUNDLE_DIR, 'content.json.gz'))).toBe(true);
  });

  it('creates meta.json', () => {
    expect(fs.existsSync(path.join(OUTPUT_BUNDLE_DIR, 'meta.json'))).toBe(true);
  });

  it('manifest.json is valid JSON with correct shape', () => {
    const raw = fs.readFileSync(path.join(OUTPUT_BUNDLE_DIR, 'manifest.json'), 'utf-8');
    const manifest = JSON.parse(raw);
    expect(manifest).toHaveProperty('version');
    expect(manifest).toHaveProperty('docCount');
    expect(manifest).toHaveProperty('portals');
    expect(manifest).toHaveProperty('generatedAt');
    expect(manifest).toHaveProperty('buildInfo');
  });

  it('manifest.json docCount matches fixture files (6 docs)', () => {
    const raw = fs.readFileSync(path.join(OUTPUT_BUNDLE_DIR, 'manifest.json'), 'utf-8');
    const manifest = JSON.parse(raw);
    expect(manifest.docCount).toBe(6);
  });

  it('search-index.json is valid JSON', () => {
    const raw = fs.readFileSync(path.join(OUTPUT_BUNDLE_DIR, 'search-index.json'), 'utf-8');
    expect(() => JSON.parse(raw)).not.toThrow();
  });

  it('content.json.gz decompresses to valid JSON with doc entries', () => {
    const compressed = fs.readFileSync(path.join(OUTPUT_BUNDLE_DIR, 'content.json.gz'));
    const decompressed = gunzipSync(compressed).toString('utf-8');
    const content = JSON.parse(decompressed);
    expect(typeof content).toBe('object');
    const uris = Object.keys(content);
    expect(uris.length).toBe(6);
    for (const uri of uris) {
      expect(uri).toMatch(/^ixodocs:\/\//);
    }
  });

  it('content.json.gz entries have required DocEntry fields', () => {
    const compressed = fs.readFileSync(path.join(OUTPUT_BUNDLE_DIR, 'content.json.gz'));
    const content = JSON.parse(gunzipSync(compressed).toString('utf-8'));
    for (const entry of Object.values(content) as any[]) {
      expect(entry).toHaveProperty('uri');
      expect(entry).toHaveProperty('title');
      expect(entry).toHaveProperty('portal');
      expect(entry).toHaveProperty('section');
      expect(entry).toHaveProperty('summary');
      expect(entry).toHaveProperty('tags');
      expect(entry).toHaveProperty('content');
    }
  });

  it('meta.json contains index, llms, llms_full keys', () => {
    const raw = fs.readFileSync(path.join(OUTPUT_BUNDLE_DIR, 'meta.json'), 'utf-8');
    const meta = JSON.parse(raw);
    expect(meta).toHaveProperty('index');
    expect(meta).toHaveProperty('llms');
    expect(meta).toHaveProperty('llms_full');
  });

  it('portals in manifest cover all 5 portals', () => {
    const raw = fs.readFileSync(path.join(OUTPUT_BUNDLE_DIR, 'manifest.json'), 'utf-8');
    const manifest = JSON.parse(raw);
    const portals = Object.keys(manifest.portals);
    expect(portals).toContain('ixopay-dev');
    expect(portals).toContain('ixopay-manual');
    expect(portals).toContain('ixopay-modules');
    expect(portals).toContain('tokenex');
    expect(portals).toContain('congrify');
  });
});
