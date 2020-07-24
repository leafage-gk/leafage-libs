LaHeader example:

```vue
<template>
  <div class="sample">
    <la-header />
    <div class="contents">
      contents
    </div>
  </div>
</template>

<style scoped>
.sample {
  position: relative;
  height: 300px;
  width: 100%;
  background: #eee;
  overflow-y: scroll;
}
.la-header {
  position: sticky;
}
.contents {
  position: absolute;
  top: 0;
  width: 100%;
  height: 600px;
}
</style>
```
