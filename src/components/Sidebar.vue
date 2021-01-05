<template>
  <aside class="aside">
    <router-link class="menu-item" to="/doc/button">Button组件</router-link>
    <router-link class="menu-item" to="/doc/tab">Tab组件</router-link>
    <router-link class="menu-item" to="/doc/switch">Switch组件</router-link>
  </aside>
</template>

<style lang="scss">
.aside {
  max-width: 200px;

  .menu-item {
    display: block;
    padding: 10px 20px;
    background: #fff;

    &:hover {
      background: rgb(187, 187, 187);
      color: rgb(255, 255, 255);
    }
  }
}
</style>

<script lang="ts">
export default {
  name: 'Siderbar',
}
</script>
