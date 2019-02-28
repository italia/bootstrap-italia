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
  svgSprite = require('gulp-svg-sprite'),
  browserSync = require('browser-sync').create(),
  pkg = require('./package.json');

const DOCUMENTATION_DESTINATION = '_site';

const Paths = {
  VENDOR_JS: [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/umd/popper.js',
    'node_modules/owl.carousel/dist/owl.carousel.js',
  ],
  SOURCE_JS: [
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/bootstrap-select/js/bootstrap-select.js',
    'node_modules/bootstrap-select/js/i18n/defaults-it_IT.js',
    'src/js/plugins/circular-loader/CircularLoader-v1.3.js',
    'src/js/plugins/password-strength-meter/password-strength-meter.js',
    'src/js/plugins/datepicker/locales/it.js',
    'src/js/plugins/datepicker/datepicker.js',
    'src/js/plugins/i-sticky/i-sticky.js',
    'src/js/plugins/fonts-loader.js',
    'src/js/plugins/autocomplete.js',
    'src/js/plugins/back-to-top.js',
    'src/js/plugins/componente-base.js',
    'src/js/plugins/cookiebar.js',
    'src/js/plugins/dropdown.js',
    'src/js/plugins/forms.js',
    'src/js/plugins/track-focus.js',
    'src/js/plugins/forward.js',
    'src/js/plugins/navbar.js',
    'src/js/plugins/navscroll.js',
    'src/js/plugins/history-back.js',
    'src/js/plugins/notifications.js',
    'src/js/plugins/upload.js',
    'src/js/plugins/progress-donut.js',
    'src/js/plugins/list.js',
    'src/js/plugins/imgresponsive.js',
    //'src/js/plugins/timepicker.js',
    'src/js/plugins/input-number.js',
    'src/js/plugins/carousel.js',
    'src/js/plugins/transfer.js',
    'src/js/plugins/select.js',
    'src/js/plugins/rating.js',
    'src/js/plugins/dimmer.js',
    'src/js/' + pkg.name + '.js'
  ],

  SOURCE_SCSS: 'src/scss/' + pkg.name + '.scss',
  SOURCE_DOCUMENTATION_SCSS: 'docs/assets/src/scss/docs.scss',
  SOURCE_DOCUMENTATION_JS: [
    'docs/assets/src/js/cover-animation.js',
    'docs/assets/src/js/docs.js'
  ],
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
    .pipe(cleanCSS({
      level: 2,
      specialComments: 0
    }))
    .pipe(header(bootstrapItaliaBanner, {pkg: pkg}))
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
        ['@babel/env', {
          modules: false,
          loose: true,
          exclude: ['transform-typeof-symbol']
        }]
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread'
      ]
    }))
    .pipe(uglify())
    .pipe(header(
      bootstrapItaliaBanner + '\n' +
      jqueryCheck + '\n' +
      jqueryVersionCheck + '\n+function () {\n', {pkg: pkg}
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
        ['@babel/env', {modules: false, loose: true}]
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread'
      ]
    }))
    .pipe(uglify())
    .pipe(header(bootstrapItaliaBanner, {pkg: pkg}))
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

gulp.task('svg-sprite', function () {
  return gulp.src('src/svg/it-*.svg')
    .pipe(svgSprite({
      shape: {
        dimension: { // Set maximum dimensions
          maxWidth: 32,
          maxHeight: 32
        }
      },
      mode: {
        defs: {
          dest: '.',
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest(Paths.DIST + '/svg'))
});

// Assets related tasks
gulp.task('assets', () => {
  return gulp.src(['src/assets/**'])
    .pipe(gulp.dest(Paths.DIST + '/assets'))
    .pipe(touch());
});

// Fonts
gulp.task('fonts', () => {
  return gulp.src(['src/fonts/**'])
    .pipe(gulp.dest(Paths.DIST + '/fonts'))
    .pipe(touch());
});

// Main Jekyll task

gulp.task('jekyll', done => {

  const jekyll = process.platform === 'win32' ?
    spawn('jekyll.bat', ['build',
      '--watch',
      '--incremental',
      '--drafts',
      '--config', '_config.yml'
    ]) :
    spawn('bundle', ['exec', 'jekyll', 'build',
      '--watch',
      '--incremental',
      '--drafts',
      '--config', '_config.yml'
    ]);

  const jekyllOutput = (buffer) => {
    log('Jekyll: ' + buffer.toString());
    if (buffer.toString().indexOf('done') > -1) done() // TODO trovare un modo migliore per verificare quando Jekyll ha completato
  };

  jekyll.stdout.on('data', jekyllOutput);
  jekyll.stderr.on('data', jekyllOutput)
});

// Library

gulp.task('build-library', gulp.series(
  'svg-sprite',
  'scss-min',
  'js-min',
  'js-bundle-min',
  'fonts',
  'assets'
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
      baseDir: DOCUMENTATION_DESTINATION,
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
