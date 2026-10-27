<template>  
<ul>
    <li class="base-brand-item" v-for="(item,index) in list" :key="index">
      <a href="#">
        <img :src="item.url" alt="" />
      </a>
    </li>
  </ul>
    
</template>
<script>
export default{
  data(){
    return{
      list:[
        { url: require('@/assets/images/hot1.png') },
        { url: require('@/assets/images/hot2.png') },
        { url: require('@/assets/images/hot3.png') },
        { url: require('@/assets/images/hot4.png') },
        { url: require('@/assets/images/hot5.png') },
      ]
    }
  }
}
</script>
<style>
.base-brand-item {
  width: 244px;
  height: 306px;
}
</style>