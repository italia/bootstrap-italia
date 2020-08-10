const
  config = require('./gulpfiles/config.js'),
  gulp = require('gulp');

// Function to get tasks from external files

function getTask(task) {
  return require('./gulpfiles/tasks/' + task)(gulp, config);
}

// Library related tasks

gulp.task('scss', getTask('build-scss').lib);
gulp.task('js', getTask('build-js').lib);
gulp.task('js:bundle', getTask('build-js').bundle);

// Optional library related tasks

gulp.task('js:bundle-with-owl-carousel', getTask('build-js').bundle);

// Documentation related tasks

gulp.task('scss:docs', getTask('build-scss').documentation);
gulp.task('js:docs', getTask('build-js').documentation.lib);
gulp.task('js:docs-vendor', getTask('build-js').documentation.vendor);

// Assets related tasks

gulp.task('assets', getTask('build-assets').svg)
gulp.task('fonts', getTask('build-assets').fonts)
gulp.task('svg-sprite', getTask('build-assets').svgSprite)

// Main build tasks - parallel builds for library and documentation to allow faster watching and rebuild

gulp.task('build:library', gulp.series('assets', 'fonts', 'svg-sprite', 'scss', 'js', 'js:bundle'))
gulp.task('build:docs', gulp.series('scss:docs', 'js:docs', 'js:docs-vendor'))
gulp.task('build', gulp.parallel('build:library', 'build:docs'))

// Server related tasks

gulp.task('server', getTask('server').start)
gulp.task('watch', getTask('server').watch)

// Main serve task

gulp.task('serve', gulp.series(
  'build',
  'server',
  'watch'
))
