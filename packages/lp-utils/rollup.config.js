import buble from '@rollup/plugin-buble'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-scss'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'LpUtils',
    exports: 'named',
  },
  external: ['vue', 'vue-head'],
  plugins: [
    commonjs(),
    vue({
      css: false,
      compileTemplate: true,
    }),
    scss({
      output: 'dist/main.css',
      outputStyle: 'compressed',
    }),
    buble(),
  ],
}
