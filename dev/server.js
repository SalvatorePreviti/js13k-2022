#!/usr/bin/env node

const { devRunMain } = require("@balsamic/dev");

devRunMain(() => require("./server/server.ts").startServer(), { initTsNode: true });
