module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  overrides: [
    {
      files: '*.d.ts',
      options: {
        trailingComma: 'es5',
      },
    },
  ],
};
