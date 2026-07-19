# vue_v-model

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 1.表单类基础组件封装思路
```
1.父传子:父组件动态传递prop数据，拆解v-model,绑定数据
2.子传父:监听输入,子传父传值给父组件修改
本质:实现了实现 子组件 和 父组件 数据 的双向绑定
```

### 2.v-model 简化代码的核心步骤
```
1.子组件中: props通过 value 接收，事件触发input
2.父组件中: v-model给组件直接绑定数据
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
