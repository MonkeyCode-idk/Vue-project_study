<template>
    <div>
        我是GrandSon组件
        {{ color }}-{{ userInfo.name }}-{{ userInfo.age }}
    </div>
</template>

<script>
export default{
    name:'GrandSon',
    inject:['color','userInfo']
}
</script>

<style scoped>
div{
    width: 200px;
    height: 100px;
    border: 2px solid black;
    margin: auto;
}
</style>