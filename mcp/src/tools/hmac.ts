import { createHmac, createHash } from 'node:crypto';

export function rfc7231Date(date?: Date): string {
  return (date || new Date()).toUTCString();
}

export function signIxopayRequest(params: {
  method: string;
  requestUri: string;
  body: string;
  contentType: string;
  date: string;
  apiSecret: string;
}): string {
  const { method, requestUri, body, contentType, date, apiSecret } = params;
  const bodyHash = createHash('sha512').update(body).digest('base64');
  const sigString = `${method}\n${bodyHash}\n${contentType}\n${date}\n${requestUri}`;
  return createHmac('sha512', apiSecret).update(sigString).digest('base64');
}
