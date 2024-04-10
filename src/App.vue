<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HeadDome />
  <!-- <IndexDemo /> -->
  <UsersDome />
</template>

<script>
import HeadDome from './components/HeadDome.vue'
// import IndexDemo from './components/IndexDemo.vue'
import UsersDome from './components/UsersDome.vue'

export default {
  name: 'App',
  components: {
    HeadDome,
    // IndexDemo,
    UsersDome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
