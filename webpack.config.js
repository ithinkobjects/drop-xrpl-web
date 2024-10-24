const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'client'],
    extensions: ['.js', '.jsx']
  }
};
