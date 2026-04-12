import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { loadConfig } from '../../src/config.js';

const ORIGINAL_ENV = { ...process.env };

beforeEach(() => {
  // Clear all relevant env vars before each test
  delete process.env.IXOPAY_API_KEY;
  delete process.env.IXOPAY_API_SECRET;
  delete process.env.IXOPAY_BASE_URL;
  delete process.env.TOKENEX_ID;
  delete process.env.TOKENEX_CLIENT_SECRET;
  delete process.env.TOKENEX_ENV;
  delete process.env.TOKENEX_BASE_URL;
  delete process.env.CONGRIFY_API_KEY;
  delete process.env.CONGRIFY_BASE_URL;
  delete process.env.IXODOCS_BUNDLE_DIR;
});

afterEach(() => {
  // Restore env
  for (const key of Object.keys(process.env)) {
    if (!(key in ORIGINAL_ENV)) delete process.env[key];
  }
  Object.assign(process.env, ORIGINAL_ENV);
});

describe('loadConfig', () => {
  it('returns config with empty bundleDir when no env set', () => {
    const config = loadConfig();
    expect(config.bundleDir).toBe('');
    expect(config.ixopay).toBeUndefined();
    expect(config.tokenex).toBeUndefined();
    expect(config.congrify).toBeUndefined();
  });

  it('uses IXODOCS_BUNDLE_DIR env var', () => {
    process.env.IXODOCS_BUNDLE_DIR = '/custom/bundle';
    const config = loadConfig();
    expect(config.bundleDir).toBe('/custom/bundle');
  });

  it('does not set ixopay config when only API key is provided', () => {
    process.env.IXOPAY_API_KEY = 'key-only';
    const config = loadConfig();
    expect(config.ixopay).toBeUndefined();
  });

  it('does not set ixopay config when only API secret is provided', () => {
    process.env.IXOPAY_API_SECRET = 'secret-only';
    const config = loadConfig();
    expect(config.ixopay).toBeUndefined();
  });

  it('sets ixopay config with both key and secret', () => {
    process.env.IXOPAY_API_KEY = 'mykey';
    process.env.IXOPAY_API_SECRET = 'mysecret';
    const config = loadConfig();
    expect(config.ixopay).toBeDefined();
    expect(config.ixopay!.apiKey).toBe('mykey');
    expect(config.ixopay!.apiSecret).toBe('mysecret');
    expect(config.ixopay!.baseUrl).toBe('https://gateway.ixopay.com/api/v3');
  });

  it('uses custom IXOPAY_BASE_URL', () => {
    process.env.IXOPAY_API_KEY = 'k';
    process.env.IXOPAY_API_SECRET = 's';
    process.env.IXOPAY_BASE_URL = 'https://custom.ixopay.example.com/api/v3';
    const config = loadConfig();
    expect(config.ixopay!.baseUrl).toBe('https://custom.ixopay.example.com/api/v3');
  });

  it('strips trailing slash from IXOPAY_BASE_URL', () => {
    process.env.IXOPAY_API_KEY = 'k';
    process.env.IXOPAY_API_SECRET = 's';
    process.env.IXOPAY_BASE_URL = 'https://gateway.ixopay.com/api/v3/';
    const config = loadConfig();
    expect(config.ixopay!.baseUrl).not.toMatch(/\/$/);
  });

  it('throws on invalid IXOPAY_BASE_URL', () => {
    process.env.IXOPAY_API_KEY = 'k';
    process.env.IXOPAY_API_SECRET = 's';
    process.env.IXOPAY_BASE_URL = 'not-a-url';
    expect(() => loadConfig()).toThrow();
  });

  it('sets tokenex config with id and secret', () => {
    process.env.TOKENEX_ID = 'txid';
    process.env.TOKENEX_CLIENT_SECRET = 'txsecret';
    const config = loadConfig();
    expect(config.tokenex).toBeDefined();
    expect(config.tokenex!.tokenExId).toBe('txid');
    expect(config.tokenex!.clientSecret).toBe('txsecret');
    expect(config.tokenex!.env).toBe('test');
    expect(config.tokenex!.baseUrl).toBe('https://test-api.tokenex.com');
  });

  it('uses prod URL when TOKENEX_ENV=prod', () => {
    process.env.TOKENEX_ID = 'txid';
    process.env.TOKENEX_CLIENT_SECRET = 'txsecret';
    process.env.TOKENEX_ENV = 'prod';
    const config = loadConfig();
    expect(config.tokenex!.env).toBe('prod');
    expect(config.tokenex!.baseUrl).toBe('https://api.tokenex.com');
  });

  it('uses custom TOKENEX_BASE_URL', () => {
    process.env.TOKENEX_ID = 'txid';
    process.env.TOKENEX_CLIENT_SECRET = 'txsecret';
    process.env.TOKENEX_BASE_URL = 'https://custom.tokenex.example.com';
    const config = loadConfig();
    expect(config.tokenex!.baseUrl).toBe('https://custom.tokenex.example.com');
  });

  it('sets congrify config with API key', () => {
    process.env.CONGRIFY_API_KEY = 'cgkey';
    const config = loadConfig();
    expect(config.congrify).toBeDefined();
    expect(config.congrify!.apiKey).toBe('cgkey');
    expect(config.congrify!.baseUrl).toBe('https://api.congrify.com');
  });

  it('uses custom CONGRIFY_BASE_URL', () => {
    process.env.CONGRIFY_API_KEY = 'cgkey';
    process.env.CONGRIFY_BASE_URL = 'https://custom.congrify.example.com';
    const config = loadConfig();
    expect(config.congrify!.baseUrl).toBe('https://custom.congrify.example.com');
  });

  it('throws when CONGRIFY_BASE_URL protocol is not http/https', () => {
    process.env.CONGRIFY_API_KEY = 'cgkey';
    process.env.CONGRIFY_BASE_URL = 'ftp://congrify.com';
    expect(() => loadConfig()).toThrow();
  });
});
