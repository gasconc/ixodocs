import MiniSearch from 'minisearch';
import type { SearchHit, Portal, DocSection } from './types.js';
import type { BundleLoader } from '../bundle-loader.js';

interface IndexedDoc {
  id: string;
  uri: string;
  portal: string;
  title: string;
  summary: string;
  section: string;
}

export class SearchEngine {
  private index: MiniSearch<IndexedDoc>;
  private loader: BundleLoader;

  constructor(loader: BundleLoader) {
    this.loader = loader;
    const json = loader.getSearchIndexJson();
    this.index = MiniSearch.loadJSON<IndexedDoc>(json, {
      fields: ['title', 'summary', 'tags', 'body'],
      storeFields: ['uri', 'portal', 'title', 'summary', 'section'],
      searchOptions: {
        prefix: true,
        fuzzy: 0.2,
        boost: { title: 4, tags: 3, summary: 2 },
      },
    });
  }

  search(
    query: string,
    options?: { portal?: Portal; section?: DocSection; limit?: number }
  ): SearchHit[] {
    const limit = options?.limit ?? 10;

    const rawResults = this.index.search(query);

    const filtered = rawResults.filter((r) => {
      if (options?.portal && r['portal'] !== options.portal) return false;
      if (options?.section && r['section'] !== options.section) return false;
      return true;
    });

    return filtered.slice(0, limit).map((r) => {
      const doc = this.loader.readDoc(r['uri'] as string);
      const snippet = doc
        ? this.generateSnippet(doc.content, query)
        : (r['summary'] as string) || '';

      return {
        uri: r['uri'] as string,
        title: r['title'] as string,
        portal: r['portal'] as Portal,
        section: r['section'] as DocSection,
        summary: r['summary'] as string,
        snippet,
        score: r.score,
      };
    });
  }

  private generateSnippet(content: string, query: string, maxLength = 200): string {
    const lower = content.toLowerCase();
    const terms = query
      .toLowerCase()
      .split(/\s+/)
      .filter((t) => t.length > 2);

    let bestPos = -1;
    for (const term of terms) {
      const pos = lower.indexOf(term);
      if (pos !== -1) {
        bestPos = pos;
        break;
      }
    }

    if (bestPos === -1) {
      // No match found — return the start of content
      const start = content.trimStart();
      return start.slice(0, maxLength) + (start.length > maxLength ? '…' : '');
    }

    // Extract surrounding context
    const contextStart = Math.max(0, bestPos - 60);
    const contextEnd = Math.min(content.length, contextStart + maxLength);
    const snippet = content.slice(contextStart, contextEnd).trim();

    const prefix = contextStart > 0 ? '…' : '';
    const suffix = contextEnd < content.length ? '…' : '';
    return prefix + snippet + suffix;
  }
}
