import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createIxopayTools } from '../../src/tools/ixopay.js';
import type { IxopayConfig } from '../../src/config.js';

const config: IxopayConfig = {
  apiKey: 'test-api-key',
  apiSecret: 'test-api-secret',
  baseUrl: 'https://gateway.ixopay.test/api/v3',
};

let originalFetch: typeof globalThis.fetch;

beforeEach(() => {
  originalFetch = globalThis.fetch;
});

afterEach(() => {
  globalThis.fetch = originalFetch;
});

function mockFetch(status: number, body: string): void {
  globalThis.fetch = async () =>
    new Response(body, {
      status,
      statusText: status === 200 ? 'OK' : 'Error',
      headers: { 'content-type': 'application/json' },
    });
}

function getTool(tools: ReturnType<typeof createIxopayTools>, name: string) {
  const tool = tools.find((t) => t.name === name);
  if (!tool) throw new Error(`Tool not found: ${name}`);
  return tool;
}

describe('ixopay_call tool', () => {
  it('makes a POST request and returns HTTP response', async () => {
    mockFetch(200, '{"success":true}');
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_call');
    const result = await tool.handler({
      method: 'POST',
      endpoint: '/transaction/debit',
      body: '{"amount":100}',
    });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('HTTP 200');
    expect(result.content[0].text).toContain('{"success":true}');
  });

  it('makes a GET request', async () => {
    mockFetch(200, '{"status":"active"}');
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_call');
    const result = await tool.handler({
      method: 'GET',
      endpoint: '/transaction/abc123/status',
      body: '',
    });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('HTTP 200');
  });

  it('handles non-200 response gracefully', async () => {
    mockFetch(401, '{"error":"Unauthorized"}');
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_call');
    const result = await tool.handler({
      method: 'POST',
      endpoint: '/transaction/debit',
      body: '{}',
    });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('HTTP 401');
  });

  it('handles fetch errors by returning error result', async () => {
    globalThis.fetch = async () => { throw new Error('Network error'); };
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_call');
    const result = await tool.handler({
      method: 'POST',
      endpoint: '/transaction/debit',
      body: '{}',
    });
    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('Network error');
  });

  it('adds Authorization header with api key and signature', async () => {
    let capturedHeaders: Record<string, string> = {};
    globalThis.fetch = async (_url, init?: RequestInit) => {
      capturedHeaders = (init?.headers as Record<string, string>) || {};
      return new Response('{}', { status: 200 });
    };
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_call');
    await tool.handler({ method: 'POST', endpoint: '/test', body: '{}' });
    expect(capturedHeaders['Authorization']).toContain('test-api-key');
  });

  it('handles endpoint without leading slash', async () => {
    mockFetch(200, '{}');
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_call');
    const result = await tool.handler({
      method: 'POST',
      endpoint: 'transaction/debit',
      body: '{}',
    });
    expect(result.isError).toBeFalsy();
  });
});

describe('ixopay_transaction_status tool', () => {
  it('gets status by UUID', async () => {
    mockFetch(200, '{"status":"success"}');
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_transaction_status');
    const result = await tool.handler({ uuid: 'abc-123-uuid' });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('HTTP 200');
  });

  it('gets status by merchantTransactionId', async () => {
    mockFetch(200, '{"status":"pending"}');
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_transaction_status');
    const result = await tool.handler({ merchantTransactionId: 'merchant-tx-001' });
    expect(result.isError).toBeFalsy();
  });

  it('returns error when neither uuid nor merchantTransactionId is provided', async () => {
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_transaction_status');
    const result = await tool.handler({});
    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('uuid or merchantTransactionId');
  });

  it('handles fetch errors', async () => {
    globalThis.fetch = async () => { throw new Error('Connection refused'); };
    const tools = createIxopayTools(config);
    const tool = getTool(tools, 'ixopay_transaction_status');
    const result = await tool.handler({ uuid: 'some-uuid' });
    expect(result.isError).toBe(true);
  });
});
