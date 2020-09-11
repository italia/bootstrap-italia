const
  config = require('./gulpfiles/config.js'),
  gulp = require('gulp');

// Function to get tasks from external files

function getTask(task) {
  return require('./gulpfiles/tasks/' + task)(gulp, config);
}

// Library related tasks

gulp.task('css-library', getTask('build-scss').buildCSSLibrary);
gulp.task('js-library', getTask('build-js').buildJSLibrary);
gulp.task('js-library-bundle', getTask('build-js').buildJSLibraryBundle);

// Plugins related tasks

gulp.task('js-plugin-owl-carousel', getTask('build-js').buildJSPluginOwlCarousel);

// Documentation related tasks

gulp.task('css-docs', getTask('build-scss').buildDocsCSSLibrary);
gulp.task('js-docs-vendor', getTask('build-js').buildDocsJSVendor);
gulp.task('js-docs', getTask('build-js').buildDocsJSLibrary);

// Assets related tasks

gulp.task('assets', getTask('build-assets').svg)
gulp.task('fonts', getTask('build-assets').fonts)
gulp.task('svg-sprite', getTask('build-assets').svgSprite)

// Main build tasks - parallel builds for library and documentation to allow faster watching and rebuild

gulp.task('build-library', gulp.series('assets', 'fonts', 'svg-sprite', 'css-library', 'js-library', 'js-library-bundle', 'js-plugin-owl-carousel'))
gulp.task('build-docs', gulp.series('css-docs', 'js-docs-vendor', 'js-docs'))
gulp.task('build', gulp.parallel('build-library', 'build-docs'))

// Server related tasks

gulp.task('serve', getTask('serve').start)
gulp.task('watch', getTask('serve').watch)

// Main serve task

gulp.task('serve', gulp.series(
  'build',
  'serve',
  'watch'
))
