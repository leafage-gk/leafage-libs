<template>
  <form class="la-form" @submit.prevent="onSubmit">
    <slot />
    <div class="la-form__actions">
      <slot name="actions" />
    </div>
  </form>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactForm',
  methods: {
    onSubmit() {
      this.$emit('submit')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../scss/settings';

.la-form {
  display: block;
  padding: 2vw 4vw;
  background-color: $white;
  border-radius: 8px;
  box-shadow: 0 0 12px 6px rgba($black, 0.3);

  &__actions {
    margin: 2vw 0;
    text-align: center;
  }
}
</style>
