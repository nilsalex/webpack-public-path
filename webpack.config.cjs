const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
    },
    experiments: {
        outputModule: true,
    },
    optimization: {
        chunkIds: 'named',
        minimize: false,
    },
};
