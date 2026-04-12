import { z } from 'zod';
import type { TokenExConfig } from '../config.js';
import { textResult, errorResult } from './types.js';
import type { ToolDefinition } from './types.js';

export function createTokenExTools(config: TokenExConfig): ToolDefinition<any>[] {
  async function tokenexFetch(endpoint: string, body: object): Promise<string> {
    const url = `${config.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const payload = {
      TokenExID: config.tokenExId,
      ...body,
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'tx-tokenex-id': config.tokenExId,
        'tx-authentication': config.clientSecret,
      },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    return `HTTP ${res.status} ${res.statusText}\n${text}`;
  }

  const tokenexTokenize: ToolDefinition<any> = {
    name: 'tokenex_tokenize',
    description: 'Tokenize sensitive data (e.g. a card number) using TokenEx.',
    inputSchema: z.object({
      data: z.string().describe('The sensitive data to tokenize'),
      tokenScheme: z.string().optional().describe('TokenEx token scheme (e.g. "PCI")'),
    }),
    handler: async (args) => {
      try {
        const body: Record<string, string> = { Data: args.data };
        if (args.tokenScheme) body['TokenScheme'] = args.tokenScheme;
        const result = await tokenexFetch('/TokenServices/Tokenize', body);
        return textResult(result);
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  const tokenexDetokenize: ToolDefinition<any> = {
    name: 'tokenex_detokenize',
    description: 'Detokenize a TokenEx token to retrieve the original sensitive data.',
    inputSchema: z.object({
      token: z.string().describe('The TokenEx token to detokenize'),
    }),
    handler: async (args) => {
      try {
        const result = await tokenexFetch('/TokenServices/Detokenize', { Token: args.token });
        return textResult(result);
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  const tokenexDeleteToken: ToolDefinition<any> = {
    name: 'tokenex_delete_token',
    description: 'Delete a TokenEx token.',
    inputSchema: z.object({
      token: z.string().describe('The TokenEx token to delete'),
    }),
    handler: async (args) => {
      try {
        const result = await tokenexFetch('/TokenServices/DeleteToken', { Token: args.token });
        return textResult(result);
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  const tokenexCall: ToolDefinition<any> = {
    name: 'tokenex_call',
    description: 'Make a generic POST request to any TokenEx API endpoint.',
    inputSchema: z.object({
      endpoint: z.string().describe('API endpoint path (e.g. /TokenServices/ValidateToken)'),
      body: z.record(z.unknown()).describe('Request body as a JSON object'),
    }),
    handler: async (args) => {
      try {
        const result = await tokenexFetch(args.endpoint, args.body);
        return textResult(result);
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  return [tokenexTokenize, tokenexDetokenize, tokenexDeleteToken, tokenexCall];
}
