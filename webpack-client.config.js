// production

var webpack = require('webpack');
var path = require('path');

module.exports = {
    target: 'web',
    cache: false,
    context: __dirname,
    debug: false,
    devtool: false,

    entry: ['./src/app/App'],

    output:{
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        chunkFilename: '[name].[id].js',
        publicPath: 'http://localhost:8080/'
    },

    plugins: [
        new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
        // makes a module (JQuery here) available as variable in every module
        // needed for UIkit
        new webpack.ProvidePlugin({ // http://webpack.github.io/docs/shimming-modules.html
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
        }),
        new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        loaders: [
            {include: /\.json$/, loaders: ['json-loader']},

            // react-hot-loader: It handles HMR updates for any JSX file automatically as long as your
            // JSX files export a valid component.
            {include: /\.jsx$/, loaders: ['babel-loader?stage=1&optional=runtime']},
            {include: /\.js$/, loaders: ['babel-loader?stage=1&optional=runtime'],
                exclude: [/node_modules/, /bower_components/]},

            // similar to a unix pipe from right to left. X!Y!Z is Z->Y->Z
            // the css file is loaded into css loader and then piped into style-loader which adds a <style/> tag to index.html
            {include: /\.css$/, loader: "style-loader!css-loader"},

            // less -> css -> style tag in index.html
            {include: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            {include: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            {include: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            {include: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
            //{include: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" }
        ]
    },

    resolve: {
        extensions: ["", ".json", ".jsx", ".js"],
        modulesDirectories: [
            "src/app", "node_modules", "bower_components",
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
    }

}
