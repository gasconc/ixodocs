import { Server } from '@modelcontextprotocol/sdk/server';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { loadConfig } from './config.js';
import { BundleLoader } from './bundle-loader.js';
import { SearchEngine } from './search/engine.js';
import { buildTools } from './tools/index.js';
import { zodToJsonSchema } from './server-schema.js';
import { listResources, readResource } from './resources.js';
import { errorResult } from './tools/types.js';

export async function startStdioServer(): Promise<void> {
  const config = loadConfig();
  const loader = new BundleLoader(config.bundleDir || undefined);

  let bundleLoaded = false;
  try {
    loader.load();
    bundleLoaded = true;
  } catch (err) {
    console.error(`[ixodocs-mcp] Warning: Failed to load bundle: ${err}`);
    console.error('[ixodocs-mcp] Server will start but tools may not work.');
  }

  const engine = bundleLoaded ? new SearchEngine(loader) : null;
  const tools = engine ? buildTools(config, engine, loader) : [];

  const server = new Server(
    { name: 'ixodocs-mcp', version: '0.1.0' },
    { capabilities: { tools: {}, resources: {} } }
  );

  // List Tools
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: tools.map(t => ({
      name: t.name,
      description: t.description,
      inputSchema: zodToJsonSchema(t.inputSchema),
    })),
  }));

  // Call Tool
  server.setRequestHandler(CallToolRequestSchema, async (request): Promise<CallToolResult> => {
    const { name, arguments: args } = request.params;
    const tool = tools.find(t => t.name === name);
    if (!tool) {
      return errorResult(`Unknown tool: ${name}`) as unknown as CallToolResult;
    }
    try {
      const parsed = tool.inputSchema.parse(args || {});
      return await tool.handler(parsed) as unknown as CallToolResult;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      return errorResult(msg) as unknown as CallToolResult;
    }
  });

  // List Resources
  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    if (!bundleLoaded) {
      return { resources: [] };
    }
    return {
      resources: listResources(loader).map(r => ({
        uri: r.uri,
        name: r.name,
        description: r.description,
        mimeType: r.mimeType,
      })),
    };
  });

  // Read Resource
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params;
    if (!bundleLoaded) {
      throw new Error(`Bundle not loaded; cannot read resource: ${uri}`);
    }
    const result = readResource(uri, loader);
    if (!result) {
      throw new Error(`Resource not found: ${uri}`);
    }
    return {
      contents: [{
        uri,
        mimeType: result.mimeType,
        text: result.content,
      }],
    };
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
}
