<template>
  <div class="home">
    <img class="logo" src="./../assets/taiji.png" alt="" />
    <h1>Taiji UI</h1>

    <div class="description">
      <h2>无极而太极，</h2>
      <p>天地之道，以阴阳二气造化万物。</p>
      <p>世界有太极，太极有世界。</p>
    </div>

    <router-link class="start-btn" to="/doc">开始使用</router-link>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  box-sizing: border-box;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  h1 {
    margin-top: 0;
  }

  .description {
    min-width: 100px;
    max-width: 300px;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: left;
  }

  .start-btn {
    display: inline-block;
    border: 6px solid #474747;
    padding: 10px 20px;
    color: #474747;
    font-weight: 700;
    text-decoration: none;
  }

  .logo {
    max-width: 500px;
    filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.5));
    animation: rotateAnimation infinite linear 17s;
  }

  @media screen and (max-width: 500px) {
    .logo {
      max-width: 200px;
    }
  }
}

@keyframes rotateAnimation {
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: 'Home',
}
</script>
