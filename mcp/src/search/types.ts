export type Portal = 'ixopay-dev' | 'ixopay-manual' | 'ixopay-modules' | 'tokenex' | 'congrify';

export type DocSection = 'api-reference' | 'guide' | 'adapter' | 'manual' | 'module' | 'reference' | 'recipe' | 'integration' | 'general';

export interface DocEntry {
  uri: string;           // ixodocs://portal/path
  relativePath: string;  // docs/ixopay/api/pci/debit.md
  portal: Portal;
  section: DocSection;
  title: string;
  summary: string;
  tags: string[];
  sourceUrl: string;
  updated: string;
  related: string[];
  content: string;       // full markdown body (without frontmatter)
}

export interface SearchHit {
  uri: string;
  title: string;
  portal: Portal;
  section: DocSection;
  summary: string;
  snippet: string;
  score: number;
}

export interface BundleManifest {
  version: string;
  generatedAt: string;
  docCount: number;
  portals: Record<Portal, number>;
  buildInfo: BuildInfo;
}

export interface BuildInfo {
  bundleVersion: string;
  generatedAt: string;
  docsDir: string;
  docCount: number;
}

export const PORTALS: Portal[] = ['ixopay-dev', 'ixopay-manual', 'ixopay-modules', 'tokenex', 'congrify'];

export function derivePortal(relativePath: string): Portal {
  const p = relativePath.replace(/\\/g, '/');
  if (p.includes('docs/congrify') || p.startsWith('congrify')) return 'congrify';
  if (p.includes('docs/tokenex') || p.startsWith('tokenex')) return 'tokenex';
  if (p.includes('docs/ixopay/manual') || p.startsWith('ixopay/manual')) return 'ixopay-manual';
  if (p.includes('docs/ixopay/modules') || p.startsWith('ixopay/modules')) return 'ixopay-modules';
  return 'ixopay-dev';
}

export function deriveSection(relativePath: string): DocSection {
  const p = relativePath.replace(/\\/g, '/').toLowerCase();
  if (p.includes('/api/') || p.includes('/api-reference/')) return 'api-reference';
  if (p.includes('/guides/') || p.includes('/guide/')) return 'guide';
  if (p.includes('/adapters/') || p.includes('/adapter/')) return 'adapter';
  if (p.includes('/manual/')) return 'manual';
  if (p.includes('/modules/')) return 'module';
  if (p.includes('/reference/')) return 'reference';
  if (p.includes('/recipes/') || p.includes('/recipe/')) return 'recipe';
  if (p.includes('/integrations/') || p.includes('/integration/')) return 'integration';
  return 'general';
}

export function pathToUri(relativePath: string, portal: Portal): string {
  // Remove docs/ prefix and .md extension
  let p = relativePath.replace(/\\/g, '/');
  p = p.replace(/^docs\//, '');
  p = p.replace(/\.md$/, '');
  return `ixodocs://${portal}/${p}`;
}
