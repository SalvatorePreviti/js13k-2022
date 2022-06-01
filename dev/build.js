#!/usr/bin/env node

const { devRunMain } = require("@balsamic/dev");

void devRunMain(() => require("./builder/build.ts").build(), { initTsNode: true, title: "build" });
