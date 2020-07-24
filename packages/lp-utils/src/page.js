import Vue from 'vue'

const createApp = (options) =>
  Vue.extend({
    name: 'Root',
    render(h) {
      return h(
        'div',
        {
          attrs: {
            id: 'app',
          },
        },
        options.sections.map((c) => h(c)),
      )
    },
    head: options.head,
  })

const createPage = (options) => {
  Vue.config.productionTip = false

  const App = createApp(options)

  new Vue({
    data() {
      return {
        breakpoints: {
          pc: true,
          sp: false,
          tablet: false,
          notPc: false,
        },
      }
    },
    methods: {
      handleResize() {
        this.breakpoints.pc = window.innerWidth > 1280
        this.breakpoints.tablet =
          window.innerWidth <= 1280 && window.innerWidth > 750
        this.breakpoints.sp = window.innerWidth <= 750
        this.breakpoints.notPc = window.innerWidth <= 1280
      },
    },
    mounted() {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
      document.dispatchEvent(new Event('render-event'))
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize)
    },
    render(h) {
      return h(App)
    },
  }).$mount('#app')
}

export default createPage
