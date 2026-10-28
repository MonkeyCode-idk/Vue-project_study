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

  <!-- 父组件 → 子组件 → 子组件(DOM) → 子组件(emit) → 父组件 → 子组件 -->
    <!-- v-model 数据是双向的，会影响到父组件，vue里面禁止子组件修改父组件 -->
    <!-- :value 数据是单向的，需要别人告诉他怎么修改 -->
    <!-- 子组件通过 @change 告诉父组件"用户想改成这个值，请你改"，
       父组件收到后自己修改数据，再通过 props 流回子组件渲染。
       子组件全程没有修改任何数据，只负责"报告意图 + 展示结果"。 -->
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
