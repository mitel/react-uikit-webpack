
var webpack = require('webpack');
var path = require('path');

module.exports = {
  target: 'node',
  cache: true,
  context: __dirname,
  debug: true,
  devtools: "source-map",
  entry:   ["./src/server/server"],

  output:  {
    path:     path.join(__dirname, "public/server"),
    filename: "server.js"
  },

  plugins: [
    new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true}),
    new webpack.DefinePlugin({"global.GENTLY": false})
  ],

  module: {
    loaders: [
      {include: /\.json$/, loaders: ['json-loader']},
      {include: /\.jsx$/, loaders: ['babel-loader?stage=1&optional=runtime']},
      {include: /\.js$/, loaders: ['babel-loader?stage=1&optional=runtime'],
        exclude: [/node_modules/, /bower_components/]}
    ]
  },

  resolve: {
    extensions: ["", ".json", ".jsx", ".js"],
    modulesDirectories: [
      "src/server", "node_modules"
    ]
  },

  node:    {
    __dirname: true,
    fs:        'empty'
  }

}
