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
    lib: function () {
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
    bundle: function () {
      let sourceFiles = config.Paths.VENDOR_JS
        .concat(config.Paths.SOURCE_JS)
        .concat('node_modules/owl.carousel/dist/owl.carousel.js')
        .concat('src/js/plugins/carousel-owl-carousel.js')


      return gulp.src(sourceFiles)
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
    documentation: {
      vendor: function () {
        return gulp
          .src('docs/assets/src/js/vendor/*.min.js')
          .pipe(gulp.dest(config.Paths.DIST_DOCUMENTATION + '/js/vendor'))
          .pipe(touch())
      },
      lib: function () {
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
  }
};