const
  spawn = require('cross-spawn'),
  log = require('fancy-log'),
  browserSync = require('browser-sync').create()

module.exports = function (gulp, config) {
  return {
    start: function (done) {
      const jekyllServer =
        process.platform === 'win32'
          ? spawn('jekyll.bat', [
            'build',
            '--watch',
            '--incremental',
            '--drafts',
            '--config',
            '_config.yml',
          ])
          : spawn('bundle', [
            'exec',
            'jekyll',
            'build',
            '--watch',
            '--incremental',
            '--drafts',
            '--config',
            '_config.yml',
          ])

      const jekyllOutput = buffer => {
        log('Jekyll: ' + buffer.toString())
        if (buffer.toString().indexOf('done') > -1) done() // TODO trovare un modo migliore per verificare quando Jekyll ha completato
      }

      jekyllServer.stdout.on('data', jekyllOutput)
      jekyllServer.stderr.on('data', jekyllOutput)
    },
    watch: function () {
      browserSync.init({
        files: [config.Paths.SITE + '/**'],
        port: 4000,
        server: {
          baseDir: config.Paths.SITE,
        },
      })
      gulp.watch(config.Paths.WATCH, gulp.series('build:library'))
      gulp.watch(config.Paths.WATCH_DOCUMENTATION, gulp.series('build:docs'))
    }
  }
}