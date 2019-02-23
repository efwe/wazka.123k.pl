import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import {VueLoaderPlugin} from 'vue-loader'


module.exports = {
    entry: {
        app: './src/app.js',
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'wazka',
            template: 'index.html'
        })
    ], output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        transformAssetUrls: {
                            'img': 'src',
                            'image': 'xlink:href',
                            'b-img': 'src',
                            'b-img-lazy': ['src', 'blank-src'],
                            'b-card': 'img-src',
                            'b-card-img': 'img-src',
                            'b-carousel-slide': 'img-src',
                            'b-embed': 'src'
                        }
                    }
                }
                ]
            }
        ]
    }
};
