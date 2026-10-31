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
    <h1>Loading指令封装</h1>


    <div class="main">
      <div class="box" v-loading="isLoading">
        <ul>
          <li v-for="item in list" :key="item.id" class="news">
            <div class="left">
              <div class="title">{{ item.title }}</div>
              <div class="info">
                <span>{{ item.source }}</span>
                <span>{{ item.time }}</span>
              </div>
            </div>

            <div class="right">
              <img :src="item.img" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="box2" v-loading="isLoading2"></div>
    </div>
  </div>
</template>
<!-- 数据流 -->
<!-- v-color="color1"
   ↓ Vue 求值表达式 color1
data.color1 = 'red'
   ↓ 放进 binding
binding = { value: 'red', name: 'color', expression: 'color1', ... } -->

<script>
import axios from 'axios'
export default {
  // mounted(){
  //   this.$refs.autofocus.focus()
  // }
  data() {
    return {
      color1: 'red',
      color2: 'green',
      list: [],
      isLoading: true,
      isLoading2: true
    }
  },
  async created() {
    // 1.发送请求获取资源
    const res = await axios.get('api/news')
    // console.log(res);
    // this.list = res.data.data
    setTimeout(() => {
      this.list = res.data.data
      this.isLoading = false
    }, 2000)
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
    },
    loading: {
      inserted(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      },
      update(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      }
    }
  }
}
</script>

<style>
.loading::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url('./assets/basecar.gif') no-repeat center;
}

.box2 {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  position: relative;
}



.box {
  width: 800px;
  min-height: 500px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
}

.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}

.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}

.news .left .title {
  font-size: 20px;
}

.news .left .info {
  color: #999999;
}

.news .left .info span {
  margin-right: 20px;
}

.news .right {
  width: 160px;
  height: 120px;
}

.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>