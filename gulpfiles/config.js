const pkg = require('../package.json');

module.exports = {
  packageJson: pkg,
  Paths: {
    VENDOR_JS: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/popper.js/dist/umd/popper.js',
    ],
    SOURCE_JS: [
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/bootstrap-select/js/bootstrap-select.js',
      'node_modules/bootstrap-select/js/i18n/defaults-it_IT.js',
      'node_modules/svgxuse/svgxuse.js',
      'src/js/plugins/polyfills/array.from.js',
      'src/js/plugins/circular-loader/CircularLoader-v1.3.js',
      'src/js/plugins/password-strength-meter/password-strength-meter.js',
      'src/js/plugins/datepicker/locales/it.js',
      'src/js/plugins/datepicker/datepicker.js',
      'src/js/plugins/i-sticky/i-sticky.js',
      'src/js/plugins/sticky-header.js',
      'src/js/plugins/sticky-wrapper.js',
      'src/js/plugins/ie.js',
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
      'src/js/plugins/timepicker.js',
      'src/js/plugins/input-number.js',
      'src/js/plugins/transfer.js',
      'src/js/plugins/select.js',
      'src/js/plugins/rating.js',
      'src/js/plugins/dimmer.js',
      'src/js/' + pkg.name + '.js',
    ],
    SOURCE_SCSS: 'src/scss/' + pkg.name + '.scss',
    SOURCE_DOCUMENTATION_SCSS: 'docs/assets/src/scss/docs.scss',
    SOURCE_DOCUMENTATION_JS: [
      'docs/assets/src/js/cover-animation.js',
      'docs/assets/src/js/docs.js',
    ],
    SITE: '_site',
    DIST: 'dist',
    DIST_DOCUMENTATION: 'docs/assets/dist',
    WATCH: ['src/scss/**/**', 'src/js/**/**'],
    WATCH_DOCUMENTATION: ['docs/assets/src/scss/**/**', 'docs/assets/src/js/**/**']
  },
  BootstrapItaliaBanner:
    '/*!\n' +
    ' * ' + pkg.description + '\n' +
    ' * @version v' + pkg.version + '\n' +
    ' * @link ' + pkg.homepage + '\n' +
    ' * @license ' + pkg.license + '\n' +
    ' */\n' +
    '',

  jQueryCheck:
    'if (typeof jQuery === undefined) {\n' +
    '  throw new Error("Bootstrap Javascript requires jQuery. jQuery must be included before Bootstrap JavaScript.")\n' +
    '}\n',

  jqueryVersionCheck:
    '+function ($) {\n' +
    '  var version = $.fn.jquery.split(" ")[0].split(".")\n' +
    '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
    '   throw new Error("Bootstrap JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")\n' +
    '  }\n' +
    '}(jQuery);\n'
};