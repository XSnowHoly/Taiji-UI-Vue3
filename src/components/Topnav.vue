<template>
  <div class="topnav-wrap">
    <div class="topnav">
      <div class="icon-wrap" v-if="asideBtnVisible" @click="toggleMenu">
        <i class="iconfont icon-taiji"></i>
      </div>
      <div class="logo" @click="toHome">
        <img src="../assets/taiji.png" alt="" />
        <h1>Taiji UI</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topnav-wrap {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: none;
  background: rgba(248, 248, 248, 0.678);

  .topnav {
    height: 64px;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;

    .icon-wrap {
      display: none;
      position: absolute;
      cursor: pointer;
      top: 24px;
      left: 0;
      padding: 0 20px;
    }

    .logo {
      display: flex;
      cursor: pointer;
      align-items: center;
      padding-right: 16px;
      padding-left: 40px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);

      img {
        width: 40px;
      }
    }

    @media screen and (max-width: 500px) {
      .icon-wrap {
        display: inline-block;
      }

      .logo {
        margin: 0 auto;
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
}
</style>

<script lang="ts">
import { inject, Ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Topnav',
  props: {
    asideBtnVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    console.log('Topnav获取的asideVisible', asideVisible.value)

    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }

    const router = useRouter()
    const toHome = () => {
      router.push({
        name: 'home',
      })
    }
    return {
      toHome,
      toggleMenu,
    }
  },
}
</script>
