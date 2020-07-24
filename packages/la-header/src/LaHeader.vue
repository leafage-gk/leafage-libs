<template>
  <div class="la-header" :class="{ 'la-header__top': top }" @scroll="onScroll">
    <a href="https://leafage.co.jp/" target="_blank">
      <leafage-logo class="la-header__logo" />
    </a>
    <div class="la-header__spacer" />
    <div class="la-header__menu-list">
      <a href="https://leafage.co.jp/company" target="_blank">会社概要</a>
      <a href="https://leafage.co.jp/press" target="_blank">ニュース</a>
      <a
        class="la-header__inquiry"
        href="https://leafage.co.jp/contact"
        target="_blank"
      >
        お問い合わせ
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import LeafageLogo from './leafage-logo.svg'

/**
 * 共通ヘッダー
 * @example ./example.md
 */
export default Vue.extend({
  name: 'LaHeader',
  components: {
    LeafageLogo,
  },
  data() {
    return {
      top: true,
    }
  },
  mounted() {
    this.$root.$el.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    this.$root.$el.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.top = this.$root.$el.scrollTop === 0
    },
  },
})
</script>

<style lang="scss">
$background-color: #455a64;
$header-height: 64px;

.la-header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: $header-height;
  padding: 0 10px;
  background: $background-color;
  &__top {
    background: rgba(0, 0, 0, 0.6);
  }
  &__logo {
    height: $header-height;
  }
  &__spacer {
    flex-grow: 1;
  }
  &__menu-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a {
      display: block;
      height: $header-height;
      padding: 0 20px;
      font-size: 16px;
      line-height: $header-height;
      color: white;
      text-decoration: none;
      &:hover {
        background: rgba(white, 0.6);
      }
    }
  }
  &__inquiry {
    background: #f57c00;
    &:hover {
      background: #ffb74d;
    }
  }
  + * {
    margin-top: $header-height;
  }
}
</style>
