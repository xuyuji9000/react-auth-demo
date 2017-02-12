var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        "./src/app.js" // appʼs entry point
    ],
    devtool: "source-map",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader', 'babel-loader?'+JSON.stringify({
                presets: ['es2015', 'react']
            })]
        }]
    }
}
