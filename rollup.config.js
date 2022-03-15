// rollup.config.js

import { babel } from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import svgSprite from 'rollup-plugin-svg-sprite'
import scss from 'rollup-plugin-scss'
import uglify from '@lopatnov/rollup-plugin-uglify'
import legacy from '@rollup/plugin-legacy'
import nodeResolve from '@rollup/plugin-node-resolve'
import injectProcessEnv from 'rollup-plugin-inject-process-env'

export default [
  {
    input: 'src/js/bootstrap-italia.entry.js',
    output: {
      file: 'dist/js/bootstrap-italia.bundle.min.js',
      compact: true,
      format: 'iife',
    },
    plugins: [
      babel({ babelHelpers: 'bundled' }),
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
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      nodeResolve({
        // use "jsnext:main" if possible
        // see https://github.com/rollup/rollup/wiki/jsnext:main
        jsnext: true,
      }),
      uglify(),
    ],
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
]
