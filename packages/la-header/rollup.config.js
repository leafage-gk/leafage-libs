import buble from '@rollup/plugin-buble'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-scss'
import vue from 'rollup-plugin-vue'
import svg from 'rollup-plugin-vue-inline-svg'

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'LaHeader',
    exports: 'named',
  },
  plugins: [
    commonjs(),
    svg(),
    vue({
      css: false,
      compileTemplate: true,
    }),
    scss({
      output: 'dist/main.css',
    }),
    buble(),
  ],
}
