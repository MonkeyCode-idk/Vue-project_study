<template>
  <div id="app">

  </div>
</template>

<script>
import GrandSon from './components/GrandSon.vue';
import SonA from './components/SonA.vue';
import SonB from './components/Sonb.vue';

export default {
  name: 'App',
  components: {
    GrandSon,
    SonA,
    SonB
  },
  data(){
    return {
      color:'pink',
      userInfo:{
        name:'zs',
        age:18
      }
    }
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
