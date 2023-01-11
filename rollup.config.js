// rollup.config.js

import { babel } from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import svgSprite from 'rollup-plugin-svg-sprite-deterministic'
import scss from 'rollup-plugin-scss'
import uglify from '@lopatnov/rollup-plugin-uglify'
import legacy from '@rollup/plugin-legacy'
import nodeResolve from '@rollup/plugin-node-resolve'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'src/js/bootstrap-italia.entry.js',
    output: {
      file: 'dist/js/bootstrap-italia.bundle.min.js',
      format: 'umd',
      generatedCode: 'es2015',
      name: "bootstrap"
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      copy({
        targets: [
          { src: 'src/assets', dest: 'dist' },
          { src: 'src/fonts', dest: 'dist' },
        ],
      }),
      svgSprite({
        outputFolder: 'dist/svg',
      }),
      scss({
        output: 'dist/css/bootstrap-italia.min.css',
        outputStyle: 'compressed',
        sourceMap: true,
        watch: 'src/scss',
      }),
      nodeResolve(),
      commonjs(),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      uglify(),
    ],
  },
  // ESM
  {
    input: 'src/js/bootstrap-italia.esm.js',
    output: [
      {
        format: 'es',
        exports: 'named',
        sourcemap: true,
        dir: 'dist',
        // chunkFileNames: '[name].js'
        preserveModules: true,
        // // Optionally strip useless path from source
        // preserveModulesRoot: 'lib',
      },
    ],
    // plugins: [
    //   injectProcessEnv({
    //     NODE_ENV: 'production',
    //   }),
    // ],
    // manualChunks: id => path.parse(id).name
  },
  {
    input: 'docs/assets/src/js/docs-entry.js',
    output: {
      file: 'docs/assets/dist/js/docs.min.js',
      compact: true,
      format: 'iife',
    },
    plugins: [
      legacy({
        './cover-animation.js': {
          initCoverAnimation: 'animation.initCoverAnimation',
        },
      }),
      babel({ babelHelpers: 'bundled' }),
      scss({
        output: 'docs/assets/dist/css/docs.min.css',
        outputStyle: 'compressed',
        watch: 'docs/assets/src/scss',
      }),
    ],
  },
  // Entry comuni
  {
    input: 'src/scss/bootstrap-italia-comuni.scss',
    output: {
      dir: 'dist',
    },
    plugins: [
      scss({
        output: 'dist/css/bootstrap-italia-comuni.min.css',
        outputStyle: 'compressed',
        watch: 'src/scss',
      }),
    ],
  },
]
