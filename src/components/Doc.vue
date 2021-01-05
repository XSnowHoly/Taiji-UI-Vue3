<template>
  <div class="doc-wrap">
    <Topnav />
    <Siderbar v-if="asideVisible" />
    <section class="content">
      <router-view />
    </section>
  </div>
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

  @media screen and (max-width: 500px) {
    .aside {
      position: absolute;
      top: 64px;
      left: 0;
    }
  }
}
</style>

<script lang="ts">
import Topnav from './Topnav.vue'
import Siderbar from './Sidebar.vue'
import { inject, Ref } from 'vue'

export default {
  name: 'Doc',
  props: {
    msg: String,
  },
  components: { Topnav, Siderbar },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    console.log('Doc获取的asideVisible', asideVisible.value)

    return {
      asideVisible,
    }
  },
}
</script>
