<template>
  <div id="app">
    <BaseSelect :cityId="selectId" @changeId="selectId = $event"></BaseSelect>
    <p>----------------</p>
    <p>v-model传值,子 Input触发</p>
    <!-- v-model => :value + @input -->
    <p> v-model => :value + @input</p>
    <input v-model="msg1" type="text">
    <br>
    <input type="text" :value="msg2"> <!-- :value 没有双向绑定，需要借助 @input="msg = $event.target.value -->
    <br>
    <input type="text" :value="msg3" @input="msg3 = $event.target.value">
    <BaseSelectB v-model="selectId"></BaseSelectB>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue';

import BaseSelectB from './components/BaseSelectB.vue';
export default {
  data() {
    return {
      selectId: '104',
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  components: {
    BaseSelect,
    BaseSelectB,
  }
}
</script>

<style></style>
