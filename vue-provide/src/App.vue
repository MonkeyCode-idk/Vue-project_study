<template>
  <div id="app">
   <div> 
    我是App组件
    <button @click="change">修改数据</button>
  </div>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from './components/SonA.vue';
import SonB from './components/SonB.vue';

export default {
  provide() {
    return {
      color: this.color, //简单类型(非响应式)
      userInfo: this.userInfo  //复杂类型(响应式) -推荐
    }
  },
  name: 'App',
  components: {
    SonA,
    SonB
  },
  data(){
    return {
      color:'pink', //简单类型(非响应式)
      userInfo:{ //复杂类型(响应式) -推荐
        name:'zs',
        age:18
      }
    }
  },
  methods:{
    change(){
      // this.color = 'green'
      this.userInfo.name = '朴妍珍'
    }
  }
}
</script>

<style>
#app {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
  border: 2px solid black;
  padding: 20px;
}
</style>
