<template>
     <header class="header">
      <h1>小黑记事本</h1>
      <input 
      @keyup.enter="handleAdd"
      v-model="todoName" placeholder="请输入任务" class="new-todo" />
      <button class="add" @click="handleAdd">添加任务</button>
    </header>
</template>

<script>
export default {
  data() {
    return {
      todoName:''
    }
  },
  methods: {
    handleAdd() {
      // console.log(this.todoName);
      if(this.todoName.trim() === '') return alert('输入不能为空')
      this.$emit('add',this.todoName)
      this.todoName = ''
      
    }
  }
}
</script>

<style>
</style>