export function mockFetch(responses: Map<string, { status: number; body: string }>): void {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const url = typeof input === 'string' ? input : input.toString();
    for (const [pattern, response] of responses) {
      if (url.includes(pattern)) {
        return new Response(response.body, { status: response.status, headers: { 'content-type': 'application/json' } });
      }
    }
    return new Response('Not Found', { status: 404 });
  };
  return () => { globalThis.fetch = originalFetch; };
}

export function restoreFetch(original: typeof fetch): void {
  globalThis.fetch = original;
}
