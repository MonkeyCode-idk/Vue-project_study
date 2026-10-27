<template>
  <div id="app">
   <BaseSelect
   :cityId="selectId"
   @changeId="selectId = $event"
   ></BaseSelect>
<p>----------------</p>
   <p>v-model传值,子 Input触发</p>
   <!-- v-model => :value + @input -->
   <BaseSelectB 
   v-model="selectId"
   ></BaseSelectB>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue';

import BaseSelectB from './components/BaseSelectB.vue';
export default {
  data() {
    return {
      selectId: '104'
    }
 },
  components: {
      BaseSelect,
      BaseSelectB,
  }
}
</script>

<style>

</style>
