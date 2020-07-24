const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  title: 'Leafageライブラリ',
  pagePerSection: true,
  require: [path.join(__dirname, 'docs/global.requires.js')],
  sections: [
    {
      name: 'イントロダクション',
      content: 'docs/introduction.md',
    },
    {
      name: 'パッケージ',
      content: 'docs/packages.md',
      sectionDepth: 1,
      sections: [
        {
          name: 'la-header',
          content: 'packages/la-header/README.md',
          components: 'packages/la-header/src/LaHeader.vue',
        },
        {
          name: 'lp-utils',
          content: 'packages/lp-utils/README.md',
          components: 'packages/lp-utils/src/components/*.vue',
        },
      ],
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  },
}
