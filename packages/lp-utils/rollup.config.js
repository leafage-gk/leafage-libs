import alias from '@rollup/plugin-alias'
import fs from 'fs'
import path from 'path'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import svg from 'rollup-plugin-vue-inline-svg'

const components = fs
  .readdirSync(path.resolve(__dirname, 'src', 'components'))
  .filter((file) => path.extname(file) === '.vue')

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'esm',
      file: 'dist/lp-utils.esm.js',
    },
    external: ['vue'],
    plugins: [svg(), vue({ css: false }), scss({ output: false })],
  },
  // SSR build.
  {
    input: 'src/wrapper.js',
    output: {
      name: 'LpUtils',
      exports: 'named',
      format: 'cjs',
      file: 'dist/lp-utils.ssr.js',
    },
    external: ['vue'],
    plugins: [
      svg(),
      vue({ css: false, template: { optimizeSSR: true } }),
      scss({ output: false }),
    ],
  },
  // Browser build.
  {
    input: 'src/wrapper.js',
    output: {
      name: 'LpUtils',
      exports: 'named',
      format: 'iife',
      file: 'dist/lp-utils.js',
      globals: {
        vue: 'Vue',
      },
    },
    external: ['vue'],
    plugins: [
      svg(),
      vue({
        css: false,
      }),
      scss({
        output: 'dist/lp-utils.css',
        outputStyle: 'compressed',
      }),
      terser(),
    ],
  },
  {
    input: 'src/page.js',
    output: {
      format: 'esm',
      file: `lib/page.js`,
    },
    external: ['vue'],
  },
  {
    input: 'src/scroll.js',
    output: {
      format: 'esm',
      file: `lib/scroll.js`,
    },
    external: ['vue'],
  },
  {
    input: 'src/scss/base.scss',
    plugins: [
      scss({
        output: `lib/css/base.css`,
      }),
    ],
  },
  ...components.map((file) => ({
    input: `src/components/${file}`,
    output: {
      format: 'esm',
      file: `lib/components/${file.replace('.vue', '.js')}`,
      banner: `import './${file.replace('.vue', '.css')}';`,
    },
    external: (id) => {
      if (id === 'vue') {
        return true
      }
      if (/^\.(.*)/.test(id)) {
        return true
      }
    },
    plugins: [
      alias({
        entries: [{ find: /^(.*)\.vue$/, replacement: '$1' }],
      }),
      svg(),
      vue({ css: false }),
      scss({
        output: `lib/components/${file.replace('.vue', '.css')}`,
      }),
    ],
  })),
]
