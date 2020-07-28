<template>
  <div
    :class="{ 'la-top-scroller': true, 'la-top-scroller__active': active }"
    @click="handleClick"
  >
    <a>
      <span class="la-top-scroller__arrow-up"></span>
    </a>
  </div>
</template>

<script>
import Vue from 'vue'

import scroll from '../scroll'

export default Vue.extend({
  name: 'LaTopScroller',
  data() {
    return {
      scrollTimerId: null,
      active: false,
    }
  },
  methods: {
    onScroll() {
      if (this.scrollTimerId != null) {
        clearTimeout(this.scrollTimerId)
      }
      this.scrollTimerId = setTimeout(() => {
        if (window.pageYOffset > 0) {
          this.active = true
        } else {
          this.active = false
        }
      }, 500)
    },
    handleClick() {
      scroll(0)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
})
</script>

<style lang="scss">
@import '../scss/settings.scss';

.la-top-scroller {
  z-index: 50;
  opacity: 0;
  transition: all 0.6s ease;

  &:hover {
    cursor: pointer;
    @include breakpoint-not-sp {
      opacity: 0.6 !important;
    }
  }

  &__active {
    opacity: 1;
  }

  &__arrow-up {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    &::before {
      position: relative;
      top: 2px;
      display: block;
      width: 10px;
      height: 10px;
      content: '';
      border: solid $white;
      border-width: 5px 5px 0 0;
      transform: rotate(-45deg);
    }
  }
}
</style>
