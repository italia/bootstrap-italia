module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: require('browserslist-config-design-italia'),
          },
        },
      ],
    ],
    plugins: [
      ['@babel/plugin-transform-react-jsx', { pragma: 'h' }]
    ],
}
