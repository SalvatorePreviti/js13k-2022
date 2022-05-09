#!/usr/bin/env node

const { devRunMain } = require("@balsamic/dev");

devRunMain(() => require("./builder/build.ts").build(), { initTsNode: true });
