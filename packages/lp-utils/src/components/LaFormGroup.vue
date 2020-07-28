<template>
  <div class="la-form-group">
    <div class="la-form-group__label">
      <slot name="label" />
    </div>
    <div class="la-form-group__input">
      <slot name="input" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LaFormGroup',
})
</script>

<style lang="scss" scoped>
@import '../scss/settings';

.la-form-group {
  display: flex;
  width: 100%;
  margin: 4vw 0;

  @include breakpoint-sp {
    flex-direction: column;
  }

  &__label {
    flex: 0.5;
    font-size: 20px;
    font-weight: bold;
    text-align: right;

    @include responsive(padding, 8px 20px, 1vw 3vw);

    @include breakpoint-sp {
      text-align: left;
    }
  }

  &__input {
    flex: 1.2;
    text-align: left;

    input,
    select,
    textarea {
      width: 90%;
      font-size: 18px;
      border: 2px solid $grey;
      border-radius: 1vw;

      @include responsive(padding, 8px, 1vw);

      @include breakpoint-sp {
        width: 100%;
      }
    }

    textarea::-webkit-scrollbar {
      display: none;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
      &::-ms-expand {
        display: none;
      }
    }
  }
}
</style>
