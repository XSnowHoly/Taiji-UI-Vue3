<template>
  <div class="button-wrap">Swtich demo页面</div>
</template>

<style lang="scss">
.doc-wrap {
  padding-top: 64px;
  height: 100vh;
  overflow: hidden;
  display: flex;

  .aside {
    max-width: 200px;
  }

  .content {
    flex: 1;
    background: #999;
    overflow-y: scroll;
  }
}
</style>

<script lang="ts">
export default {
  name: 'ButtonDemo',
}
</script>
