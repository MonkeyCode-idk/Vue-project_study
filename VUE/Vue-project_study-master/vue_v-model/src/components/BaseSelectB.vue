<template>
    <div>
        <select :value="value" @change="handleChange">
              <option value="101">北京</option>
              <option value="102">上海</option>
              <option value="103">广州</option>
              <option value="104">深圳</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        value:String
    },
    methods: {
        handleChange(e) {
            this.$emit('input',e.target.value)  
        }
    }
}
</script>

<style>
</style>