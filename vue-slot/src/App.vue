<template>
  <div>
    <!-- 默认插槽 -->
    <!-- 2.在使用组件时，组件标签内填入内容 -->
    <MyDialog> 你确认要删除吗</MyDialog>
    <!-- <MyDialog> 你确认要退出吗</MyDialog>
    <MyDialog>
      <p>你要退出吗</p>
      <p>你要退出吗</p>
      <p>你要退出吗</p>
    </MyDialog> -->

    <!-- 具名插槽 -->
    <NameSlot>
      <!-- 我们需要通过template标签包裹我们需要分发的结构,包成一个整体 -->
      <template v-slot:head>
        <div>我是大标题</div>
      </template>
      <template v-slot:content>
        <div>我是内容部分</div>
      </template>
      <template #footer>
        <button>确认</button>
        <button>取消</button>
      </template>
    </NameSlot>

    <!-- 作用域插槽：通过 v-slot="scope" 接收组件暴露的数据 -->
    <AreaSlot :data="list">
      <!-- 3.通过template #插槽名='变量名' 接收 -->
      <!-- 子组件 <slot name="xxx"> 有名字，父组件就用 #xxx 填；
        没写 name，就是默认插槽，父组件用 #default 填。 -->
      <template #default="obj">
        {{ obj }}
        <button class="btn btn-del" @click="del(obj.row.id)">删除</button>
      </template>
    </AreaSlot>
    <AreaSlot :data="list2">
      <template #default="{ row }">
        <button class="btn btn-edit" @click="show(row)">查看</button>
      </template>

    </AreaSlot>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue';
import NameSlot from './components/NameSlot.vue';
import AreaSlot from './components/AreaSlot.vue';

export default {
  components: {
    MyDialog,
    NameSlot,
    AreaSlot
  },
  data() {
    return {
      list: [
        { id: 1, name: '张三', age: 18 },
        { id: 2, name: '李四', age: 19 },
        { id: 3, name: '王五', age: 20 },
        { id: 4, name: '赵六', age: 18 },
      ],
      list2: [
        { id: 1, name: '勒克莱尔', age: 18 },
        { id: 2, name: '艾布拉姆斯', age: 19 },
        { id: 3, name: '挑战者', age: 20 },
        { id: 4, name: '突破', age: 18 },
      ]
    }
  },
  methods: {
    del(id) {
      console.log(id); //拿到对应的id
      this.list = this.list.filter(item => item.id !== id)
    },
    show(row) {
      console.log(row);
      alert(`姓名:${row.name};年纪:${row.age}`)
    }
  }
}
</script>

<style>
body {
  background: rgba(0, 0, 0, 0.5);
}

.del-btn {
  padding: 6px 14px;
  border: none;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
  cursor: pointer;
}

.del-btn:hover {
  background: #f78989;
}
</style>