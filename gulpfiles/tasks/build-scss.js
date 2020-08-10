const
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  gap = require('gulp-append-prepend'),
  touch = require('gulp-touch-cmd')

module.exports = function (gulp, config) {
  return {
    lib: function () {
      return gulp.src(config.Paths.SOURCE_SCSS)
        .pipe(gap.prependText(config.BootstrapItaliaBanner))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(
          cleanCSS({
            level: 2,
            specialComments: 'all',
          })
        )
        .pipe(
          rename({
            suffix: '.min',
          })
        )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.Paths.DIST + '/css'))
        .pipe(touch())
    },
    documentation: function () {
      return gulp.src(config.Paths.SOURCE_DOCUMENTATION_SCSS)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(
          cleanCSS({
            compatibility: 'ie10',
          })
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(
          rename({
            suffix: '.min',
          })
        )
        .pipe(gulp.dest(config.Paths.DIST_DOCUMENTATION + '/css'))
        .pipe(touch())
    }
  }
};