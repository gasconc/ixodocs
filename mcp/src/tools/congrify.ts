import { z } from 'zod';
import type { CongrifyConfig } from '../config.js';
import { textResult, errorResult } from './types.js';
import type { ToolDefinition } from './types.js';

export function createCongrifyTools(config?: CongrifyConfig): ToolDefinition<any>[] {
  const congrifyCall: ToolDefinition<any> = {
    name: 'congrify_call',
    description: 'Make a request to the Congrify API.',
    inputSchema: z.object({
      endpoint: z.string().describe('API endpoint path'),
      method: z.string().optional().default('GET').describe('HTTP method'),
      body: z.string().optional().describe('Request body'),
    }),
    handler: async (_args) => {
      try {
        if (!config) {
          return textResult('Congrify API not configured');
        }
        return textResult('Congrify API integration not yet implemented');
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  return [congrifyCall];
}
