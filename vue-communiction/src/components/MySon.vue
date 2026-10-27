<template>
    <div style="border: 3px solid #000; margin:20px;">
        <!-- 3.渲染使用 -->
        我是Son组件 {{ title }}
        <button @click="changeFn">修改title</button>
    </div>
</template>

<script>
export default {
    // 2.通过props进行接收
    props: ['title'],
    methods: {
        changeFn() {
            //(1). 通过$emit,向父组件发送消息通知
            this.$emit('changeTitle','金晨')
        }
    }
}
</script>

<style>
</style>