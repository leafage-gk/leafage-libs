const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(css?|scss)(\?.*)?$/,
          loader: 'style-loader!css-loader!sass-loader',
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  },
  components: 'packages/**/src/[A-Z]*.vue',
}
