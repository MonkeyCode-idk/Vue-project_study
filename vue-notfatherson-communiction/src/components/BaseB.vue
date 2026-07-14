<template>
    <div>
        <p>我是B组件(发布方)</p>
        <button @click="clickSend">发送通知</button>
    </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
    methods: {
        clickSend() {
            // 3.B组件(发送方)触发事件的方式传递参数（发布消息）
            Bus.$emit('sendMsg','金晨')
        }
    }
}
</script>

<style scoped>
div{
    width: 200px;
    height: 200px;
    border: 2px solid black;
  
}
</style>