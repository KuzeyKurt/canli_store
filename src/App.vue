<template>
  <div id = "app">
    <p>Hello Canli!</p>
    <canMainWrapper />
  </div>
</template>

<script>
import canMainWrapper from './components/can-main-wrapper.vue'

export default {
  name: 'App',
  components: { 
    canMainWrapper
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
