<template>
<div class="base-count">
    <button @click="handleSub">-</button>
    <span>{{ count }}</span>
    <button @click="handleAdd">+</button>
</div>
</template>

<script>
export default {
    // 1.自己的数据，随便改 （谁的数据谁负责）
//     data() {
//         return {
//         count:999
//     }
    //    } 

    // 2. prop传过来的数据（外部的数据）
    // 不能直接改

    // 单项数据流：父组件的prop更新,会单向向下流动，影响到子组件。
    props: {
        count:Number
    },
    methods: {
        handleAdd() {
            // 子传父 this.$emit(事件名,参数)
            this.$emit('changeCount',this.count + 1 )
        },
        handleSub() {
             this.$emit('changeCount',this.count - 1 )
        }
    }
}
</script>

<style>
</style>