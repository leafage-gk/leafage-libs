<template>
  <a
    :class="{
      'la-header__btn': true,
      'la-header__btn__accent': accent,
      'la-header__btn__normal': !accent,
    }"
    :href="href"
    target="_blank"
  >
    <slot />
  </a>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    href: String,
    accent: Boolean,
  },
  name: 'LaHeaderBtn',
})
</script>

<style lang="scss">
@import './variables.scss';

.la-header {
  &__btn {
    display: block;
    height: $header-height;
    padding: 0 16px;
    font-size: 16px;
    line-height: $header-height;
    color: $white;
    text-decoration: none;
    &__normal {
      &:hover {
        background: $normal-light-color;
      }
    }
    &__accent {
      background: $accent-color;
      &:hover {
        background: $accent-light-color;
      }
    }
  }
}
</style>
