// rollup.config.js

import { babel } from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import svgSprite from 'rollup-plugin-svg-sprite'
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
      compact: true,
      format: 'iife',
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
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
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      nodeResolve({
        // use "jsnext:main" if possible
        // see https://github.com/rollup/rollup/wiki/jsnext:main
        jsnext: true,
        main: true,
      }),
      commonjs({
        // non-CommonJS modules will be ignored, but you can also
        // specifically include/exclude files
        include: '../node_modules/**', // Default: undefined
        //exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
        // these values can also be regular expressions
        // include: /node_modules/

        // search for files other than .js files (must already
        // be transpiled by a previous plugin!)
        extensions: ['.js'], // Default: [ '.js' ]

        // if true then uses of `global` won't be dealt with by this plugin
        ignoreGlobal: false, // Default: false

        // if false then skip sourceMap generation for CommonJS modules
        sourceMap: false, // Default: true

        // explicitly specify unresolvable named exports
        // (see below for more details)
        namedExports: {
          'accessible-autocomplete': ['accessibleAutocomplete'],
          '../node_modules/accessible-autocomplete/dist/accessible-autocomplete.min.js': ['accessibleAutocomplete'],
        }, // Default: undefined

        // sometimes you have to leave require statements
        // unconverted. Pass an array containing the IDs
        // or a `id => boolean` function. Only use this
        // option if you know what you're doing!
        ignore: ['conditional-runtime-dependency'],
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
