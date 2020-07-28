import addon from '@storybook/addons'
import { action } from '@storybook/addon-actions'
import Vue from 'vue'

Vue.component('RouterLink', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot /></a>',
})

addon.setConfig({
  showRoots: true,
})
