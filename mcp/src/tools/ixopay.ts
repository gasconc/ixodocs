import { z } from 'zod';
import type { IxopayConfig } from '../config.js';
import { rfc7231Date, signIxopayRequest } from './hmac.js';
import { textResult, errorResult } from './types.js';
import type { ToolDefinition } from './types.js';

export function createIxopayTools(config: IxopayConfig): ToolDefinition<any>[] {
  const CONTENT_TYPE = 'application/json';

  async function ixopayFetch(method: string, endpoint: string, body: string): Promise<string> {
    const date = rfc7231Date();
    const requestUri = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const signature = signIxopayRequest({
      method: method.toUpperCase(),
      requestUri,
      body,
      contentType: CONTENT_TYPE,
      date,
      apiSecret: config.apiSecret,
    });
    const url = `${config.baseUrl}${requestUri}`;
    const headers: Record<string, string> = {
      'Date': date,
      'Content-Type': CONTENT_TYPE,
      'Authorization': `${config.apiKey}:${signature}`,
    };
    const fetchOptions: RequestInit = { method: method.toUpperCase(), headers };
    if (body) fetchOptions.body = body;

    const res = await fetch(url, fetchOptions);
    const text = await res.text();
    return `HTTP ${res.status} ${res.statusText}\n${text}`;
  }

  const ixopayCall: ToolDefinition<any> = {
    name: 'ixopay_call',
    description: 'Make a signed HMAC-authenticated request to the Ixopay API.',
    inputSchema: z.object({
      method: z.enum(['GET', 'POST', 'PUT', 'DELETE']).describe('HTTP method'),
      endpoint: z.string().describe('API endpoint path (e.g. /transaction/debit)'),
      body: z.string().optional().default('').describe('Request body as a JSON string'),
    }),
    handler: async (args) => {
      try {
        const result = await ixopayFetch(args.method, args.endpoint, args.body ?? '');
        return textResult(result);
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  const ixopayTransactionStatus: ToolDefinition<any> = {
    name: 'ixopay_transaction_status',
    description: 'Get the status of an Ixopay transaction by UUID or merchant transaction ID.',
    inputSchema: z.object({
      uuid: z.string().optional().describe('Ixopay transaction UUID'),
      merchantTransactionId: z.string().optional().describe('Merchant-assigned transaction ID'),
    }),
    handler: async (args) => {
      try {
        const identifier = args.uuid || args.merchantTransactionId;
        if (!identifier) {
          return errorResult('Either uuid or merchantTransactionId must be provided');
        }
        const result = await ixopayFetch('GET', `/transaction/${encodeURIComponent(identifier)}/status`, '');
        return textResult(result);
      } catch (e) {
        return errorResult(e instanceof Error ? e.message : String(e));
      }
    },
  };

  return [ixopayCall, ixopayTransactionStatus];
}
