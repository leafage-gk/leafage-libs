<template>
  <header class="la-simple-nav">
    <la-container>
      <nav>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <a :href="item.to">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
    </la-container>
  </header>
</template>

<script>
import Vue from 'vue'

import LaContainer from './LaContainer.vue'

export default Vue.extend({
  name: 'LaSimpleNav',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    LaContainer,
  },
})
</script>

<style lang="scss">
@import '../scss/settings.scss';

$la-simple-nav-height: 60px;

.la-simple-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: $la-simple-nav-height;
  background: $white;
  ul {
    display: flex;
    a {
      display: block;
      height: $la-simple-nav-height;
      padding: 0 20px;
      line-height: $la-simple-nav-height;
      color: $grey-dark;
      &:hover {
        background: $grey-lighter;
      }
    }
  }
  + * {
    margin-top: $la-simple-nav-height;
  }
}
</style>
