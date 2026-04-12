#!/usr/bin/env node
import { startStdioServer } from './server.js';

startStdioServer().catch((err) => {
  console.error('[ixodocs-mcp] Fatal error:', err);
  process.exit(1);
});
