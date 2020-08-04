<template>
  <div
    class="la-img"
    :style="{
      'background-image': `url('${src}')`,
      'padding-bottom': `calc(${ratio} * 100%)`,
    }"
  >
    <div class="la-img__container">
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LaImg',
  props: {
    src: {
      type: String,
      required: true,
    },
    ratio: {
      type: [String, Number],
      required: true,
    },
  },
})
</script>

<style lang="scss">
.la-img {
  position: relative;
  width: 100%;
  background-size: 100% auto;
  &__container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
