const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({ config }) => {
  config.module.rules.push({
    enforce: 'pre',
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /(node_modules|bower_components|.stories.tsx?|.test.js)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  });

  config.module.rules.push({
    include: [SRC_PATH],
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /(node_modules|bower_components|.test.js$)/,
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
