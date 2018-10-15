const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  replace = require('gulp-replace'),
  header = require('gulp-header'),
  footer = require('gulp-footer'),
  log = require('fancy-log'),
  touch = require('gulp-touch-cmd'),
  spawn = require('cross-spawn'),
  browserSync = require('browser-sync').create(),
  pkg = require('./package.json');

const DOCUMENTATION_DESTINATION = '_gh_pages';

// Pickadate: temporaneamente disabilitato in quanto stile non definitivo
const Paths = {
  VENDOR_JS: [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/popper.js/dist/umd/popper.js',
    // './node_modules/pickadate/lib/compressed/picker.js',
    // './node_modules/pickadate/lib/compressed/picker.date.js',
    // './node_modules/pickadate/lib/compressed/picker.time.js'
  ],
  SOURCE_SCSS: 'src/scss/' + pkg.name + '.scss',
  SOURCE_JS: [
    'node_modules/bootstrap/js/src/util.js',
    'node_modules/bootstrap/js/src/alert.js',
    'node_modules/bootstrap/js/src/button.js',
    'node_modules/bootstrap/js/src/carousel.js',
    'node_modules/bootstrap/js/src/collapse.js',
    'node_modules/bootstrap/js/src/dropdown.js',
    'node_modules/bootstrap/js/src/modal.js',
    'node_modules/bootstrap/js/src/tooltip.js',
    'node_modules/bootstrap/js/src/popover.js',
    'node_modules/bootstrap/js/src/scrollspy.js',
    'node_modules/bootstrap/js/src/tab.js',
    'src/js/plugins/autocomplete.js',
    'src/js/plugins/jquery.easing.1.3.js',
    'src/js/plugins/back-to-top.js',
    'src/js/plugins/componente-base.js',
    'src/js/plugins/cookiebar.js',
    'src/js/plugins/custom-select.js',
    'src/js/plugins/dropdown.js',
    // 'src/js/plugins/date-picker.js',
    'src/js/plugins/forms.js',
    'src/js/plugins/track-focus.js',
    'src/js/plugins/forward.js',
    'src/js/plugins/offcanvas.js',
    'src/js/plugins/password.js',
    'src/js/plugins/navbar.js',
    'src/js/plugins/i-sticky.js',
    'src/js/plugins/history-back.js',
    'src/js/' + pkg.name + '.js'
  ],
  SOURCE_DOCUMENTATION_SCSS: 'docs/assets/src/scss/docs.scss',
  SOURCE_DOCUMENTATION_JS: 'docs/assets/src/js/docs.js',
  DIST: 'dist',
  DIST_DOCUMENTATION: 'docs/assets/dist',
  SCSS_WATCH: 'src/scss/**/**',
  JS_WATCH: 'src/js/**/**',
  SCSS_DOCUMENTATION_WATCH: 'docs/assets/src/scss/**/**',
  JS_DOCUMENTATION_WATCH: 'docs/assets/src/js/**/**'
};

const bootstrapItaliaBanner = ['/**',
  ' * <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

const jqueryCheck = 'if (typeof jQuery === \'undefined\') {\n' +
  '  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\\'s JavaScript.\')\n' +
  '}\n';
const jqueryVersionCheck = '+function ($) {\n' +
  '  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
  '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
  '    throw new Error(\'Bootstrap\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' +
  '  }\n' +
  '}(jQuery);\n\n';

// Library related tasks

gulp.task('scss-min', () => {
  return gulp.src(Paths.SOURCE_SCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(header(bootstrapItaliaBanner, { pkg : pkg }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Paths.DIST + '/css'))
    .pipe(touch());
});

gulp.task('js-min', () => {
  return gulp.src(Paths.SOURCE_JS)
    .pipe(concat(pkg.name + '.js'))
    .pipe(sourcemaps.init())
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel({
      compact: true,
      presets: [
        [ 'env', {
          modules: false,
          loose: true
        }]
      ],
      plugins: [
        'transform-object-rest-spread',
        'transform-es2015-modules-strip'
      ]
    }))
    .pipe(uglify())
    .pipe(header(
      bootstrapItaliaBanner + '\n' +
      jqueryCheck + '\n' +
      jqueryVersionCheck + '\n+function () {\n', { pkg : pkg }
    ))
    .pipe(footer('\n}();\n'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Paths.DIST + '/js'))
    .pipe(touch());
});

gulp.task('js-bundle-min', () => {
  return gulp.src(Paths.VENDOR_JS.concat(Paths.SOURCE_JS))
    .pipe(concat(pkg.name + '.bundle.js'))
    .pipe(sourcemaps.init())
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel({
      compact: true,
      presets: [
        [ 'env', {
          modules: false,
          loose: true
        }]
      ],
      plugins: [
        'transform-object-rest-spread',
        'transform-es2015-modules-strip'
      ]
    }))
    .pipe(uglify())
    .pipe(header(bootstrapItaliaBanner, { pkg : pkg }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Paths.DIST + '/js'))
    .pipe(touch());
});

// Documentation related tasks

gulp.task('documentation-scss-min', () => {
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
    .pipe(touch());
});

gulp.task('documentation-js-min', () => {
  return gulp.src(Paths.SOURCE_DOCUMENTATION_JS)
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(Paths.DIST_DOCUMENTATION + '/js'))
    .pipe(touch());
});

// Icon Font related tasks

gulp.task('icons-css', () => {
  return gulp.src(['src/icons/css/**'])
    .pipe(gulp.dest(Paths.DIST + '/css'))
    .pipe(touch());
});

gulp.task('icons-font', () => {
  return gulp.src(['src/icons/font/**'])
    .pipe(gulp.dest(Paths.DIST + '/font'))
    .pipe(touch());
});

// Main Jekyll task

gulp.task('jekyll', done => {
  let jekyllExecutable = process.platform === "win32" ? "jekyll.bat" : "jekyll";
  const jekyll = spawn(jekyllExecutable, ['build',
    '--watch',
    '--incremental',
    '--drafts',
    '--config', '_config.yml'
  ]);

  const jekyllOutput = (buffer) => {
    log('Jekyll: ' + buffer.toString());
    // TODO: trovare un modo migliore per verificare quando Jekyll ha completato
    if (buffer.toString().indexOf('done') > -1) done()
  };

  jekyll.stdout.on('data', jekyllOutput);
  jekyll.stderr.on('data', jekyllOutput)
});

// Library

gulp.task('build-library', gulp.series(
  'scss-min',
  'js-min',
  'js-bundle-min',
  'icons-css',
  'icons-font'
));

// Documentation

gulp.task('build-documentation', gulp.series(
  'documentation-scss-min',
  'documentation-js-min'
));

// Sync

gulp.task('sync', () => {
  browserSync.init({
    files: [DOCUMENTATION_DESTINATION + '/**'],
    port: 4000,
    server: {
      baseDir: DOCUMENTATION_DESTINATION
    }
  });

  gulp.watch([
    Paths.SCSS_WATCH,
    Paths.JS_WATCH
  ], gulp.series('build-library'));

  gulp.watch([
    Paths.SCSS_DOCUMENTATION_WATCH,
    Paths.JS_DOCUMENTATION_WATCH
  ], gulp.series('build-documentation'))

});

// Main build task

gulp.task('build', gulp.series('build-library', 'build-documentation'));

// Main serve task

gulp.task('serve', gulp.series('build', 'jekyll', 'sync'));
