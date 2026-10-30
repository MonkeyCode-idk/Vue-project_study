<template>
  <div class="app">
    <div class="base-chart-box">
      这是一个捣乱的盒子
    </div>
    <BaseChart></BaseChart>
    <br>
    <br>
    <p>--------------------------</p>

    <BaseForm ref="baseForm"></BaseForm>

    <button @click="handleGet">获取数据</button>
    <button @click="handleReset">重置数据</button>
  </div>
</template>

<script>
import BaseChart from './components/BaseChart.vue'
import BaseForm from './components/BaseForm.vue'
export default {
  components:{
    BaseChart,
    BaseForm
  },
  methods:{
    // 父组件可以通过给子组件绑定res，来调用子组件的方法
    handleGet(){
      console.log(this.$refs.baseForm.getValues());
      
    },
    handleReset(){
      this.$refs.baseForm.resetValues()
    },
  }
}
</script>

<style>
.base-chart-box {
  width: 300px;
  height: 200px;
}
button{
  border-width: 1px;
  border-radius: 5px;
  padding: 2px 3px;
  background-color: rgb(192, 192, 192);
  margin: 8px 10px;
   cursor: pointer;
}
button:hover{
  background-color: #d8d5d5;
}
</style>