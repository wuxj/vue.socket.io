const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
module.exports = {
    mode: process.env.NODE_ENV,
    entry: ["./src/index.js"],
    output: {
        library: "VueSocketIO",
        libraryTarget: "var",
        filename: "vue-socketio.js",
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    plugins: [
      new EsmWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-classes"
                        ]
                    }
                }
            }
        ]
    }
};