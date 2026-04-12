import { z } from 'zod';
import type { SearchEngine } from '../search/engine.js';
import type { BundleLoader } from '../bundle-loader.js';
import type { Portal, DocSection } from '../search/types.js';
import { textResult, errorResult } from './types.js';
import type { ToolDefinition } from './types.js';

const portalEnum = z.enum(['ixopay-dev', 'ixopay-manual', 'ixopay-modules', 'tokenex', 'congrify']);
const sectionEnum = z.enum(['api-reference', 'guide', 'adapter', 'manual', 'module', 'reference', 'recipe', 'integration', 'general']);

export function createDocsTools(engine: SearchEngine, loader: BundleLoader): ToolDefinition<any>[] {
  const searchDocs: ToolDefinition<any> = {
    name: 'search_docs',
    description: 'Search the Ixopay, TokenEx, and Congrify documentation. Returns matching docs with title, URI, portal, and a content snippet.',
    inputSchema: z.object({
      query: z.string().describe('Search query'),
      portal: portalEnum.optional().describe('Filter by portal'),
      section: sectionEnum.optional().describe('Filter by section type'),
      limit: z.number().int().min(1).max(50).default(10).describe('Maximum number of results to return'),
    }),
    handler: async (args) => {
      try {
        const hits = engine.search(args.query, {
          portal: args.portal as Portal | undefined,
          section: args.section as DocSection | undefined,
          limit: args.limit,
        });
        const results = hits.map((h) => ({
          uri: h.uri,
          title: h.title,
          portal: h.portal,
          section: h.section,
          snippet: h.snippet,
          score: Math.round(h.score * 100) / 100,
        }));
        return textResult(JSON.stringify(results, null, 2));
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  const readDoc: ToolDefinition<any> = {
    name: 'read_doc',
    description: 'Read the full content of a documentation page by its URI (e.g. "ixodocs://ixopay-dev/ixopay/api/pci/debit").',
    inputSchema: z.object({
      uri: z.string().describe('The ixodocs:// URI of the document to read'),
    }),
    handler: async (args) => {
      try {
        if (!args.uri.startsWith('ixodocs://')) {
          return errorResult('URI must start with "ixodocs://"');
        }
        const doc = loader.readDoc(args.uri);
        if (!doc) {
          return errorResult(`Document not found: ${args.uri}`);
        }
        const header = [
          `---`,
          `title: ${doc.title}`,
          `portal: ${doc.portal}`,
          `section: ${doc.section}`,
          `summary: ${doc.summary}`,
          `tags: ${doc.tags.join(', ')}`,
          `updated: ${doc.updated}`,
          `source: ${doc.sourceUrl}`,
          `related: ${doc.related.join(', ')}`,
          `---`,
          '',
        ].join('\n');
        return textResult(header + doc.content);
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  const listApiEndpoints: ToolDefinition<any> = {
    name: 'list_api_endpoints',
    description: 'List all API reference documentation pages, optionally filtered by portal.',
    inputSchema: z.object({
      portal: portalEnum.optional().describe('Filter by portal'),
    }),
    handler: async (args) => {
      try {
        const groups: Record<string, Array<{ uri: string; title: string; summary: string }>> = {};
        for (const doc of loader.getAllDocs()) {
          if (doc.section !== 'api-reference') continue;
          if (args.portal && doc.portal !== args.portal) continue;
          if (!groups[doc.portal]) groups[doc.portal] = [];
          groups[doc.portal].push({ uri: doc.uri, title: doc.title, summary: doc.summary });
        }
        const lines: string[] = [];
        for (const [portal, entries] of Object.entries(groups)) {
          lines.push(`## ${portal}`);
          for (const entry of entries) {
            lines.push(`- **${entry.title}**`);
            lines.push(`  URI: ${entry.uri}`);
            if (entry.summary) lines.push(`  ${entry.summary}`);
          }
          lines.push('');
        }
        if (lines.length === 0) {
          return textResult('No API reference documents found.');
        }
        return textResult(lines.join('\n'));
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  const findRelated: ToolDefinition<any> = {
    name: 'find_related',
    description: 'Find documents related to a given document URI, resolved from the frontmatter "related" field.',
    inputSchema: z.object({
      uri: z.string().describe('The ixodocs:// URI of the source document'),
    }),
    handler: async (args) => {
      try {
        if (!args.uri.startsWith('ixodocs://')) {
          return errorResult('URI must start with "ixodocs://"');
        }
        const doc = loader.readDoc(args.uri);
        if (!doc) {
          return errorResult(`Document not found: ${args.uri}`);
        }
        if (!doc.related || doc.related.length === 0) {
          return textResult('No related documents found.');
        }
        const lines: string[] = [`Related documents for: ${doc.title}`, ''];
        for (const relUri of doc.related) {
          const relDoc = loader.readDoc(relUri);
          if (relDoc) {
            lines.push(`- **${relDoc.title}**`);
            lines.push(`  URI: ${relUri}`);
            if (relDoc.summary) lines.push(`  ${relDoc.summary}`);
          } else {
            lines.push(`- ${relUri} (not found)`);
          }
        }
        return textResult(lines.join('\n'));
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  return [searchDocs, readDoc, listApiEndpoints, findRelated];
}
