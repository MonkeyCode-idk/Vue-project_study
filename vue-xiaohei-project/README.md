# vue-xiaohei-project

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

## 核心步骤

### 1.拆分基础组件
```
新建组件 -> 拆分存放结构 -> 导入注册使用
```

### 2.渲染待办任务
```
提供数据（公共父组件） -> 父传子传递 list -> v-for 渲染
```

### 3.添加任务
```
收集数据 v-model -> 监听事件 -> 子传父传递任务 -> 父组件 unshift
```

### 4.删除任务
```
监听删除携带id -> 子传父传递id -> 父组件 filter 删除
```

### 5.底部合计 和 清空功能
```
底部合计: 父传子传递list -> 合计显示
清空功能:监听点击 -> 子传父通知父组件 —>父组件清空
```

### 6.持久化存储
```
watch监视数据变化,持久化到本地,优先渲染本地数据，其次默认数据
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

