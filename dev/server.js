#!/usr/bin/env node

const { devRunMain } = require("@balsamic/dev");

void devRunMain(() => require("./server/server.ts").startServer(), { initTsNode: true });
