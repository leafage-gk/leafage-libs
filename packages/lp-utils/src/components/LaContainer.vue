<template>
  <div class="la-container">
    <template v-if="fluid">
      <slot />
    </template>
    <div v-else class="la-container__content" :class="{ shrink, padless }">
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
    padless: {
      type: Boolean,
    },
  },
})
</script>

<style lang="scss">
@import '../scss/settings.scss';

.la-container {
  position: relative;
  width: 100%;
  &__content {
    position: relative;
    max-width: $tablet;
    margin: 0 auto;
    @include responsive(padding, 0 $padding, 0 3vw);
    &.padless {
      padding: 0;
    }
    &.shrink {
      max-width: $shrink;
    }
  }
}
</style>
