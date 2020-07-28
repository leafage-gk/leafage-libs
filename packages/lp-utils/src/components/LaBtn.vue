<template>
  <button
    :class="{ 'la-btn': true, 'la-btn__outlined': outlined }"
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LaBtn',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: Boolean,
  },
})
</script>

<style lang="scss">
@import '../scss/settings';

.la-btn {
  display: inline-block;
  padding: 8px 32px;
  font-size: 20px;
  font-weight: bold;
  color: $white;
  background-color: $btn-color;
  border: 2px solid $btn-color;
  border-radius: 8px;

  &:hover {
    color: $btn-color;
    background-color: $white;
  }

  &__outlined {
    color: $btn-color;
    background-color: $white;
    &:hover {
      color: $white;
      background-color: $btn-color;
    }
  }
}
</style>
