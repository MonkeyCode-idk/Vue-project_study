<template>
  <div class="app">
    <!-- 是否在编辑状态 -->
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp">
      <button>确认</button>
    </div>
    <!-- 默认状态 -->
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      editValue: '',
      isShowEdit: false
    }
  },
  methods: {
    handleEdit() {
      // 1.显示输入框
      this.isShowEdit = true
      // 2.让 输入框 显示焦点
      // console.log(this.$refs.inp); undefined
      //this.$refs.inp.focus() 由于vue是异步更新的，所以这行代码运行完并不会执行。所以报错
      // $nextTick等dom更新完，立刻执行准备的函数体
      this.$nextTick(()=>{
        this.$refs.inp.focus()
      })

        // settimeout也可以，但是并不精准，会出现等的太久或者等的时间太短未等到dom渲染出来就执行了 log(undefined)
      // setTimeout(() => {
      //   this.$refs.inp.focus()
      // }, 1000)
    }
  }
}
</script>

<style></style>