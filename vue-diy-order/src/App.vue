<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus type="text" ref="autofocus">
    <p>-------------</p>
    <h1 v-color='color1'>指令的值1测试</h1>
    <h1 v-color='color2'>指令的值2测试</h1>

    <!-- v-color的值可以写字面量，常量和表达式 -->
    <!-- 外层双引号，内层单引号 → 字符串 'pink' -->
    <h1 v-color="'pink'">指令的值3测试</h1>
    <h1 v-color="1 + 2 > 0 ? 'yellow' : 'black'">指令的值4测试</h1>

    <button @click="changeColor">更改颜色</button>

  </div>
</template>

<script>
export default {
  // mounted(){
  //   this.$refs.autofocus.focus()
  // }
  data() {
    return {
      color1: 'red',
      color2: 'green'
    }
  },
  methods: {
    changeColor() {
      this.color1 = 'blue'
    }
  },
  // 2.局部注册指令
  directives: {
    // 指令名: 指令的配置项
    focus: {
      inserted(el) {
        el.focus()
      }
    },

    // 1.inserted 提供的是元素被添加到页面中时的逻辑
    color: {
      inserted(el, binding) {
        // console.log(el);
        console.log(el, binding);
        console.log('调用了一次', el.textContent, binding.value)
        // el.style.color = 'red'
        // binding.value 就是指令的值
        el.style.color = binding.value
      },
      // 2.update 指令的值修改的时候触发，提供值变化后，dom更新的逻辑
      update(el, binding) {
        console.log('指令的值修改了');

        el.style.color = binding.value
      }
    }
  }
}
</script>

<style></style>