module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
<<<<<<< HEAD
      require('@babel/plugin-proposal-decorators').default,
=======
      '@babel/plugin-proposal-decorators',
>>>>>>> 0c710b7a8b02a711bcc81ddb297fc6710c05a285
      {
        legacy: true,
      },
    ],
  ],
}
