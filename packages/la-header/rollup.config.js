import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import svg from 'rollup-plugin-vue-inline-svg'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'esm',
      file: 'dist/la-header.esm.js',
    },
    external: ['vue'],
    plugins: [svg(), vue({ css: false }), scss({ output: false })],
  },
  // SSR build.
  {
    input: 'src/wrapper.js',
    output: {
      name: 'LaHeader',
      exports: 'named',
      format: 'cjs',
      file: 'dist/la-header.ssr.js',
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
      name: 'LaHeader',
      exports: 'named',
      format: 'iife',
      file: 'dist/la-header.js',
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
        output: 'dist/la-header.css',
        outputStyle: 'compressed',
      }),
      terser(),
    ],
  },
]
