
var webpack = require('webpack');
var path = require('path');

module.exports = {
  target: 'web',
  cache: true,
  context: __dirname,
  debug: true,
  devtools: 'eval',

  entry: [
    // Because HMR (Hot Module Replacement) runtime is server-agnostic and doesnʼt know anything about webpack-dev-server,
    // we need to bundle a small script (webpack-dev-server/client?http://localhost:8080) that
    // listens to webpack-dev-server messages and passes them to HMR runtime.
    'webpack-dev-server/client?http://localhost:8080',

    // HMR runtime (webpack/hot/dev-server) that knows how to apply hot updates (part of Webpack)
    // only-dev-server should ignore unaccepted modules and display useful messages to console
    'webpack/hot/only-dev-server',

    './app/App'
  ],

  output:{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    chunkFilename: '[name].[id].js',
    publicPath: 'http://localhost:8080/',
    hotUpdateMainFilename: 'update/[hash]/update.json',
    hotUpdateChunkFilename: 'update/[hash]/[id].update.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // instruct Webpack to generate HMR partial builds
    new webpack.NoErrorsPlugin(), // tells the reloader to not reload if there is a syntax error in your code

    // makes a module (JQuery here) available as variable in every module
    // needed for UIkit
    new webpack.ProvidePlugin({ // http://webpack.github.io/docs/shimming-modules.html
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],

  module: {
    loaders: [
      {include: /\.json$/, loaders: ['json-loader']},

      // react-hot-loader: It handles HMR updates for any JSX file automatically as long as your
      // JSX files export a valid component.
      {include: /\.jsx$/, loaders: ['react-hot', 'babel-loader?stage=1&optional=runtime']},
      {include: /\.js$/, loaders: ['react-hot', 'babel-loader?stage=1&optional=runtime'], exclude: [/node_modules/, /bower_components/]},

      // similar to a unix pipe from right to left. X!Y!Z is Z->Y->Z
      // the css file is loaded into css loader and then piped into style-loader which adds a <style/> tag to index.html
      {include: /\.css$/, loader: "style-loader!css-loader"},
      //less -> css -> style tag in index.html
      {include: /\.less$/, loader: "style-loader!css-loader!less-loader"},
      {include: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
      {include: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      {include: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
      //{include: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" }
    ]
  },

  devServer : {
    publicPath: 'http://localhost:8080/', //tells it where to serve the files
    contentBase: './public', // which files from your file system are served from the dev-server
    hot: true, // emits HMR events when files change
    inline: true,
    quiet: true,
    noInfo: false,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true}
  },

  resolve: {
    extensions: ["", ".json", ".jsx", ".js"],
    modulesDirectories: [
      "app", "node_modules", "bower_components",
      "bower_components/uikit/js",
      "bower_components/uikit/js/core",
      "bower_components/uikit/js/components",
      "bower_components/uikit/css",
      "bower_components/uikit/css/components",
      "bower_components/uikit/less",
      "bower_components/uikit/less/core",
      "bower_components/uikit/less/components",
      "bower_components/uikit/scss",
      "bower_components/uikit/scss/core",
      "bower_components/uikit/scss/components"
    ]
  }

}
