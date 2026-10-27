<template>
  <div id="app">
   <BaseCount></BaseCount>
   <BaseCount></BaseCount>
   <BaseCount></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue';

export default {
  name:'App',
  components: {
    BaseCount
  }
}
</script>

<style>
</style>
