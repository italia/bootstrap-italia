// rollup.config.js

import { babel } from '@rollup/plugin-babel'
import scss from 'rollup-plugin-scss'
import uglify from "@lopatnov/rollup-plugin-uglify";

export default [
  {
    input: 'src/js/bootstrap-italia.js',
    output: {
      file: 'dist/js/bootstrap-italia.min.js',
      compact: true,
      format: 'iife',
    },
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      scss({
        output: 'dist/css/bootstrap-italia.min.css',
        outputStyle: 'compressed',
      }),
      uglify()
    ],
  },
  {
    input: 'src/js/bootstrap-italia.bundle.js',
    output: {
      file: 'dist/js/bootstrap-italia.bundle.min.js',
      compact: true,
      format: 'iife',
    },
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      uglify()
    ],
  },
]
