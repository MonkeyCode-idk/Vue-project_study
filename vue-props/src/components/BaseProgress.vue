<template>
<div class="base-progress">
    <div 
    class="inner"
    :style="{width:w + '%'}">
    <span>{{ w }}%</span>
    </div>
</div>
</template>

<script>
export default {
  // props:['w']
  // 对父亲传入过来的数值进行判断
  // props: {
  //     w:Number // String Boolean ... 
  //   }
  // 2.完整的写法（类型 非空，默认，自定义校验）
  props: {
    w: {
      type: Number,
      // required:true // 非空判断
      default: 30 ,//默认值,
      //  自定义校验
    validator(value) {
      // 如果返回false 没有通过校验
      // 返回true 通过校验
      console.log(value);
      if (value >= 0 && value <= 100) {
        return true
      } else {
        console.error('传入的prop w 必须是0 - 100 的数字')
        return false
      }
    }
    }
  }
}
</script>

<style scoped>
.base-progress {
    margin-top: 20px;
  width: 100%;
  height: 26px;
  background-color: black;
  border-radius: 13px;
  /* overflow: hidden; */
}

.inner {
    position: relative;
  height: 100%;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.4s ease;
  min-width: 0;
}

.inner span {
    position: absolute;
    top: 25px;
    right: 0;
  font-size: 13px;
  color: black;
  font-weight: 600;
  white-space: nowrap;
}
</style>