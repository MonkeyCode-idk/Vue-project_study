<template>
    <div style="border: 3px solid #000; margin:20px;">
      我是App组件
      <!-- 1. 给组件标签，添加属性的方式，传值 -->
       <!-- (2). 父组件，对消息进行监听 -->
      <MySon :title="myTitle" @changeTitle="handleChange"></MySon>
      </div>
</template>

<script>
import MySon from './components/MySon.vue'
export default {
  data() {
    return {
      myTitle:'杨幂'
    }
  },
  methods: {
    // (3). 提供处理函数，提供逻辑
    handleChange(newTitle) {
      console.log(newTitle);
      this.myTitle = newTitle
    }
  },
  components: {
    MySon
  }
}
</script>

<style>
</style>