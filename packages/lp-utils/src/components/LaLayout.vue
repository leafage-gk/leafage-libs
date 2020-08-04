<template>
  <div
    :class="{
      'la-layout': true,
      [`la-layout__align-${align}`]: true,
      [`la-layout__justify-${justify}`]: true,
    }"
  >
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LaLayout',
  props: {
    align: {
      type: String,
      default: 'start',
    },
    justify: {
      type: String,
      default: 'start',
    },
  },
})
</script>

<style lang="scss">
.la-layout {
  position: absolute;
  display: flex;

  &__align-start {
    top: 0;
    align-items: flex-start;
  }

  &__align-center {
    align-items: center;
    height: 100%;
  }

  &__align-end {
    bottom: 0;
    align-items: flex-end;
  }

  &__justify-start {
    left: 0;
    justify-content: flex-start;
  }

  &__justify-center {
    justify-content: center;
    width: 100%;
  }

  &__justify-end {
    right: 0;
    justify-content: flex-end;
  }
}
</style>
