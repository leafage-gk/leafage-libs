const fs = require('fs')
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer

const env = process.env.NODE_ENV || 'development'

const setupConfig = (options) => {
  const routes = []
  const plugins = []

  const rootDir = options.rootDir || process.cwd()

  const distDir = path.resolve(rootDir, 'dist')
  const pagesDir = path.resolve(rootDir, 'src', 'pages')

  let pages = {}
  if (!options.target || env === 'development') {
    pages = fs
      .readdirSync(pagesDir)
      .filter((file) => fs.statSync(path.join(pagesDir, file)).isDirectory())
      .reduce((p, c) => {
        routes.push(`/${c}.html`)
        return Object.assign(p, {
          [c]: {
            entry: `src/pages/${c}/index.js`,
            template: 'src/template.html',
            filename: `${c}.html`,
            title: options.title,
          },
        })
      }, {})
  }

  if (env === 'development') {
    pages.index = {
      entry: 'src/pages/main/index.js',
      template: 'src/template.html',
      filename: 'index.html',
      title: options.title,
    }
  } else if (options.target) {
    pages.index = {
      entry: `src/pages/${options.target}/index.js`,
      template: 'src/template.html',
      filename: 'index.html',
      title: options.title,
    }
    routes.push('/index.html')
  }

  if (env === 'production') {
    plugins.push(
      new PrerenderSPAPlugin({
        staticDir: distDir,
        routes,
        renderer: new PuppeteerRenderer({
          headless: true,
          renderAfterDocumentEvent: 'render-event',
        }),
        postProcess(context) {
          if (context.route.endsWith('.html')) {
            context.outputPath = path.join(distDir, context.route)
            context.html = context.html
              .replace(/<script (.*?)>/g, '<script $1 defer>')
              .replace('id="app"', 'id="app" data-server-rendered="true"')
          }
          return context
        },
      }),
    )
  }

  const config = {
    pages,
    chainWebpack: (config) => {
      config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap((options) => Object.assign(options, { limit: 1024 }))
      config.plugin('copy').tap(([options]) => {
        options[0].ignore = ['.gitkeep']
        return [options]
      })
    },
    configureWebpack: {
      resolve: {
        alias: {
          '@': path.resolve(rootDir, 'src'),
        },
      },
      plugins,
    },
    css: {
      loaderOptions: {
        scss: {
          additionalData: '@import "@/scss/settings.scss";',
        },
        css: {
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      },
    },
    publicPath: './',
  }

  if (env === 'development') {
    config.devServer = {
      historyApiFallback: {
        rewrites: [{ from: /^\/*/, to: '/index.html' }],
      },
    }
  }

  return config
}

module.exports = setupConfig
