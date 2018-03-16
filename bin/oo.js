#!/usr/bin/env node
"use strict"

require("ts-node").register({
  // @ts-ignore
  compilerOptions: require("../tsconfig.json").compilerOptions
})

require("../index").main()
