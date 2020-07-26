<template>
  <div class="la-header__spacer"></div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LaHeaderSpacer',
})
</script>

<style lang="scss">
.la-header {
  &__spacer {
    flex-grow: 1;
  }
}
</style>
