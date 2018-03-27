const gulp = require('gulp')
const path = require('path')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const open = require('gulp-open')
const babel = require('gulp-babel')
const replace = require('gulp-replace')
const wrapper = require('gulp-wrapper')
const chalk = require('chalk')
const child = require('child_process')
const gutil = require('gulp-util')
const touch = require('gulp-touch-cmd')
const browserSync = require('browser-sync').create()
const pkg = require('./package.json')

const FILENAME = 'bootstrap-italia'

const Paths = {
  HERE: './',
  VENDOR_JS: [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/popper.js/dist/umd/popper.js',
    './node_modules/pickadate/lib/compressed/picker.js',
    './node_modules/pickadate/lib/compressed/picker.date.js',
    './node_modules/pickadate/lib/compressed/picker.time.js'
  ],
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
    './src/js/plugins/cookiebar.js',
    './src/js/plugins/image-grid.js',
    './src/js/plugins/zoom.js',
    './src/js/plugins/forms.js',
    './src/js/plugins/custom-select.js',
    './src/js/plugins/password.js',
    './src/js/plugins/offcanvas.js',
    './src/js/plugins/date-picker.js',
    './src/js/plugins/back-to-top.js',
    './src/js/plugins/forward.js',
    './src/js/' + FILENAME + '.js'
  ],
  SOURCE_DOCUMENTATION_SCSS: 'docs/assets/src/scss/docs.scss',
  VENDOR_DOCUMENTATION_JS: 'docs/assets/src/js/vendor/*.js',
  SOURCE_DOCUMENTATION_JS: 'docs/assets/src/js/docs.js',
  DIST: 'dist',
  DIST_DOCUMENTATION: 'docs/assets/dist',
  SCSS_WATCH: 'src/scss/**/**',
  JS_WATCH: 'src/js/**/**',
  SCSS_DOCUMENTATION_WATCH: 'docs/assets/src/scss/**/**',
  JS_DOCUMENTATION_WATCH: 'docs/assets/src/js/**/**'
}


const bootstrapItaliaBanner = '/*!\n' +
  ' * Bootstrap Italia v' + pkg.version + '\n' +
  ' * Copyright 2018\n' +
  ' * Licensed under the BSD 3-Clause "New" or "Revised" License (https://github.com/italia/bootstrap-italia/blob/master/LICENSE)\n' +
  ' */\n'
const jqueryCheck = 'if (typeof jQuery === \'undefined\') {\n' +
  '  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\\'s JavaScript.\')\n' +
  '}\n'
const jqueryVersionCheck = '+function ($) {\n' +
  '  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
  '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
  '    throw new Error(\'Bootstrap\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' +
  '  }\n' +
  '}(jQuery);\n\n'

gulp.task('scss', done => {
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
    .pipe(touch())
  done()
})

gulp.task('scss-min', gulp.series('scss', done => {
  return gulp.src(Paths.SOURCE_SCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      compatibility: 'ie10'
    }))
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
    .pipe(touch())
  done()
}))

gulp.task('js', done => {
  return gulp.src(Paths.SOURCE_JS)
    .pipe(concat(FILENAME + '.js'))
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel({
      compact: false,
      presets: [
        [
          'env', {
          modules: false,
          loose: true
        }
        ]
      ],
      plugins: [
        'transform-object-rest-spread',
        'transform-es2015-modules-strip'
      ]
    }))
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
    .pipe(touch())
  done()
})

gulp.task('js-min', gulp.series('js', done => {
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
    .pipe(touch())
  done()
}))

gulp.task('js-bundle', gulp.series('js', done => {
  var BUNDLE_JS = Paths.VENDOR_JS.concat(Paths.DIST + '/js/' + FILENAME + '.js')
  return gulp.src(BUNDLE_JS)
    .pipe(wrapper({
      header: bootstrapItaliaBanner +
      '\n'
    }))
    .pipe(concat(FILENAME + '.bundle.js'))
    .pipe(gulp.dest(Paths.DIST + '/js'))
    .pipe(touch())
  done()
}))

gulp.task('js-bundle-min', gulp.series('js-bundle', 'js', done => {
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
    .pipe(touch())
  done()
}))


/* Documentation */
gulp.task('docs-scss-min', done => {
  return gulp.src(Paths.SOURCE_DOCUMENTATION_SCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      compatibility: 'ie10'
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(Paths.DIST_DOCUMENTATION + '/css'))
    .pipe(touch())
  done()
})

gulp.task('docs-js-min', done => {
  return gulp.src([
    Paths.VENDOR_DOCUMENTATION_JS,
    Paths.SOURCE_DOCUMENTATION_JS
  ])
    .pipe(concat('docs.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(Paths.DIST_DOCUMENTATION + '/js'))
    .pipe(touch())
  done()
})

/* Font */
gulp.task('icons-css', done => {
  return gulp.src(['src/icons/css/**'])
    .pipe(gulp.dest(Paths.DIST + '/css'))
  done()
})
gulp.task('icons-font', done => {
  return gulp.src(['src/icons/font/**'])
    .pipe(gulp.dest(Paths.DIST + '/font'))
  done()
})

// Code build
gulp.task('build-code', gulp.series('scss-min', 'js-min', 'js-bundle-min', 'icons-css', 'icons-font'))
// Docs build
gulp.task('build-docs', gulp.series('docs-scss-min', 'docs-js-min'))

// Main build task
gulp.task('build', gulp.series('build-code', 'build-docs'))

gulp.task('jekyll', done => {
  var jekyllExecutable = process.platform === "win32" ? "jekyll.bat" : "jekyll"
  const jekyll = child.spawn(jekyllExecutable, ['build',
    '--watch',
    '--incremental',
    '--drafts',
    '--config', '_config.yml'
  ])

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message))
    if (buffer.toString().indexOf('done') > -1)
      done() // jekyll first run complete - TODO: find a better way to detect this event
  }

  jekyll.stdout.on('data', jekyllLogger)
  jekyll.stderr.on('data', jekyllLogger)
})

const siteRoot = '_gh_pages'

gulp.task('sync', done => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  })

  gulp.watch([
    Paths.SCSS_WATCH,
    Paths.JS_WATCH
  ], gulp.series('build-code'))

  gulp.watch([
    Paths.SCSS_DOCUMENTATION_WATCH,
    Paths.JS_DOCUMENTATION_WATCH
  ], gulp.series('build-docs'))

})

gulp.task('serve', gulp.series('build', 'jekyll', 'sync'))
