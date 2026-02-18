import { babel } from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import svgSprite from 'rollup-plugin-svg-sprite-deterministic'
import sass from 'rollup-plugin-sass'
import terser from '@rollup/plugin-terser';
import legacy from '@rollup/plugin-legacy'
import nodeResolve from '@rollup/plugin-node-resolve'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import commonjs from 'rollup-plugin-commonjs'
import { writeFileSync } from 'fs'

export default [
  // Bundle version
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
          // keep a copy in the generated site so browser-sync / jekyll can serve updated assets
          { src: 'dist/**/*', dest: '_site/dist' },
        ],
      }),
      svgSprite({
        outputFolder: 'dist/svg',
      }),
      sass({
        api: 'modern',
        output(styles, styleNodes) {
          writeFileSync('dist/css/bootstrap-italia.min.css', styles)
        },
        options: {
          style: 'compressed',
          sourceMap: true,
          loadPaths: ['node_modules'],
        },
      }),
      // Ensure dist output is also copied into _site for local preview (after bundle is written)
      copy({
        targets: [
          { src: 'dist/css/bootstrap-italia.min.css', dest: '_site/dist/css' },
        ],
        hook: 'writeBundle'
      }),
      nodeResolve(),
      commonjs(),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      terser(),
    ],
  },
  // Non-bundled version
  {
    input: 'src/js/bootstrap-italia.entry.js',
    watch: false,
    output: {
      file: 'dist/js/bootstrap-italia.min.js',
      format: 'umd',
      generatedCode: 'es2015',
      name: "bootstrap",
      globals: {
        '@popperjs/core' : 'Popper',
        '@splidejs/splide' : 'Splide',
        'animejs/lib/anime.es.js' : 'anime',
        'video.js' : 'videojs'
      },
    },
    external: [
      '@popperjs/core',
      '@splidejs/splide',
      'animejs/lib/anime.es.js',
      'video.js'
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      copy({
        targets: [
          { src: 'src/assets', dest: 'dist' },
          { src: 'src/fonts', dest: 'dist' },
          // ensure site folder gets updated during watch builds
          { src: 'dist/**/*', dest: '_site/dist' },
        ],
      }),
      svgSprite({
        outputFolder: 'dist/svg',
      }),
      sass({
        api: 'modern',
        output(styles, styleNodes) {
          writeFileSync('dist/css/bootstrap-italia.min.css', styles)
        },
        options: {
          style: 'compressed',
          sourceMap: true,
          loadPaths: ['node_modules'],
        },
      }),
      // Ensure dist output is also copied into _site for local preview (after bundle is written)
      copy({
        targets: [
          { src: 'dist/css/bootstrap-italia.min.css', dest: '_site/dist/css' },
        ],
        hook: 'writeBundle'
      }),
      nodeResolve(),
      commonjs(),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      terser(),
    ],
  },
  // ESM version
  {
    input: 'src/js/bootstrap-italia.esm.js',
    watch: false,
    output: [
      {
        format: 'es',
        exports: 'named',
        sourcemap: true,
        dir: 'dist',
        preserveModules: true
      },
    ],
    plugins: [
      commonjs(),
    ],
  },
  // Entry for documentation
  {
    input: 'docs/assets/src/js/docs-entry.js',
    output: {
      file: 'docs/assets/dist/js/docs.min.js',
      compact: true,
      format: 'iife',
    },
    context: "window",
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      legacy({
        './cover-animation.js': {
          initCoverAnimation: 'animation.initCoverAnimation',
        },
      }),
      sass({
        api: 'modern',
        output(styles, styleNodes) {
          writeFileSync('docs/assets/dist/css/docs.min.css', styles)
        },
        options: {
          style: 'compressed',
          loadPaths: ['node_modules'],
        },
      }),
      // copy docs css into _site docs assets for preview
      copy({
        targets: [
          { src: 'docs/assets/dist/css/docs.min.css', dest: '_site/docs/assets/dist/css' },
        ],
        hook: 'writeBundle'
      }),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
    ],
  }
]
