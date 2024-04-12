<template>
  <HeadDome />
  <UsersDome />
  <ListDome />
</template>

<script>
import HeadDome from './components/HeadDome.vue'
import ListDome from './components/ListDome.vue'
import UsersDome from './components/UsersDome.vue'

export default {
  name: 'App',
  components: {
    HeadDome,
    ListDome,
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
