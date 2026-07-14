<template>
<div id="app">
   <BaseA></BaseA>
 <BaseB></BaseB>
  <BaseC></BaseC>
</div>
</template>

<script>
import BaseA from './components/BaseA.vue';
import BaseB from './components/BaseB.vue';
import BaseC from './components/BaseC.vue'
export default {
  components: {
    BaseA,
    BaseB,
    BaseC
  }
}
</script>

<style>

</style>
