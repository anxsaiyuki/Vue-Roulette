const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  cache: true,
  entry: {
  	app: './src/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'build.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
  	loaders: [
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('src')],
        query: {
          presets: ['es2015', 'vue'],
        },
      },
    ],
  }
}