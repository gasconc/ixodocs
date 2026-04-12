import { describe, it, expect } from 'vitest';
import { derivePortal, deriveSection, pathToUri } from '../../src/search/types.js';

describe('derivePortal', () => {
  it('returns congrify for docs/congrify paths', () => {
    expect(derivePortal('docs/congrify/integrations/adyen.md')).toBe('congrify');
  });

  it('returns congrify for bare congrify prefix', () => {
    expect(derivePortal('congrify/integrations/adyen.md')).toBe('congrify');
  });

  it('returns tokenex for docs/tokenex paths', () => {
    expect(derivePortal('docs/tokenex/3ds.md')).toBe('tokenex');
  });

  it('returns tokenex for bare tokenex prefix', () => {
    expect(derivePortal('tokenex/3ds.md')).toBe('tokenex');
  });

  it('returns ixopay-manual for docs/ixopay/manual paths', () => {
    expect(derivePortal('docs/ixopay/manual/getting-started.md')).toBe('ixopay-manual');
  });

  it('returns ixopay-manual for bare ixopay/manual prefix', () => {
    expect(derivePortal('ixopay/manual/getting-started.md')).toBe('ixopay-manual');
  });

  it('returns ixopay-modules for docs/ixopay/modules paths', () => {
    expect(derivePortal('docs/ixopay/modules/tokenex/tokenize.md')).toBe('ixopay-modules');
  });

  it('returns ixopay-modules for bare ixopay/modules prefix', () => {
    expect(derivePortal('ixopay/modules/tokenex/tokenize.md')).toBe('ixopay-modules');
  });

  it('returns ixopay-dev for docs/ixopay/api paths', () => {
    expect(derivePortal('docs/ixopay/api/pci/debit.md')).toBe('ixopay-dev');
  });

  it('returns ixopay-dev for docs/ixopay/adapters paths', () => {
    expect(derivePortal('docs/ixopay/adapters/stripe.md')).toBe('ixopay-dev');
  });

  it('handles Windows-style backslashes', () => {
    expect(derivePortal('docs\\congrify\\integrations\\adyen.md')).toBe('congrify');
  });
});

describe('deriveSection', () => {
  it('returns api-reference for /api/ paths', () => {
    expect(deriveSection('docs/ixopay/api/pci/debit.md')).toBe('api-reference');
  });

  it('returns api-reference for /api-reference/ paths', () => {
    expect(deriveSection('docs/ixopay/api-reference/overview.md')).toBe('api-reference');
  });

  it('returns guide for /guides/ paths', () => {
    expect(deriveSection('docs/ixopay/guides/authentication.md')).toBe('guide');
  });

  it('returns guide for /guide/ paths', () => {
    expect(deriveSection('docs/ixopay/guide/quickstart.md')).toBe('guide');
  });

  it('returns adapter for /adapters/ paths', () => {
    expect(deriveSection('docs/ixopay/adapters/stripe.md')).toBe('adapter');
  });

  it('returns manual for /manual/ paths', () => {
    expect(deriveSection('docs/ixopay/manual/getting-started.md')).toBe('manual');
  });

  it('returns module for /modules/ paths', () => {
    expect(deriveSection('docs/ixopay/modules/tokenex/tokenize.md')).toBe('module');
  });

  it('returns reference for /reference/ paths', () => {
    expect(deriveSection('docs/ixopay/reference/errors.md')).toBe('reference');
  });

  it('returns recipe for /recipes/ paths', () => {
    expect(deriveSection('docs/ixopay/recipes/3ds-flow.md')).toBe('recipe');
  });

  it('returns integration for /integrations/ paths', () => {
    expect(deriveSection('docs/congrify/integrations/adyen.md')).toBe('integration');
  });

  it('returns general as fallback', () => {
    expect(deriveSection('docs/tokenex/3ds.md')).toBe('general');
  });

  it('handles Windows-style backslashes', () => {
    expect(deriveSection('docs\\ixopay\\api\\pci\\debit.md')).toBe('api-reference');
  });
});

describe('pathToUri', () => {
  it('converts docs/ixopay/api/pci/debit.md to ixodocs:// URI', () => {
    expect(pathToUri('docs/ixopay/api/pci/debit.md', 'ixopay-dev'))
      .toBe('ixodocs://ixopay-dev/ixopay/api/pci/debit');
  });

  it('converts docs/tokenex/3ds.md to ixodocs:// URI', () => {
    expect(pathToUri('docs/tokenex/3ds.md', 'tokenex'))
      .toBe('ixodocs://tokenex/tokenex/3ds');
  });

  it('converts docs/congrify/integrations/adyen.md to ixodocs:// URI', () => {
    expect(pathToUri('docs/congrify/integrations/adyen.md', 'congrify'))
      .toBe('ixodocs://congrify/congrify/integrations/adyen');
  });

  it('strips the docs/ prefix', () => {
    const uri = pathToUri('docs/ixopay/adapters/stripe.md', 'ixopay-dev');
    expect(uri).not.toContain('docs/');
  });

  it('strips the .md extension', () => {
    const uri = pathToUri('docs/ixopay/adapters/stripe.md', 'ixopay-dev');
    expect(uri).not.toContain('.md');
  });

  it('handles Windows-style backslashes', () => {
    expect(pathToUri('docs\\ixopay\\api\\pci\\debit.md', 'ixopay-dev'))
      .toBe('ixodocs://ixopay-dev/ixopay/api/pci/debit');
  });
});
