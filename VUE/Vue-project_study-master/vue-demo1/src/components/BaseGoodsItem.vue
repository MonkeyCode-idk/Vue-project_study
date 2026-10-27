<template>
  <ul>
   <li class="base-goods-item" v-for="(item,index) in list" :key="index">
            <a href="#">
              <div class="pic"><img :src="item.url" alt="" /></div>
              <div class="txt">
                <h4>KN95级莫兰迪色防护口罩</h4>
                <p>¥ <span>79</span></p>
              </div>
            </a>
        </li>
  </ul>
   
</template>
<script>
export default {
  data(){
    return  {
      list:[
        { url: require('@/assets/images/goods1.png') },
        { url: require('@/assets/images/goods2.png') },
        { url: require('@/assets/images/goods3.png') },
        { url: require('@/assets/images/goods4.png') },
      ]
    }
  }
    
}
</script>
<style>
.base-goods-item {
  width: 304px;
  height: 404px;
  background-color: #EEF9F4;
}

.base-goods-item {
  display: block;
}

.base-goods-item .pic {
  width: 304px;
  height: 304px;
}

.base-goods-item .txt {
  text-align: center;
}

.base-goods-item h4 {
  margin-top: 17px;
  margin-bottom: 8px;
  font-size: 20px;
}

.base-goods-item p {
  font-size: 18px;
  color: #AA2113;
}

.base-goods-item p span {
  font-size: 22px;
} </style>