<template>
  <div class="la-header-caption">
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LaHeaderCaption',
})
</script>

<style lang="scss">
.la-header-caption {
  align-self: flex-end;
  margin-bottom: 12px;
  margin-left: 16px;
  font-size: 14px;
  color: #eee;
}
</style>
