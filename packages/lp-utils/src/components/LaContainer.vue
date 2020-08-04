<template>
  <div
    :class="{
      'la-container': true,
      ...(contentClass & fluid
        ? {
            [contentClass]: true,
          }
        : {}),
    }"
  >
    <template v-if="fluid">
      <slot />
    </template>
    <div
      v-else
      :class="{
        'la-container__content': true,
        'la-container__shrink': shrink,
        ...(contentClass
          ? {
              [contentClass]: true,
            }
          : {}),
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LaContainer',
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    shrink: {
      type: Boolean,
    },
    contentClass: {
      type: String,
    },
  },
})
</script>

<style lang="scss">
@import '../scss/settings.scss';

.la-container2 {
  position: relative;
  width: 100%;
  &__content {
    position: relative;
    max-width: $tablet;
    margin: 0 auto;
  }
  &__shrink {
    max-width: $shrink;
  }
}
</style>
