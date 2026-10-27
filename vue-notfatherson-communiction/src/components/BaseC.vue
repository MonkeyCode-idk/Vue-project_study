<template>
    <div>
        <p>我是C组件(接收方)</p>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
    created() {
        // 2.在C组件(接收方),进行监听Bus的事件(订阅消息)
        Bus.$on('sendMsg', (msg) => {
            // console.log(msg)
            this.msg = msg
        })
    },
    data() {
        return {
            msg:''
        }
    }
}
</script>

<style scoped>
div{
    width: 200px;
    height: 200px;
    border: 2px solid black;
      margin-bottom: 20px;
}
</style>