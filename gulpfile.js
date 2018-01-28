var fs = require('fs')
var gulp = require('gulp')
var path = require('path')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var connect = require('gulp-connect')
var open = require('gulp-open')
var babel = require('gulp-babel')
var replace = require('gulp-replace')
var wrapper = require('gulp-wrapper')
var chalk = require('chalk')
var pkg = require('./package.json')

var FILENAME = 'bootstrap-italia';

var Paths = {
  HERE: './',
  SOURCE_SCSS: 'src/scss/' + FILENAME + '.scss',
  SOURCE_JS: [
    './node_modules/bootstrap/js/src/util.js',
    './node_modules/bootstrap/js/src/alert.js',
    './node_modules/bootstrap/js/src/button.js',
    './node_modules/bootstrap/js/src/carousel.js',
    './node_modules/bootstrap/js/src/collapse.js',
    './node_modules/bootstrap/js/src/dropdown.js',
    './node_modules/bootstrap/js/src/modal.js',
    './node_modules/bootstrap/js/src/tooltip.js',
    './node_modules/bootstrap/js/src/popover.js',
    './node_modules/bootstrap/js/src/scrollspy.js',
    './node_modules/bootstrap/js/src/tab.js',
    'src/js/' + FILENAME + '.js',
    'src/js/plugins/*'
  ],
  SOURCE_DOCUMENTATION_SCSS: 'docs/assets/src/scss/docs.scss',
  SOURCE_DOCUMENTATION_JS: 'docs/assets/src/js/**/*.js',
  DIST: 'dist',
  DIST_DOCUMENTATION: 'docs/assets/dist',
  SCSS_WATCH: 'src/scss/**/**',
  JS_WATCH: 'src/js/**/**',
  SCSS_DOCUMENTATION_WATCH: 'docs/assets/src/scss/**/**',
  JS_DOCUMENTATION_WATCH: 'docs/assets/src/js/**/**'
}


var bootstrapItaliaBanner = '/*!\n' +
  ' * Bootstrap Italia v' + pkg.version + '\n' +
  ' * Copyright 2018\n' +
  ' * Licensed under the BSD 3-Clause "New" or "Revised" License (https://github.com/italia/bootstrap-italia/blob/master/LICENSE)\n' +
  ' */\n'
var jqueryCheck = 'if (typeof jQuery === \'undefined\') {\n' +
  '  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\\'s JavaScript.\')\n' +
  '}\n'
var jqueryVersionCheck = '+function ($) {\n' +
  '  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
  '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
  '    throw new Error(\'Bootstrap\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' +
  '  }\n' +
  '}(jQuery);\n\n'

gulp.task('scss', function () {
  return gulp.src(Paths.SOURCE_SCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(wrapper({
      header: bootstrapItaliaBanner +
      '\n'
    }))
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.DIST + '/css'))
})

gulp.task('scss-min', ['scss'], function () {
  return gulp.src(Paths.SOURCE_SCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(autoprefixer())
    .pipe(wrapper({
      header: bootstrapItaliaBanner +
      '\n'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.DIST + '/css'))
})

gulp.task('js', function () {
  return gulp.src(Paths.SOURCE_JS)
    .pipe(concat(FILENAME + '.js'))
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel({
        compact: false,
        presets: [
          [
            'env',
            {
              modules: false,
              loose: true
            }
          ]
        ],
        plugins: [
          'transform-object-rest-spread',
          'transform-es2015-modules-strip'
        ]
      }
    ))
    .pipe(wrapper({
      header: bootstrapItaliaBanner +
      '\n' +
      jqueryCheck +
      '\n' +
      jqueryVersionCheck +
      '\n+function () {\n',
      footer: '\n}();\n'
    }))
    .pipe(gulp.dest(Paths.DIST + '/js'))
})

gulp.task('js-min', ['js'], function () {
  return gulp.src(Paths.DIST + '/js/' + FILENAME + '.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(wrapper({
      header: bootstrapItaliaBanner +
      '\n'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(Paths.DIST + '/js'))
})

gulp.task('js-bundle', ['js'], function () {
  var BUNDLE_JS = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/popper.js/dist/umd/popper.js',
    Paths.DIST + '/js/' + FILENAME + '.js'
  ];
  return gulp.src(BUNDLE_JS)
    .pipe(wrapper({
      header: bootstrapItaliaBanner +
      '\n'
    }))
    .pipe(concat(FILENAME + '.bundle.js'))
    .pipe(gulp.dest(Paths.DIST + '/js'))
})

gulp.task('js-bundle-min', ['js-bundle', 'js'], function () {
  return gulp.src(Paths.DIST + '/js/' + FILENAME + '.bundle.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(wrapper({
      header: bootstrapItaliaBanner +
      '\n'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(Paths.DIST + '/js'))
})

gulp.task('introduction', function () {
  var manifest = chalk.hex('#06C')(pkg.description) + ' | ' +
    chalk.yellow('v' + pkg.version);
  var flagRow = chalk.rgb(0, 146, 70)('############') +
    chalk.rgb(241, 242, 241)('############') +
    chalk.rgb(206, 43, 55)('############');
  console.log(manifest);
  for (var i = 0; i < 8; i++) {
    console.log(flagRow);
  }
})

/* Documentation */
gulp.task('docs-scss', function () {
  return gulp.src(Paths.SOURCE_DOCUMENTATION_SCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(Paths.DIST_DOCUMENTATION + '/css'))
})

gulp.task('docs-js', function () {
  return gulp.src(Paths.SOURCE_DOCUMENTATION_JS)
    .pipe(concat('docs.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(Paths.DIST_DOCUMENTATION + '/js'))
})

// Code build
gulp.task('build-code', ['scss-min', 'js-min', 'js-bundle-min']);
// Docs build
gulp.task('build-docs', ['docs-scss', 'docs-js']);

// Main build task
gulp.task('build', ['introduction', 'build-code', 'build-docs']);

// Main watch task
gulp.task('watch', function () {

  gulp.watch([
    Paths.SCSS_WATCH,
    Paths.JS_WATCH
  ], ['build-code']);

  gulp.watch([
    Paths.SCSS_DOCUMENTATION_WATCH,
    Paths.JS_DOCUMENTATION_WATCH
  ], ['build-docs']);

})
