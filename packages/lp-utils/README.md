## introduction

### install

```bash
yarn add @leafage-libs/lp-utils
```

### usage

```js static
import Vue from 'vue'
import VueHead from 'vue-head'
import LpUtils, { createPage } from '@leafage-libs/lp-utils'

Vue.use(VueHead)
Vue.use(LpUtils)

createPage({
  head: {
    title: {
      inner: 'page',
    },
  },
  sections: [],
})
```
