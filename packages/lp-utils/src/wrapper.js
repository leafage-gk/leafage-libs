import LaArticle from './components/LaArticle.vue'
import LaContainer from './components/LaContainer.vue'
import LaInnerLink from './components/LaInnerLink.vue'
import createPage from './page'
import scroll from './scroll'

export const components = {
  LaArticle,
  LaContainer,
  LaInnerLink,
}

export function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  for (const key in components) {
    Vue.component(key, components[key])
  }
}

const plugin = {
  install,
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export { createPage, scroll }

export default plugin
