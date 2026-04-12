import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { zodToJsonSchema } from '../../src/server-schema.js';

describe('zodToJsonSchema', () => {
  it('converts a string field', () => {
    const schema = z.object({ name: z.string() });
    const result = zodToJsonSchema(schema);
    expect(result.properties).toMatchObject({ name: { type: 'string' } });
    expect(result.required).toContain('name');
  });

  it('converts a number field', () => {
    const schema = z.object({ amount: z.number() });
    const result = zodToJsonSchema(schema);
    expect(result.properties).toMatchObject({ amount: { type: 'number' } });
    expect(result.required).toContain('amount');
  });

  it('converts a boolean field', () => {
    const schema = z.object({ active: z.boolean() });
    const result = zodToJsonSchema(schema);
    expect(result.properties).toMatchObject({ active: { type: 'boolean' } });
    expect(result.required).toContain('active');
  });

  it('converts an enum field', () => {
    const schema = z.object({ color: z.enum(['red', 'green', 'blue']) });
    const result = zodToJsonSchema(schema);
    expect(result.properties).toMatchObject({
      color: { type: 'string', enum: ['red', 'green', 'blue'] },
    });
    expect(result.required).toContain('color');
  });

  it('makes optional fields not required', () => {
    const schema = z.object({ note: z.string().optional() });
    const result = zodToJsonSchema(schema);
    expect(result.required).toBeUndefined();
  });

  it('makes fields with defaults not required', () => {
    const schema = z.object({ limit: z.number().default(10) });
    const result = zodToJsonSchema(schema);
    expect(result.required).toBeUndefined();
  });

  it('includes default value for defaulted fields', () => {
    const schema = z.object({ limit: z.number().default(10) });
    const result = zodToJsonSchema(schema);
    expect((result.properties as any).limit.default).toBe(10);
  });

  it('converts an array field', () => {
    const schema = z.object({ tags: z.array(z.string()) });
    const result = zodToJsonSchema(schema);
    expect(result.properties).toMatchObject({
      tags: { type: 'array', items: { type: 'string' } },
    });
  });

  it('includes description when set', () => {
    const schema = z.object({ query: z.string().describe('Search query') });
    const result = zodToJsonSchema(schema);
    expect((result.properties as any).query.description).toBe('Search query');
  });

  it('handles mixed required and optional fields', () => {
    const schema = z.object({
      required_field: z.string(),
      optional_field: z.string().optional(),
    });
    const result = zodToJsonSchema(schema);
    expect(result.required).toContain('required_field');
    expect(result.required).not.toContain('optional_field');
  });

  it('returns type: object at root', () => {
    const schema = z.object({ x: z.string() });
    const result = zodToJsonSchema(schema);
    expect(result.type).toBe('object');
  });

  it('has no required field when all fields are optional', () => {
    const schema = z.object({
      a: z.string().optional(),
      b: z.number().optional(),
    });
    const result = zodToJsonSchema(schema);
    expect(result.required).toBeUndefined();
  });
});
