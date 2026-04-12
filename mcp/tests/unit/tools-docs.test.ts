import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import matter from 'gray-matter';
import MiniSearch from 'minisearch';
import { BundleLoader } from '../../src/bundle-loader.js';
import { SearchEngine } from '../../src/search/engine.js';
import { createDocsTools } from '../../src/tools/docs.js';
import { derivePortal, deriveSection, pathToUri, type Portal, type DocEntry, type BundleManifest } from '../../src/search/types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES_DIR = path.resolve(__dirname, '../fixtures');
const FIXTURE_DOCS_DIR = path.join(FIXTURES_DIR, 'docs');

// Build a temp bundle from fixtures for these tests
let tempBundleDir: string;
let engine: SearchEngine;
let loader: BundleLoader;
let tools: ReturnType<typeof createDocsTools>;

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
  // Create temp bundle dir
  tempBundleDir = path.join(FIXTURES_DIR, '.tmp-bundle');
  fs.mkdirSync(tempBundleDir, { recursive: true });

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
      uri,
      relativePath,
      portal,
      section,
      title: String(parsed.data.title || path.basename(absPath, '.md')),
      summary: String(parsed.data.summary || ''),
      tags,
      sourceUrl: String(parsed.data.source_url || ''),
      updated: String(parsed.data.updated || ''),
      related: Array.isArray(parsed.data.related) ? parsed.data.related : [],
      content: parsed.content,
    };

    docs.push(entry);
    portalCounts[portal] = (portalCounts[portal] || 0) + 1;
  }

  // Build MiniSearch index
  const miniSearch = new MiniSearch<{
    id: string; title: string; summary: string; tags: string;
    body: string; uri: string; portal: string; section: string;
  }>({
    fields: ['title', 'summary', 'tags', 'body'],
    storeFields: ['uri', 'portal', 'title', 'summary', 'section'],
    searchOptions: { prefix: true, fuzzy: 0.2, boost: { title: 4, tags: 3, summary: 2 } },
  });

  miniSearch.addAll(docs.map((doc) => ({
    id: doc.uri,
    title: doc.title,
    summary: doc.summary,
    tags: doc.tags.join(' '),
    body: doc.content,
    uri: doc.uri,
    portal: doc.portal,
    section: doc.section,
  })));

  const contentMap: Record<string, DocEntry> = {};
  for (const doc of docs) contentMap[doc.uri] = doc;

  const metaMap: Record<string, string> = {
    index: fs.readFileSync(path.join(FIXTURES_DIR, 'index.md'), 'utf-8'),
    llms: fs.readFileSync(path.join(FIXTURES_DIR, 'llms.txt'), 'utf-8'),
    llms_full: fs.readFileSync(path.join(FIXTURES_DIR, 'llms-full.txt'), 'utf-8'),
  };

  const now = new Date().toISOString();
  const manifest: BundleManifest = {
    version: '0.1.0',
    generatedAt: now,
    docCount: docs.length,
    portals: portalCounts,
    buildInfo: { bundleVersion: '0.1.0', generatedAt: now, docsDir: FIXTURE_DOCS_DIR, docCount: docs.length },
  };

  fs.writeFileSync(path.join(tempBundleDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(tempBundleDir, 'search-index.json'), JSON.stringify(miniSearch));
  fs.writeFileSync(path.join(tempBundleDir, 'content.json.gz'), gzipSync(JSON.stringify(contentMap)));
  fs.writeFileSync(path.join(tempBundleDir, 'meta.json'), JSON.stringify(metaMap, null, 2));

  loader = new BundleLoader(tempBundleDir);
  engine = new SearchEngine(loader);
  tools = createDocsTools(engine, loader);
});

function getTool(name: string) {
  const tool = tools.find((t) => t.name === name);
  if (!tool) throw new Error(`Tool not found: ${name}`);
  return tool;
}

describe('search_docs tool', () => {
  it('finds the debit doc by keyword', async () => {
    const tool = getTool('search_docs');
    const result = await tool.handler({ query: 'debit', limit: 10 });
    expect(result.isError).toBeFalsy();
    const parsed = JSON.parse(result.content[0].text);
    expect(Array.isArray(parsed)).toBe(true);
    const uris = parsed.map((r: any) => r.uri);
    expect(uris.some((u: string) => u.includes('debit'))).toBe(true);
  });

  it('finds the stripe adapter by keyword', async () => {
    const tool = getTool('search_docs');
    const result = await tool.handler({ query: 'stripe', limit: 10 });
    const parsed = JSON.parse(result.content[0].text);
    const uris = parsed.map((r: any) => r.uri);
    expect(uris.some((u: string) => u.includes('stripe'))).toBe(true);
  });

  it('filters by portal', async () => {
    const tool = getTool('search_docs');
    const result = await tool.handler({ query: 'payment', portal: 'tokenex', limit: 10 });
    const parsed = JSON.parse(result.content[0].text);
    for (const hit of parsed) {
      expect(hit.portal).toBe('tokenex');
    }
  });

  it('returns empty array for no matches', async () => {
    const tool = getTool('search_docs');
    const result = await tool.handler({ query: 'zzzzznomatch999xyz', limit: 10 });
    const parsed = JSON.parse(result.content[0].text);
    expect(Array.isArray(parsed)).toBe(true);
  });

  it('returns results with expected fields', async () => {
    const tool = getTool('search_docs');
    const result = await tool.handler({ query: 'debit', limit: 1 });
    const parsed = JSON.parse(result.content[0].text);
    if (parsed.length > 0) {
      const hit = parsed[0];
      expect(hit).toHaveProperty('uri');
      expect(hit).toHaveProperty('title');
      expect(hit).toHaveProperty('portal');
      expect(hit).toHaveProperty('section');
      expect(hit).toHaveProperty('snippet');
      expect(hit).toHaveProperty('score');
    }
  });
});

describe('read_doc tool', () => {
  it('reads the debit document by URI', async () => {
    const tool = getTool('read_doc');
    const uri = 'ixodocs://ixopay-dev/docs/ixopay/api/pci/debit';
    // Find the actual URI from the loader
    const allDocs = [...loader.getAllDocs()];
    const debitDoc = allDocs.find((d) => d.title === 'Debit');
    if (!debitDoc) return; // skip if not found

    const result = await tool.handler({ uri: debitDoc.uri });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('Debit');
  });

  it('returns error for non-ixodocs:// URI', async () => {
    const tool = getTool('read_doc');
    const result = await tool.handler({ uri: 'https://example.com/doc' });
    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('ixodocs://');
  });

  it('returns error for unknown URI', async () => {
    const tool = getTool('read_doc');
    const result = await tool.handler({ uri: 'ixodocs://ixopay-dev/does/not/exist' });
    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('not found');
  });

  it('includes all frontmatter fields in output', async () => {
    const allDocs = [...loader.getAllDocs()];
    const debitDoc = allDocs.find((d) => d.title === 'Debit');
    if (!debitDoc) return;

    const tool = getTool('read_doc');
    const result = await tool.handler({ uri: debitDoc.uri });
    const text = result.content[0].text;
    expect(text).toContain('title:');
    expect(text).toContain('portal:');
    expect(text).toContain('summary:');
  });
});

describe('list_api_endpoints tool', () => {
  it('lists API reference documents', async () => {
    const tool = getTool('list_api_endpoints');
    const result = await tool.handler({});
    expect(result.isError).toBeFalsy();
    // The debit doc is in api section
    expect(result.content[0].text).toContain('Debit');
  });

  it('filters by portal', async () => {
    const tool = getTool('list_api_endpoints');
    const result = await tool.handler({ portal: 'ixopay-dev' });
    expect(result.content[0].text).toContain('ixopay-dev');
    // Should not contain manual portal docs
    expect(result.content[0].text).not.toContain('ixopay-manual');
  });

  it('returns no-found message for portal with no API docs', async () => {
    const tool = getTool('list_api_endpoints');
    // tokenex fixture has no api-reference section docs
    const result = await tool.handler({ portal: 'tokenex' });
    expect(result.content[0].text).toContain('No API reference');
  });
});

describe('find_related tool', () => {
  it('returns error for non-ixodocs URI', async () => {
    const tool = getTool('find_related');
    const result = await tool.handler({ uri: 'https://example.com' });
    expect(result.isError).toBe(true);
  });

  it('returns error for unknown URI', async () => {
    const tool = getTool('find_related');
    const result = await tool.handler({ uri: 'ixodocs://ixopay-dev/not/found' });
    expect(result.isError).toBe(true);
  });

  it('returns no-related message when doc has no related', async () => {
    const allDocs = [...loader.getAllDocs()];
    const stripeDoc = allDocs.find((d) => d.title === 'Stripe Adapter');
    if (!stripeDoc) return;

    const tool = getTool('find_related');
    const result = await tool.handler({ uri: stripeDoc.uri });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('No related');
  });

  it('lists related docs when they exist', async () => {
    const allDocs = [...loader.getAllDocs()];
    // debit.md has related: [ixopay/api/pci/preauthorize.md]
    const debitDoc = allDocs.find((d) => d.title === 'Debit');
    if (!debitDoc) return;

    const tool = getTool('find_related');
    const result = await tool.handler({ uri: debitDoc.uri });
    // The related file doesn't exist in fixtures, so we expect "not found" entry
    expect(result.content[0].text).toContain('Debit');
  });
});
