<template>
  <div class="la-header__menu">
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LaHeaderMenu',
})
</script>

<style lang="scss">
.la-header {
  &__menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
