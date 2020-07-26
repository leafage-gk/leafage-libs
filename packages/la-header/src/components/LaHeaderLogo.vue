<template>
  <a :href="href" target="_blank">
    <leafage-logo class="la-header__logo" />
  </a>
</template>

<script>
import Vue from 'vue'

import LeafageLogo from './LeafageLogo.svg'

export default Vue.extend({
  name: 'LaHeaderLogo',
  components: {
    LeafageLogo,
  },
  props: {
    href: String,
  },
})
</script>

<style lang="scss">
@import './variables.scss';

.la-header {
  &__logo {
    height: $header-height;
  }
}
</style>
