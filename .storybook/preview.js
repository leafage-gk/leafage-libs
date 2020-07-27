import { addDecorator, addParameters } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
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

addDecorator(withKnobs)

addParameters({
  options: {
    showRoots: true,
  },
})
