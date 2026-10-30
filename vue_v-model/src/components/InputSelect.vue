<template>
    <div>
        输入框:<input type="text" :value="value" @change="handleChange">
    </div>
</template>

<script>
export default{
    name:'InputSelect',
    props:{
        value:String,
    },
    methods:{
        handleChange(e){
            this.$emit('input',e.target.value)
        }
    }
}
</script>

<style>
</style>