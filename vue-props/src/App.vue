<template>
  <div id="app">
   <UserInfo 
   :username="username"
   :age="age"
   :isSingle="isSingle"
   :car="car"
   :hobby="hobby"
   ></UserInfo>

   <BaseProgress :w="width"></BaseProgress>
   <BaseCount 
   @changeCount="handleChange"
   :count="count"></BaseCount>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue';  
import BaseProgress from './components/BaseProgress.vue';
import BaseCount from './components/BaseCount.vue';
export default {
 data(){
    return {
      username: "小帅",
      age: 28,
      isSingle: true,
      car: {
      brand:'宝马',
      },
      hobby: ['篮球', '足球', '羽毛球'],
      width: 100,
    count:666
  }
  },
  components: {
    UserInfo,
    BaseProgress,
    BaseCount,
  },
  methods:{
    handleChange(newCount) {
      // console.log(newCount);
    this.count = newCount
    
  }
 }
}
</script>

<style>

</style>
