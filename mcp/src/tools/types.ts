import { z } from 'zod';

export interface ToolDefinition<T extends z.ZodRawShape> {
  name: string;
  description: string;
  inputSchema: z.ZodObject<T>;
  handler: (args: z.infer<z.ZodObject<T>>) => Promise<ToolResult>;
}

export interface ToolResult {
  content: Array<{ type: 'text'; text: string }>;
  isError?: boolean;
}

export function textResult(text: string): ToolResult {
  return { content: [{ type: 'text', text }] };
}

export function errorResult(message: string): ToolResult {
  return { content: [{ type: 'text', text: `Error: ${message}` }], isError: true };
}
