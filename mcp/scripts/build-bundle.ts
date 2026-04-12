#!/usr/bin/env tsx
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import matter from 'gray-matter';
import MiniSearch from 'minisearch';
import {
  derivePortal,
  deriveSection,
  pathToUri,
  PORTALS,
  type Portal,
  type DocEntry,
  type BundleManifest,
} from '../src/search/types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const DOCS_DIR = path.join(ROOT, 'docs');
const BUNDLE_DIR = path.join(ROOT, 'mcp', 'bundle');

function walkMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkMdFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

function buildBundle() {
  console.log(`Scanning docs in: ${DOCS_DIR}`);
  const mdFiles = walkMdFiles(DOCS_DIR);
  console.log(`Found ${mdFiles.length} markdown files`);

  const docs: DocEntry[] = [];
  const portalCounts: Record<Portal, number> = {
    'ixopay-dev': 0,
    'ixopay-manual': 0,
    'ixopay-modules': 0,
    'tokenex': 0,
    'congrify': 0,
  };

  for (const absPath of mdFiles) {
    const relativePath = path.relative(ROOT, absPath).replace(/\\/g, '/');
    const fileContent = fs.readFileSync(absPath, 'utf-8');
    const parsed = matter(fileContent);

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

  const now = new Date().toISOString();

  // Build MiniSearch index
  const miniSearch = new MiniSearch<{
    id: string;
    title: string;
    summary: string;
    tags: string;
    body: string;
    uri: string;
    portal: string;
    section: string;
  }>({
    fields: ['title', 'summary', 'tags', 'body'],
    storeFields: ['uri', 'portal', 'title', 'summary', 'section'],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: { title: 4, tags: 3, summary: 2 },
    },
  });

  miniSearch.addAll(
    docs.map((doc) => ({
      id: doc.uri,
      title: doc.title,
      summary: doc.summary,
      tags: doc.tags.join(' '),
      body: doc.content,
      uri: doc.uri,
      portal: doc.portal,
      section: doc.section,
    }))
  );

  // Build content map (uri -> DocEntry)
  const contentMap: Record<string, DocEntry> = {};
  for (const doc of docs) {
    contentMap[doc.uri] = doc;
  }

  // Build meta map from root-level files
  const metaMap: Record<string, string> = {};
  for (const name of ['index.md', 'llms.txt', 'llms-full.txt']) {
    const metaPath = path.join(ROOT, name);
    if (fs.existsSync(metaPath)) {
      const key = name.replace('.md', '').replace('.txt', '').replace('-', '_');
      metaMap[key] = fs.readFileSync(metaPath, 'utf-8');
    }
  }

  // Manifest
  const manifest: BundleManifest = {
    version: '0.1.0',
    generatedAt: now,
    docCount: docs.length,
    portals: portalCounts,
    buildInfo: {
      bundleVersion: '0.1.0',
      generatedAt: now,
      docsDir: DOCS_DIR,
      docCount: docs.length,
    },
  };

  // Write bundle files
  fs.mkdirSync(BUNDLE_DIR, { recursive: true });

  fs.writeFileSync(
    path.join(BUNDLE_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf-8'
  );

  fs.writeFileSync(
    path.join(BUNDLE_DIR, 'search-index.json'),
    JSON.stringify(miniSearch),
    'utf-8'
  );

  const contentGz = gzipSync(JSON.stringify(contentMap));
  fs.writeFileSync(path.join(BUNDLE_DIR, 'content.json.gz'), contentGz);

  fs.writeFileSync(
    path.join(BUNDLE_DIR, 'meta.json'),
    JSON.stringify(metaMap, null, 2),
    'utf-8'
  );

  console.log(`Bundle written to: ${BUNDLE_DIR}`);
  console.log(`  manifest.json — ${docs.length} docs`);
  console.log(`  search-index.json — MiniSearch index`);
  console.log(`  content.json.gz — ${(contentGz.length / 1024).toFixed(1)} KB compressed`);
  console.log(`  meta.json — ${Object.keys(metaMap).join(', ')}`);
  console.log('Portal counts:', portalCounts);
}

buildBundle();
