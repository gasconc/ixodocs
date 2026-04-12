export interface IxopayConfig {
  apiKey: string;
  apiSecret: string;
  baseUrl: string;
}

export interface TokenExConfig {
  tokenExId: string;
  clientSecret: string;
  env: 'test' | 'prod';
  baseUrl: string;
}

export interface CongrifyConfig {
  apiKey: string;
  baseUrl: string;
}

export interface AppConfig {
  ixopay?: IxopayConfig;
  tokenex?: TokenExConfig;
  congrify?: CongrifyConfig;
  bundleDir: string;
}

function validateUrl(url: string, label: string): string {
  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new Error(`${label}: only http/https protocols allowed, got ${parsed.protocol}`);
    }
    return parsed.toString().replace(/\/$/, '');
  } catch (e) {
    if (e instanceof Error && e.message.startsWith(label)) throw e;
    throw new Error(`${label}: invalid URL "${url}"`);
  }
}

export function loadConfig(): AppConfig {
  const config: AppConfig = {
    bundleDir: process.env.IXODOCS_BUNDLE_DIR || '',
  };

  // Ixopay
  const ixoKey = process.env.IXOPAY_API_KEY;
  const ixoSecret = process.env.IXOPAY_API_SECRET;
  if (ixoKey && ixoSecret) {
    config.ixopay = {
      apiKey: ixoKey,
      apiSecret: ixoSecret,
      baseUrl: validateUrl(
        process.env.IXOPAY_BASE_URL || 'https://gateway.ixopay.com/api/v3',
        'IXOPAY_BASE_URL'
      ),
    };
  }

  // TokenEx
  const txId = process.env.TOKENEX_ID;
  const txSecret = process.env.TOKENEX_CLIENT_SECRET;
  if (txId && txSecret) {
    const txEnv = (process.env.TOKENEX_ENV || 'test') as 'test' | 'prod';
    const defaultTxUrl = txEnv === 'prod'
      ? 'https://api.tokenex.com'
      : 'https://test-api.tokenex.com';
    config.tokenex = {
      tokenExId: txId,
      clientSecret: txSecret,
      env: txEnv,
      baseUrl: validateUrl(
        process.env.TOKENEX_BASE_URL || defaultTxUrl,
        'TOKENEX_BASE_URL'
      ),
    };
  }

  // Congrify
  const cgKey = process.env.CONGRIFY_API_KEY;
  if (cgKey) {
    config.congrify = {
      apiKey: cgKey,
      baseUrl: validateUrl(
        process.env.CONGRIFY_BASE_URL || 'https://api.congrify.com',
        'CONGRIFY_BASE_URL'
      ),
    };
  }

  return config;
}
