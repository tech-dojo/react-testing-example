var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./test.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [

            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {presets:[ 'es2015', 'react', 'stage-0' ]}

            }


        ]
    }
};
