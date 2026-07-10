<template>
  <!-- 主体区域 -->
  <section id="app">
   <TodoHeader @add="handleAdd"></TodoHeader>
   <TodoMain @del="handleDel" :list="list"></TodoMain>
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
// 3.利用 v-for 渲染

// 添加功能：
// 1.收集表单数据 -> v-model
// 2.监听事件（回车 + 点击 都要进行添加）
// 3.子传父，将任务名称传递给父组件App.vue
// 4.进行添加 unshift(自己的数据自己负责)

// 删除功能
// 1.监听事件（监听删除的点击）携带 id
// 2.子传父，将删除的id传递给父组件App.vue
// 3.进行删除 filter(自己的数据自己删除)
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
  methods: {
    handleAdd(todoName) {
      console.log(todoName);
      this.list.unshift({
        id: +new Date(),
        name:todoName
      })
    },
    handleDel(id) {
      // console.log(`收到了孩子的${id}`);
      this.list = this.list.filter(item => item.id !== id)
      
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
