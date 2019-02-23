import merge from 'webpack-merge'
import common from './webpack.common.babel.js'

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
});
