<template>
  <div id="app">
    <button class="logout"
    @click="isShow = true"
    >退出按钮</button>

    <!-- :visible.sync => :visible + @update:visible-->
   <BaseDialog
   :visible.sync="isShow"
   ></BaseDialog> 
  </div>
</template>

<!-- 完整数据流 -->
 <!-- 1. 父组件 isShow = true
        ↓ :visible="isShow"
2. 子组件 props.visible = true
        ↓ v-show="visible"
3. 弹窗显示
        ↓ 用户点关闭
4. 子组件 close() → this.$emit('update:visible', false)
        ↓ 事件名 update:visible 被父组件的 .sync 监听器接住
5. 父组件执行 isShow = false     ← 父组件自己改自己的数据
        ↓ :visible="isShow" 重新传下去
6. 子组件 props.visible = false
        ↓ v-show="visible"
7. 弹窗隐藏 -->
<script>
import BaseDialog from './components/BaseDialog.vue';
export default {
  data() {
    return {
    isShow:false
  }
 },
  components: {
  BaseDialog
  }
}
</script>

<style>

</style>
