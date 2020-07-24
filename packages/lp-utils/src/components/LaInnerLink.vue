<docs>
LaInnerLink example:

```vue
  <la-inner-link target="#piyo">
    go piyo
  </la-inner-link>
  <div id="hoge">
    hoge
  </div>
  <div style="width: 100%; height: 900px;"></div>
  <la-inner-link target="#hoge">
    go hoge
  </la-inner-link>
  <div id="piyo">
    piyo
  </div>
```
</docs>
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
