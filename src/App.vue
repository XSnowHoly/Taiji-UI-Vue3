<template>
  <div>
    导航栏 | <router-link to="/"> HelloWorld1 </router-link>
    <router-link to="/helloworld2"> HelloWorld2 </router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
