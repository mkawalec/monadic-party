const webpack = require('webpack')

module.exports = {
  context: __dirname + "/src",
  entry: './index.js',
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env']
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    { 
      test: /\.(jpg|png)$/, 
      loader: [ "url-loader?limit=10000" ] 
    },
    { 
      test: /\.html/, 
      loader: 'file-loader?name=[name].[ext]' 
    }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  }
}
