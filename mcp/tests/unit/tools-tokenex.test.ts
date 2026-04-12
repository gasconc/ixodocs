import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createTokenExTools } from '../../src/tools/tokenex.js';
import type { TokenExConfig } from '../../src/config.js';

const config: TokenExConfig = {
  tokenExId: 'test-tokenex-id',
  clientSecret: 'test-client-secret',
  env: 'test',
  baseUrl: 'https://test-api.tokenex.test',
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

function getTool(tools: ReturnType<typeof createTokenExTools>, name: string) {
  const tool = tools.find((t) => t.name === name);
  if (!tool) throw new Error(`Tool not found: ${name}`);
  return tool;
}

describe('tokenex_tokenize tool', () => {
  it('tokenizes data successfully', async () => {
    mockFetch(200, '{"Success":true,"Token":"tok_abc123"}');
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_tokenize');
    const result = await tool.handler({ data: '4111111111111111' });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('HTTP 200');
  });

  it('includes token scheme when provided', async () => {
    let capturedBody: string = '';
    globalThis.fetch = async (_url, init?: RequestInit) => {
      capturedBody = init?.body as string;
      return new Response('{"Success":true}', { status: 200 });
    };
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_tokenize');
    await tool.handler({ data: '4111111111111111', tokenScheme: 'PCI' });
    const parsed = JSON.parse(capturedBody);
    expect(parsed.TokenScheme).toBe('PCI');
  });

  it('sends TokenExID in the body', async () => {
    let capturedBody: string = '';
    globalThis.fetch = async (_url, init?: RequestInit) => {
      capturedBody = init?.body as string;
      return new Response('{"Success":true}', { status: 200 });
    };
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_tokenize');
    await tool.handler({ data: '4111111111111111' });
    const parsed = JSON.parse(capturedBody);
    expect(parsed.TokenExID).toBe('test-tokenex-id');
  });

  it('handles fetch errors', async () => {
    globalThis.fetch = async () => { throw new Error('Network error'); };
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_tokenize');
    const result = await tool.handler({ data: '4111111111111111' });
    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain('Network error');
  });
});

describe('tokenex_detokenize tool', () => {
  it('detokenizes a token', async () => {
    mockFetch(200, '{"Success":true,"Value":"4111111111111111"}');
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_detokenize');
    const result = await tool.handler({ token: 'tok_abc123' });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('HTTP 200');
  });

  it('sends token in request body', async () => {
    let capturedBody: string = '';
    globalThis.fetch = async (_url, init?: RequestInit) => {
      capturedBody = init?.body as string;
      return new Response('{"Success":true}', { status: 200 });
    };
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_detokenize');
    await tool.handler({ token: 'tok_abc123' });
    const parsed = JSON.parse(capturedBody);
    expect(parsed.Token).toBe('tok_abc123');
  });

  it('handles errors', async () => {
    globalThis.fetch = async () => { throw new Error('Timeout'); };
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_detokenize');
    const result = await tool.handler({ token: 'tok_abc123' });
    expect(result.isError).toBe(true);
  });
});

describe('tokenex_delete_token tool', () => {
  it('deletes a token', async () => {
    mockFetch(200, '{"Success":true}');
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_delete_token');
    const result = await tool.handler({ token: 'tok_abc123' });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('HTTP 200');
  });

  it('handles non-200 responses', async () => {
    mockFetch(404, '{"Success":false,"Error":"Token not found"}');
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_delete_token');
    const result = await tool.handler({ token: 'invalid-token' });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('HTTP 404');
  });

  it('handles errors', async () => {
    globalThis.fetch = async () => { throw new Error('Connection failed'); };
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_delete_token');
    const result = await tool.handler({ token: 'tok_abc123' });
    expect(result.isError).toBe(true);
  });
});

describe('tokenex_call tool', () => {
  it('makes a generic request to any endpoint', async () => {
    mockFetch(200, '{"Success":true}');
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_call');
    const result = await tool.handler({
      endpoint: '/TokenServices/ValidateToken',
      body: { Token: 'tok_abc123' },
    });
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain('HTTP 200');
  });

  it('merges body with TokenExID', async () => {
    let capturedBody: string = '';
    globalThis.fetch = async (_url, init?: RequestInit) => {
      capturedBody = init?.body as string;
      return new Response('{}', { status: 200 });
    };
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_call');
    await tool.handler({ endpoint: '/TokenServices/ValidateToken', body: { Token: 'tok_xyz' } });
    const parsed = JSON.parse(capturedBody);
    expect(parsed.TokenExID).toBe('test-tokenex-id');
    expect(parsed.Token).toBe('tok_xyz');
  });

  it('handles endpoint without leading slash', async () => {
    mockFetch(200, '{}');
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_call');
    const result = await tool.handler({ endpoint: 'TokenServices/ValidateToken', body: {} });
    expect(result.isError).toBeFalsy();
  });

  it('handles errors', async () => {
    globalThis.fetch = async () => { throw new Error('Server error'); };
    const tools = createTokenExTools(config);
    const tool = getTool(tools, 'tokenex_call');
    const result = await tool.handler({ endpoint: '/test', body: {} });
    expect(result.isError).toBe(true);
  });
});
