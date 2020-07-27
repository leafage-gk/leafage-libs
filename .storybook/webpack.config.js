module.exports = ({ config }) => {
  config.module.rules = config.module.rules.map(rule => {
    if (rule.test.toString().includes('svg')) {
      const test = rule.test
        .toString()
        .replace('svg|', '')
        .replace(/\//g, '')
      return { ...rule, test: new RegExp(test) }
    } else {
      return rule
    }
  })
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  })
  config.module.rules.push({
    test: /\.vue$/,
    use: 'vue-docgen-loader',
    enforce: 'post',
  })
  config.module.rules.push({
    test: /\.svg(\?.*)?$/,
    loader: 'vue-svg-loader',
  })
  config.resolve.alias = {
    vue: 'vue/dist/vue.esm.js',
  }
  return config
};
