<template>
    <div class="SonA">
        我是SonA组件
        <GrandSon></GrandSon>
    </div>
</template>
 
<script>
import GrandSon from './GrandSon.vue';
export default{
    name:'SonA',
    components:{
        GrandSon,
    }
}
</script>

<style scoped>
.SonA{
    width: 300px;
    height: 150px;
    border: 2px solid black;
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>