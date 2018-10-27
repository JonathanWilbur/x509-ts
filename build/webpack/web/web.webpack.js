const path = require('path');
module.exports = {
    entry: [
        "./source/index.ts"
    ],
    output: {
        path: path.resolve(__dirname, "../../../dist/web"),
        filename: "x509.js",
        library: "x509",
        libraryTarget: "var"
    },
    resolve: {
        extensions: [ ".ts" ]
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimize: true
    },
    target: "web"
};