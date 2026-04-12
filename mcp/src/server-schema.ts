import { z } from 'zod';

export function zodToJsonSchema(schema: z.ZodObject<any>): Record<string, unknown> {
  const shape = schema.shape;
  const properties: Record<string, unknown> = {};
  const required: string[] = [];

  for (const [key, value] of Object.entries(shape)) {
    const zodType = value as z.ZodTypeAny;
    properties[key] = zodTypeToJsonSchema(zodType);

    // Check if required (not optional, not with default)
    if (!(zodType instanceof z.ZodOptional) && !(zodType instanceof z.ZodDefault)) {
      required.push(key);
    }
  }

  return {
    type: 'object',
    properties,
    ...(required.length > 0 ? { required } : {}),
  };
}

function zodTypeToJsonSchema(zodType: z.ZodTypeAny): Record<string, unknown> {
  // Handle ZodOptional — unwrap inner type
  if (zodType instanceof z.ZodOptional) {
    return zodTypeToJsonSchema(zodType.unwrap());
  }
  // Handle ZodDefault — unwrap inner type
  if (zodType instanceof z.ZodDefault) {
    const inner = zodTypeToJsonSchema(zodType.removeDefault());
    return { ...inner, default: zodType._def.defaultValue() };
  }
  // Handle ZodString
  if (zodType instanceof z.ZodString) {
    const result: Record<string, unknown> = { type: 'string' };
    if (zodType.description) result.description = zodType.description;
    return result;
  }
  // Handle ZodNumber
  if (zodType instanceof z.ZodNumber) {
    const result: Record<string, unknown> = { type: 'number' };
    if (zodType.description) result.description = zodType.description;
    return result;
  }
  // Handle ZodBoolean
  if (zodType instanceof z.ZodBoolean) {
    return { type: 'boolean' };
  }
  // Handle ZodEnum
  if (zodType instanceof z.ZodEnum) {
    return { type: 'string', enum: zodType.options };
  }
  // Handle ZodArray
  if (zodType instanceof z.ZodArray) {
    return { type: 'array', items: zodTypeToJsonSchema(zodType.element) };
  }
  // Handle ZodRecord
  if (zodType instanceof z.ZodRecord) {
    return { type: 'object', additionalProperties: zodTypeToJsonSchema(zodType.element) };
  }
  // Fallback
  return { type: 'string' };
}
