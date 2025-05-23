#!/usr/bin/env node

/*!
 * Script to build our plugins to use them separately.
 * Copyright 2020-2021 The Bootstrap Authors
 * Copyright 2020-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

'use strict'

const path = require('path')
const rollup = require('rollup')
const { globSync } = require('glob')
const { babel } = require('@rollup/plugin-babel')

const srcPath = path.resolve(__dirname, '../js/src/')
const jsFiles = globSync(srcPath + '/**/*.js')

// Array which holds the resolved plugins
const resolvedPlugins = []

// Trims the "js" extension and uppercases => first letter, hyphens, backslashes & slashes
const filenameToEntity = filename => filename.replace('.js', '')
  .replace(/(?:^|-|\/|\\)[a-z]/g, str => str.slice(-1).toUpperCase())

for (const file of jsFiles) {
  resolvedPlugins.push({
    src: file.replace('.js', ''),
    dist: file.replace('src', 'dist'),
    fileName: path.basename(file),
    className: filenameToEntity(path.basename(file))
    // safeClassName: filenameToEntity(path.relative(srcPath, file))
  })
}

const build = async plugin => {
  const globals = {}

  console.log(plugin);

  const bundle = await rollup.rollup({
    input: plugin.src,
    plugins: [
      babel({
        // Only transpile our source code
        exclude: 'node_modules/**',
        // Include the helpers in each file, at most one copy of each
        babelHelpers: 'bundled'
      })
    ],
    external: source => {
      // Pattern to identify local files
      const pattern = /^(\.{1,2})\//

      // It's not a local file, e.g a Node.js package
      if (!pattern.test(source)) {
        globals[source] = source
        return true
      }

      const usedPlugin = resolvedPlugins.find(plugin => {
        return plugin.src.includes(source.replace(pattern, ''))
      })

      if (!usedPlugin) {
        // It’s just a local JS file (such as ../dom/event-handler.js). Bundle it in.
        return false
      }

      // We can change `Index` with `UtilIndex` etc if we use
      // `safeClassName` instead of `className` everywhere
      globals[path.normalize(usedPlugin.src)] = usedPlugin.className
      return true
    }
  })

  await bundle.write({
    format: 'umd',
    name: plugin.className,
    sourcemap: true,
    globals,
    generatedCode: 'es2015',
    file: plugin.dist
  })

  console.log(`Built ${plugin.className}`)
}

(async () => {
  try {
    const basename = path.basename(__filename)
    const timeLabel = `[${basename}] finished`

    console.log('Building individual plugins...')
    console.time(timeLabel)

    await Promise.all(Object.values(resolvedPlugins).map(plugin => build(plugin)))

    console.timeEnd(timeLabel)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
    