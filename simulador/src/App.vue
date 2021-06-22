<template>
  <div id="app">
    <Header></Header>
    <corpo></corpo>
    
   
  </div>
</template>

<script>
import Header from './components/Header.vue'

import corpo from './components/body.vue'


export default {
  name: 'App',
  components: {
    Header,
    corpo
    
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
  
  
}
</style>
