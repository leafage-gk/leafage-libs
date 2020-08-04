import alias from '@rollup/plugin-alias'
import fs from 'fs'
import path from 'path'
import postcss from 'rollup-plugin-postcss'
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
    plugins: [
      svg(),
      vue({ css: false }),
      postcss({
        extract: false,
        use: ['sass'],
      }),
    ],
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
      postcss({
        extract: false,
        use: ['sass'],
      }),
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
      postcss({
        extract: path.resolve('./dist/lp-utils.css'),
        use: ['sass'],
        minimize: true,
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
      postcss({
        extract: path.resolve(
          `./lib/components/${file.replace('.vue', '.css')}`,
        ),
        use: ['sass'],
      }),
    ],
  })),
]
