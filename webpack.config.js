module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/app',
    filename: 'app.js'
  },
  devServer: {
    inline: true,
    port: 8888
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
