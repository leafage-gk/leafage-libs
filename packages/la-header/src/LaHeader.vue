<template>
  <header
    :class="{
      'la-header': true,
      'la-header__top': top,
      'la-header__elevation': !top,
    }"
    @scroll="onScroll"
  >
    <la-header-logo href="https://leafage.co.jp/" />
    <la-header-spacer />
    <la-header-menu>
      <la-header-btn href="https://leafage.co.jp/company">
        会社概要
      </la-header-btn>
      <la-header-btn href="https://leafage.co.jp/press">
        ニュース
      </la-header-btn>
      <la-header-btn accent href="https://leafage.co.jp/contact">
        お問い合わせ
      </la-header-btn>
    </la-header-menu>
  </header>
</template>

<script>
import Vue from 'vue'

import LaHeaderBtn from './components/LaHeaderBtn.vue'
import LaHeaderLogo from './components/LaHeaderLogo.vue'
import LaHeaderMenu from './components/LaHeaderMenu.vue'
import LaHeaderSpacer from './components/LaHeaderSpacer.vue'

/**
 * 共通ヘッダー
 *
 * @todo ripple effect
 */
export default Vue.extend({
  name: 'LaHeader',
  components: {
    LaHeaderBtn,
    LaHeaderLogo,
    LaHeaderMenu,
    LaHeaderSpacer,
  },
  data() {
    return {
      top: true,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.top = window.scrollY === 0
    },
  },
})
</script>

<style lang="scss">
@import './components/variables.scss';

.la-header {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: $header-height;
  padding: 0 16px;
  background: $background-color;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  &__top {
    background: $background-top-color;
  }
  &__elevation {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  + * {
    margin-top: $header-height;
  }
}
</style>
