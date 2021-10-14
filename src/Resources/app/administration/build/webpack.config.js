const { join } = require('path');

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [join(__dirname, '..', 'node_modules', '@babel', 'preset-typescript')]
                    }
                }
            ]
        }
    };
}
