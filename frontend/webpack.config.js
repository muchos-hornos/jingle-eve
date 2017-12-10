const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    app: ['babel-polyfill', './app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        query: { mimetype: 'image/png' }
      }
    ]
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
else if (process.env.NODE_ENV === 'development') {
  config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
  config.devServer = {
    hot: true,
    open: true,
    proxy: { // access to our eve-api
      "/api": {
        target: "https://localhost:5000",
        secure: false
      }
    }
  }
}

module.exports = config;