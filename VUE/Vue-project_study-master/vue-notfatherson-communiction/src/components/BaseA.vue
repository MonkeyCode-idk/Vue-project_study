<template>
    <div>
        <p>我是A组件(接收方)</p>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
    created() {
        // 2.在A组件(接收方),进行监听Bus的事件(订阅消息)
        Bus.$on('sendMsg', (msg) => {
           const target1  = msg.find(item=> item.ename === this.myName)
            console.log(target1)
           clearTimeout(this.timer)
           this.timer = setTimeout(()=>{
             this.msg = target1 ? `${target1.name} + (我是0.5秒后出现的)`: `没有匹配到数据`
           },500)
        })
    },
    data() {
        return {
            msg:'',
           myName:'YangMi',
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