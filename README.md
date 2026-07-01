      ### 📁 vue-demo1 - 模块化组件开发

**主要内容**：学习 Vue 组件化开发思想，将页面拆分为独立、可复用的组件模块。

**核心实践**：
- 在 `src/components/` 目录下创建 `.vue` 组件文件
- 实现父组件与子组件的数据传递
- 通过 `import/export` 进行组件的导入导出
- 组件间的通信方式：`props` 传参、自定义事件

      ### 📁 vue-scoped - 解决组件的样式冲突
  **主要内容**：
  1. 默认的style样式，会作用于全局 ->  全局样式
  2. 加上scoped属性的style样式，只会作用于当前组件 -> 局部样式

组件应该有着自己独立的样式，推荐加上scoped(原理)
-------------------------------------------
scoped原理：
1.给当前组件模板的所有元素，都会被添加上一个自定义属性
    data-v-hash值  
    data-v-5f6a9d56     区分开不同的组件
2.css选择器后面，被自动处理，添加上了属性选择器
div[data-v-5f6a9d56]

      ### 📁 vue-datafn - 数据方法与响应式
**主要内容**：data必须是一个函数 -> 保证每个数组实例，维护独立的一个数据对象

      ### 📁 vue- communiction 组件通信
       <img width="1140" height="537" alt="image" src="https://github.com/user-attachments/assets/ebc52b5e-40b5-4b17-9a76-e88b2ac0e480" />

