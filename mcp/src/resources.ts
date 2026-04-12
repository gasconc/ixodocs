import type { BundleLoader } from './bundle-loader.js';

export interface ResourceEntry {
  uri: string;
  name: string;
  description: string;
  mimeType: string;
}

export function listResources(loader: BundleLoader): ResourceEntry[] {
  const resources: ResourceEntry[] = [];

  // Meta resources
  resources.push(
    { uri: 'ixodocs://meta/index', name: 'Documentation Index', description: 'Master navigation index of all 707 pages', mimeType: 'text/markdown' },
    { uri: 'ixodocs://meta/llms', name: 'LLMs.txt', description: 'Curated LLM-optimized summary', mimeType: 'text/markdown' },
    { uri: 'ixodocs://meta/llms-full', name: 'LLMs Full', description: 'Complete 707-entry documentation map', mimeType: 'text/markdown' },
    { uri: 'ixodocs://meta/build-info', name: 'Build Info', description: 'Bundle build metadata', mimeType: 'application/json' },
  );

  // All doc resources
  const manifest = loader.getManifest();
  if (manifest) {
    for (const doc of loader.getAllDocs()) {
      resources.push({
        uri: doc.uri,
        name: doc.title || doc.relativePath,
        description: doc.summary || '',
        mimeType: 'text/markdown',
      });
    }
  }

  return resources;
}

export function readResource(uri: string, loader: BundleLoader): { content: string; mimeType: string } | null {
  // Meta resources
  if (uri === 'ixodocs://meta/index') {
    const content = loader.getMeta('index');
    return content ? { content, mimeType: 'text/markdown' } : null;
  }
  if (uri === 'ixodocs://meta/llms') {
    const content = loader.getMeta('llms');
    return content ? { content, mimeType: 'text/markdown' } : null;
  }
  if (uri === 'ixodocs://meta/llms-full') {
    const content = loader.getMeta('llms_full');
    return content ? { content, mimeType: 'text/markdown' } : null;
  }
  if (uri === 'ixodocs://meta/build-info') {
    const manifest = loader.getManifest();
    return manifest ? { content: JSON.stringify(manifest, null, 2), mimeType: 'application/json' } : null;
  }

  // Doc resources
  if (uri.startsWith('ixodocs://')) {
    const doc = loader.readDoc(uri);
    if (doc) {
      return { content: doc.content, mimeType: 'text/markdown' };
    }
  }

  return null;
}
