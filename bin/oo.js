#!/usr/bin/env node
"use strict"

require("ts-node").register({
  compilerOptions: require(("../tsconfig.json")).compilerOptions
})

require("../index").main().catch(error => {
  console.error(error.stack || error.message || error)
  process.exit(1)
})
