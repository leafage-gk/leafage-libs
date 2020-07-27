<template>
  <a class="la-inner-link" @click.prevent="handleClick">
    <slot />
  </a>
</template>

<script>
import Vue from 'vue'

import scroll from '../scroll'

export default Vue.extend({
  name: 'LaInnerLink',
  props: {
    target: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      const to =
        this.target === '#'
          ? document.body.offsetTop
          : document.getElementById(this.target.slice(1)).offsetTop
      scroll(to)
      return false
    },
  },
})
</script>

<style lang="scss">
.la-inner-link {
  cursor: pointer;
}
</style>
