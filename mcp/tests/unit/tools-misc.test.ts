import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import matter from 'gray-matter';
import MiniSearch from 'minisearch';
import { createCongrifyTools } from '../../src/tools/congrify.js';
import { buildTools } from '../../src/tools/index.js';
import { listResources, readResource } from '../../src/resources.js';
import { BundleLoader } from '../../src/bundle-loader.js';
import { SearchEngine } from '../../src/search/engine.js';
import { derivePortal, deriveSection, pathToUri, type Portal, type DocEntry, type BundleManifest } from '../../src/search/types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES_DIR = path.resolve(__dirname, '../fixtures');
const FIXTURE_DOCS_DIR = path.join(FIXTURES_DIR, 'docs');
const TEMP_BUNDLE_DIR = path.join(FIXTURES_DIR, '.tmp-misc-bundle');

function walkMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkMdFiles(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

let loader: BundleLoader;
let engine: SearchEngine;

beforeAll(() => {
  fs.mkdirSync(TEMP_BUNDLE_DIR, { recursive: true });

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

  const metaMap = {
    index: fs.readFileSync(path.join(FIXTURES_DIR, 'index.md'), 'utf-8'),
    llms: fs.readFileSync(path.join(FIXTURES_DIR, 'llms.txt'), 'utf-8'),
    llms_full: fs.readFileSync(path.join(FIXTURES_DIR, 'llms-full.txt'), 'utf-8'),
  };

  const now = new Date().toISOString();
  const manifest: BundleManifest = {
    version: '0.1.0', generatedAt: now,
    docCount: docs.length, portals: portalCounts,
    buildInfo: { bundleVersion: '0.1.0', generatedAt: now, docsDir: FIXTURE_DOCS_DIR, docCount: docs.length },
  };

  fs.writeFileSync(path.join(TEMP_BUNDLE_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(TEMP_BUNDLE_DIR, 'search-index.json'), JSON.stringify(miniSearch));
  fs.writeFileSync(path.join(TEMP_BUNDLE_DIR, 'content.json.gz'), gzipSync(JSON.stringify(contentMap)));
  fs.writeFileSync(path.join(TEMP_BUNDLE_DIR, 'meta.json'), JSON.stringify(metaMap, null, 2));

  loader = new BundleLoader(TEMP_BUNDLE_DIR);
  engine = new SearchEngine(loader);
});

// --------------- congrify tools ---------------

describe('createCongrifyTools', () => {
  it('returns congrify_call when no config', () => {
    const tools = createCongrifyTools(undefined);
    expect(tools).toHaveLength(1);
    expect(tools[0].name).toBe('congrify_call');
  });

  it('returns not-configured message when no config', async () => {
    const tools = createCongrifyTools(undefined);
    const result = await tools[0].handler({ endpoint: '/test', method: 'GET' });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('not configured');
  });

  it('returns not-implemented message when config is provided', async () => {
    const tools = createCongrifyTools({ apiKey: 'key', baseUrl: 'https://api.congrify.com' });
    const result = await tools[0].handler({ endpoint: '/test', method: 'GET' });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('not yet implemented');
  });
});

// --------------- buildTools (index.ts) ---------------

describe('buildTools', () => {
  it('returns doc tools without optional API tools when no credentials', () => {
    const config = { bundleDir: TEMP_BUNDLE_DIR };
    const tools = buildTools(config, engine, loader);
    const names = tools.map((t) => t.name);
    expect(names).toContain('search_docs');
    expect(names).toContain('read_doc');
    expect(names).toContain('list_api_endpoints');
    expect(names).toContain('find_related');
    expect(names).toContain('congrify_call');
    expect(names).not.toContain('ixopay_call');
    expect(names).not.toContain('tokenex_tokenize');
  });

  it('includes ixopay tools when ixopay config provided', () => {
    const config = {
      bundleDir: TEMP_BUNDLE_DIR,
      ixopay: { apiKey: 'k', apiSecret: 's', baseUrl: 'https://gateway.ixopay.com/api/v3' },
    };
    const tools = buildTools(config, engine, loader);
    const names = tools.map((t) => t.name);
    expect(names).toContain('ixopay_call');
    expect(names).toContain('ixopay_transaction_status');
  });

  it('includes tokenex tools when tokenex config provided', () => {
    const config = {
      bundleDir: TEMP_BUNDLE_DIR,
      tokenex: { tokenExId: 'tid', clientSecret: 'cs', env: 'test' as const, baseUrl: 'https://test-api.tokenex.com' },
    };
    const tools = buildTools(config, engine, loader);
    const names = tools.map((t) => t.name);
    expect(names).toContain('tokenex_tokenize');
    expect(names).toContain('tokenex_detokenize');
    expect(names).toContain('tokenex_delete_token');
    expect(names).toContain('tokenex_call');
  });
});

// --------------- resources.ts ---------------

describe('listResources', () => {
  it('includes meta resources', () => {
    const resources = listResources(loader);
    const uris = resources.map((r) => r.uri);
    expect(uris).toContain('ixodocs://meta/index');
    expect(uris).toContain('ixodocs://meta/llms');
    expect(uris).toContain('ixodocs://meta/llms-full');
    expect(uris).toContain('ixodocs://meta/build-info');
  });

  it('includes doc resources', () => {
    const resources = listResources(loader);
    const docResources = resources.filter((r) => !r.uri.startsWith('ixodocs://meta/'));
    expect(docResources.length).toBe(6);
  });

  it('each resource has required fields', () => {
    const resources = listResources(loader);
    for (const r of resources) {
      expect(r).toHaveProperty('uri');
      expect(r).toHaveProperty('name');
      expect(r).toHaveProperty('description');
      expect(r).toHaveProperty('mimeType');
    }
  });
});

describe('readResource', () => {
  it('reads meta/index resource', () => {
    const result = readResource('ixodocs://meta/index', loader);
    expect(result).not.toBeNull();
    expect(result!.mimeType).toBe('text/markdown');
    expect(result!.content).toBeTruthy();
  });

  it('reads meta/llms resource', () => {
    const result = readResource('ixodocs://meta/llms', loader);
    expect(result).not.toBeNull();
    expect(result!.mimeType).toBe('text/markdown');
  });

  it('reads meta/llms-full resource', () => {
    const result = readResource('ixodocs://meta/llms-full', loader);
    expect(result).not.toBeNull();
    expect(result!.mimeType).toBe('text/markdown');
  });

  it('reads meta/build-info resource as JSON', () => {
    const result = readResource('ixodocs://meta/build-info', loader);
    expect(result).not.toBeNull();
    expect(result!.mimeType).toBe('application/json');
    expect(() => JSON.parse(result!.content)).not.toThrow();
  });

  it('reads a doc resource by URI', () => {
    const allDocs = [...loader.getAllDocs()];
    const firstDoc = allDocs[0];
    const result = readResource(firstDoc.uri, loader);
    expect(result).not.toBeNull();
    expect(result!.mimeType).toBe('text/markdown');
  });

  it('returns null for unknown URI', () => {
    const result = readResource('ixodocs://unknown/does/not/exist', loader);
    expect(result).toBeNull();
  });

  it('returns null for non-ixodocs URI', () => {
    const result = readResource('https://example.com/doc', loader);
    expect(result).toBeNull();
  });
});
