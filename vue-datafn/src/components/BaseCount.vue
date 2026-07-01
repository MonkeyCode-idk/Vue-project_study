<template>
<div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
</div>
</template>

<script>
export default {
    // data必须是一个函数 -> 保证每个数组实例，维护独立的一个数据对象
    data() {
        console.log('data函数执行了');

        return {
            count:999
        }
    }
    // data: {
    //     count:999
    // }
}
</script>

<style scoped>
    button{
        width: 30px;
        height: 30px;
    }
    span{
        margin: 0 10px;
    }
    div{
        margin: 10px;
    }
</style>