const path = require('path');
module.exports = {
    entry: [
        "./source/x509.ts"
    ],
    output: {
        path: path.resolve(__dirname, "../../dist/node"),
        filename: "x509.js",
        libraryTarget: "commonjs2",
        "strictModuleExceptionHandling": true
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
        minimize: false
    },
    target: "node"
};