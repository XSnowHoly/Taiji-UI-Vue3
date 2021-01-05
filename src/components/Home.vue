<template>
  <div class="home">
    <Topnav />

    <div class="logo-wrap">
      <img class="logo" src="./../assets/taiji.png" alt="" />
    </div>

    <div class="description">
      <h1>Taiji UI</h1>
      <h2>无极而太极，</h2>
      <p>天地之道，以阴阳二气造化万物。</p>
      <p>世界有太极，太极有世界。</p>
    </div>

    <div class="start">
      <router-link class="start-btn" to="/doc">开始使用</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  overflow-y: hidden;
  box-sizing: border-box;
  color: #2c3e50;

  h1 {
    margin-top: 0;
  }

  .logo-wrap {
    margin-top: 30px;
    text-align: center;
  }

  .description {
    min-width: 100px;
    max-width: 300px;
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: left;
  }

  .start {
    text-align: center;
    .start-btn {
      margin: 0 auto;
      display: inline-block;
      border: 6px solid #474747;
      padding: 10px 20px;
      color: #474747;
      font-weight: 700;
      text-decoration: none;
    }
  }

  .logo {
    max-width: 500px;
    filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.5));
    animation: rotateAnimation infinite linear 17s;
  }

  @media screen and (max-width: 500px) {
    .logo {
      max-width: 200px;
      margin-top: 68px;
    }
  }
}

@keyframes rotateAnimation {
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
  name: 'Home',
  components: { Topnav },
}
</script>
