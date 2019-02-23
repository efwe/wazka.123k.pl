import merge from 'webpack-merge'
import common from './webpack.common.babel.js'

module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 9090
    },
});