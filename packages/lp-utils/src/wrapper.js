import './scss/base.scss'

import LaArticle from './components/LaArticle.vue'
import LaBtn from './components/LaBtn.vue'
import LaContainer from './components/LaContainer.vue'
import LaForm from './components/LaForm.vue'
import LaFormGroup from './components/LaFormGroup.vue'
import LaImg from './components/LaImg.vue'
import LaInnerLink from './components/LaInnerLink.vue'
import LaLayout from './components/LaLayout.vue'
import LaSimpleNav from './components/LaSimpleNav.vue'
import LaTopScroller from './components/LaTopScroller.vue'
import createPage from './page'
import scroll from './scroll'

export const components = {
  LaArticle,
  LaBtn,
  LaContainer,
  LaForm,
  LaFormGroup,
  LaImg,
  LaInnerLink,
  LaLayout,
  LaSimpleNav,
  LaTopScroller,
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
