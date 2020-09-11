const
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  replace = require('gulp-replace'),
  gap = require('gulp-append-prepend'),
  touch = require('gulp-touch-cmd'),
  BABEL_OPTIONS = {
    compact: true,
    presets: [
      [
        '@babel/env',
        {
          modules: false,
          loose: true,
          exclude: ['transform-typeof-symbol'],
        },
      ],
    ],
    plugins: ['@babel/plugin-proposal-object-rest-spread'],
  }

module.exports = function (gulp, config) {
  return {
    buildJSLibrary: function () {
      return gulp.src(config.Paths.SOURCE_JS)
        .pipe(concat(config.packageJson.name + '.js'))
        .pipe(sourcemaps.init())
        .pipe(replace(/^(export|import).*/gm, ''))
        .pipe(babel(BABEL_OPTIONS))
        .pipe(uglify())
        .pipe(gap.prependText(config.jqueryVersionCheck, '\n\n'))
        .pipe(gap.prependText(config.jQueryCheck, '\n\n'))
        .pipe(gap.prependText(config.BootstrapItaliaBanner, '\n\n'))
        .pipe(rename({ suffix: '.min', }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.Paths.DIST + '/js'))
        .pipe(touch())
    },
    buildJSLibraryBundle: function () {
      return gulp.src(config.Paths.VENDOR_JS.concat(config.Paths.SOURCE_JS))
        .pipe(concat(config.packageJson.name + '.bundle.js'))
        .pipe(sourcemaps.init())
        .pipe(replace(/^(export|import).*/gm, ''))
        .pipe(babel(BABEL_OPTIONS))
        .pipe(uglify())
        .pipe(gap.prependText(config.BootstrapItaliaBanner))
        .pipe(rename({ suffix: '.min', }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.Paths.DIST + '/js'))
        .pipe(touch())
    },
    buildJSPluginOwlCarousel: function () {
      return gulp.src([
          'node_modules/owl.carousel/dist/owl.carousel.js',
          'src/js/plugins/carousel-owl-carousel.js'
        ])
        .pipe(concat(config.packageJson.name + '.plugin.owl.carousel.js'))
        .pipe(sourcemaps.init())
        .pipe(replace(/^(export|import).*/gm, ''))
        .pipe(babel(BABEL_OPTIONS))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min', }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.Paths.DIST + '/js'))
        .pipe(touch())
    },
    buildJSPluginSwiper: function () {
      return gulp.src([
          'node_modules/swiper/swiper-bundle.js',
          'src/js/plugins/carousel-swiper.js'
        ])
        .pipe(concat(config.packageJson.name + '.plugin.swiper.js'))
        .pipe(sourcemaps.init())
        .pipe(replace(/^(export|import).*/gm, ''))
        .pipe(babel(BABEL_OPTIONS))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min', }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.Paths.DIST + '/js'))
        .pipe(touch())
    },
    buildDocsJSVendor: function () {
      return gulp
        .src('docs/assets/src/js/vendor/*.min.js')
        .pipe(gulp.dest(config.Paths.DIST_DOCUMENTATION + '/js/vendor'))
        .pipe(touch())
    },
    buildDocsJSLibrary: function () {
      return gulp
        .src(config.Paths.SOURCE_DOCUMENTATION_JS)
        .pipe(uglify())
        .pipe(
          rename({
            suffix: '.min',
          })
        )
        .pipe(gulp.dest(config.Paths.DIST_DOCUMENTATION + '/js'))
        .pipe(touch())
    }
  }
};