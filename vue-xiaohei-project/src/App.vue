<template>
  <!-- 主体区域 -->
  <section id="app">
   <TodoHeader></TodoHeader>
   <TodoMain :list="list"></TodoMain>
   <TodoFooter></TodoFooter> 
  
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';

// 渲染功能:
// 1.提供数据 -> 提供在公共的父组件 App.vue
// 2.通过父传子，将数据传递给TodoMain
export default {
  data() {
    return {
      list: [
        {id:1,name:'看电影'},
        {id:2,name:'逛街'},
        {id:3,name:'玩游戏'},
      ]
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
 
}
</script>

<style>

</style>
