import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';
import type { BundleManifest, DocEntry } from './search/types.js';

export class BundleLoader {
  private manifest: BundleManifest | null = null;
  private searchIndexJson: string | null = null;
  private contentMap: Map<string, DocEntry> | null = null;
  private metaMap: Record<string, string> | null = null;
  private bundleDir: string;
  private loaded = false;

  constructor(bundleDir?: string) {
    this.bundleDir = bundleDir || process.env.IXODOCS_BUNDLE_DIR ||
      path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../bundle');
  }

  load(): void {
    if (this.loaded) return;

    const manifestPath = path.join(this.bundleDir, 'manifest.json');
    const searchIndexPath = path.join(this.bundleDir, 'search-index.json');
    const metaPath = path.join(this.bundleDir, 'meta.json');

    if (!fs.existsSync(manifestPath)) {
      throw new Error(`Bundle not found at ${this.bundleDir}. Run: npm run build:bundle`);
    }

    this.manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) as BundleManifest;
    this.searchIndexJson = fs.readFileSync(searchIndexPath, 'utf-8');
    this.metaMap = JSON.parse(fs.readFileSync(metaPath, 'utf-8')) as Record<string, string>;

    this.loaded = true;
  }

  getManifest(): BundleManifest {
    this.load();
    return this.manifest!;
  }

  getSearchIndexJson(): string {
    this.load();
    return this.searchIndexJson!;
  }

  readDoc(uri: string): DocEntry | undefined {
    this.ensureContent();
    return this.contentMap!.get(uri);
  }

  getMeta(key: string): string | undefined {
    this.load();
    return this.metaMap![key];
  }

  getAllDocs(): IterableIterator<DocEntry> {
    this.ensureContent();
    return this.contentMap!.values();
  }

  private ensureContent(): void {
    this.load();
    if (this.contentMap !== null) return;

    const contentPath = path.join(this.bundleDir, 'content.json.gz');
    if (!fs.existsSync(contentPath)) {
      throw new Error(`content.json.gz not found at ${this.bundleDir}`);
    }

    const compressed = fs.readFileSync(contentPath);
    const raw = gunzipSync(compressed).toString('utf-8');
    const obj = JSON.parse(raw) as Record<string, DocEntry>;
    this.contentMap = new Map(Object.entries(obj));
  }
}
