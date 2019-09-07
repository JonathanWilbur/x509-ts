const path = require("path");

module.exports = {
    entry: [
        "./source/index.ts",
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "x509.min.js",
        library: "x509",
        libraryTarget: "var",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/u,
                loader: "ts-loader",
                exclude: /node_modules/u,
            },
        ],
    },
    resolve: {
        extensions: [ ".ts", ".js" ],
    },
    optimization: {
        minimize: true,
    },
    target: "web",
};
