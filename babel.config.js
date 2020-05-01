module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      // require('@babel/plugin-proposal-decorators').default,
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
}
