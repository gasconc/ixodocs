import type { AppConfig } from '../config.js';
import type { SearchEngine } from '../search/engine.js';
import type { BundleLoader } from '../bundle-loader.js';
import { createDocsTools } from './docs.js';
import { createIxopayTools } from './ixopay.js';
import { createTokenExTools } from './tokenex.js';
import { createCongrifyTools } from './congrify.js';
import type { ToolDefinition } from './types.js';

export function buildTools(config: AppConfig, engine: SearchEngine, loader: BundleLoader): ToolDefinition<any>[] {
  const tools: ToolDefinition<any>[] = [
    ...createDocsTools(engine, loader),
  ];
  if (config.ixopay) tools.push(...createIxopayTools(config.ixopay));
  if (config.tokenex) tools.push(...createTokenExTools(config.tokenex));
  tools.push(...createCongrifyTools(config.congrify));
  return tools;
}

export type { ToolDefinition } from './types.js';
export { textResult, errorResult } from './types.js';
