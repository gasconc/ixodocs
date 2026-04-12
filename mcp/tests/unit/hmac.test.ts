import { describe, it, expect } from 'vitest';
import { createHmac, createHash } from 'node:crypto';
import { rfc7231Date, signIxopayRequest } from '../../src/tools/hmac.js';

describe('rfc7231Date', () => {
  it('returns a string in RFC 7231 (UTC) format', () => {
    const result = rfc7231Date();
    // RFC 7231 date looks like "Thu, 10 Apr 2026 12:00:00 GMT"
    expect(result).toMatch(/^[A-Z][a-z]{2}, \d{2} [A-Z][a-z]{2} \d{4} \d{2}:\d{2}:\d{2} GMT$/);
  });

  it('formats a specific Date correctly', () => {
    const date = new Date('2026-04-10T12:00:00.000Z');
    const result = rfc7231Date(date);
    expect(result).toBe(date.toUTCString());
  });

  it('uses current time when no date provided', () => {
    const before = Date.now();
    const result = rfc7231Date();
    const after = Date.now();
    const resultTime = new Date(result).getTime();
    expect(resultTime).toBeGreaterThanOrEqual(before - 1000);
    expect(resultTime).toBeLessThanOrEqual(after + 1000);
  });
});

describe('signIxopayRequest', () => {
  const params = {
    method: 'POST',
    requestUri: '/api/v3/transaction/debit',
    body: '{"amount":100}',
    contentType: 'application/json',
    date: 'Fri, 10 Apr 2026 12:00:00 GMT',
    apiSecret: 'test-secret-key',
  };

  it('returns a base64 string', () => {
    const sig = signIxopayRequest(params);
    expect(sig).toMatch(/^[A-Za-z0-9+/]+=*$/);
  });

  it('produces the correct HMAC-SHA512 signature', () => {
    const { method, requestUri, body, contentType, date, apiSecret } = params;
    const bodyHash = createHash('sha512').update(body).digest('base64');
    const sigString = `${method}\n${bodyHash}\n${contentType}\n${date}\n${requestUri}`;
    const expected = createHmac('sha512', apiSecret).update(sigString).digest('base64');
    expect(signIxopayRequest(params)).toBe(expected);
  });

  it('changes signature when body changes', () => {
    const sig1 = signIxopayRequest(params);
    const sig2 = signIxopayRequest({ ...params, body: '{"amount":200}' });
    expect(sig1).not.toBe(sig2);
  });

  it('changes signature when secret changes', () => {
    const sig1 = signIxopayRequest(params);
    const sig2 = signIxopayRequest({ ...params, apiSecret: 'different-secret' });
    expect(sig1).not.toBe(sig2);
  });

  it('changes signature when method changes', () => {
    const sig1 = signIxopayRequest(params);
    const sig2 = signIxopayRequest({ ...params, method: 'GET' });
    expect(sig1).not.toBe(sig2);
  });

  it('changes signature when URI changes', () => {
    const sig1 = signIxopayRequest(params);
    const sig2 = signIxopayRequest({ ...params, requestUri: '/api/v3/transaction/preauthorize' });
    expect(sig1).not.toBe(sig2);
  });

  it('is deterministic for same inputs', () => {
    expect(signIxopayRequest(params)).toBe(signIxopayRequest(params));
  });

  it('handles empty body', () => {
    const sig = signIxopayRequest({ ...params, body: '' });
    expect(sig).toBeTruthy();
    expect(typeof sig).toBe('string');
  });
});
