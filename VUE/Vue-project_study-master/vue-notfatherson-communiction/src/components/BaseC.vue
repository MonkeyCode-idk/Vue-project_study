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
            const target = msg.find(item=> item.ename === this.myName)
            console.log(target)
            clearTimeout(this.timer)
            this.timer = setTimeout(()=>{
            this.msg = target ? `${target.name} + (我是1秒后出现的)`: `没有匹配到数据`
            },1000)
           
        })
    },
    data() {
        return {
            msg:'',
         myName:'JinChen',
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