<template>
  <p class="la-article">
    <slot />
  </p>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LaArticle',
})
</script>

<style lang="scss">
.la-article {
  display: block;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-spacing: -1em;
  span {
    display: inline-block;
  }
}
</style>
