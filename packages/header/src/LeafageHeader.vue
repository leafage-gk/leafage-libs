<template>
  <div class="leafage-header" :class="{ top }">
    <h2>Leafage</h2>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LeafageHeader',
  data() {
    return {
      top: true,
    }
  },
  methods: {
    onScroll() {
      if (window) {
        this.top = window.scrollY === 0
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.leafage-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background: #455a64;
  &.top {
    background: rgba(0, 0, 0, 0.6);
  }
  h2 {
    margin: 0 20px;
    line-height: 56px;
    color: white;
  }
}
</style>
