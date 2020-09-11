const
  svgSprite = require('gulp-svg-sprite'),
  touch = require('gulp-touch-cmd')

module.exports = function (gulp, config) {
  return {
    fonts: function () {
      return gulp
        .src(['src/fonts/**'])
        .pipe(gulp.dest(config.Paths.DIST + '/fonts'))
        .pipe(touch())
    },
    svg: function () {
      return gulp
        .src(['src/assets/**'])
        .pipe(gulp.dest(config.Paths.DIST + '/assets'))
        .pipe(touch())
    },
    svgSprite: function () {
      return gulp
        .src('src/svg/it-*.svg')
        .pipe(
          svgSprite({
            shape: {
              dimension: {
                maxWidth: 32,
                maxHeight: 32,
              },
            },
            mode: {
              defs: {
                dest: '.',
                sprite: 'sprite.svg',
              },
            },
          })
        )
        .pipe(gulp.dest(config.Paths.DIST + '/svg'))
    }
  }
}