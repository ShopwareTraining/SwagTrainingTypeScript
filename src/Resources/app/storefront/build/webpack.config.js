const { join } = require('path');

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    join(__dirname, '..', 'node_modules', '@babel', 'preset-typescript')
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx']
        }
    };
}
