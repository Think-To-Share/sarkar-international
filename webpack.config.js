const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = (_env, options) => {
    const isProduction = options.mode !== 'development';

    return {
        entry: './src/js/app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/app.js'
        }, 
    
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
    
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        isProduction ? 
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../',
                            }
                        } : 
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },

                {
                    test: /\.(jpe?g|png|webp|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'public/[name]-[hash][ext]'
                    }
                }
            ]
        },

        plugins: [
            new WebpackBar(),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/app.css'
            })
        ],

        optimization: {
            minimizer: [
              `...`,
              new CssMinimizerPlugin(),
            ],
          },

        devtool: 'source-map'
    }
}
