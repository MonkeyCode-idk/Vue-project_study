<template>
    <div class="table-wrap">
        <table class="student-table">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <!-- 作用域插槽：把每一行学生数据 row 暴露给父组件 -->
                <tr v-for="(item, index) in data" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>
                        <!-- 1.给slot标签，添加属性的方式传值 -->
                        <!-- 当前的:row='item'是遍历的每一项 -->
                        <slot :row="item" msg="测试文本"></slot>
                        <!-- 2.将所有的属性，添加到一个对象中 -->
                        <!-- 
                        {
                        row:{id:2,name:'孙大明',age:19},
                        msg;'测试文本'

                        }
                         -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'AreaSlot',
    props: {
        data: Array
    }
}
</script>

<style scoped>
.table-wrap {
    padding: 20px;
    display: flex;
    justify-content: center;
}

.student-table {
    width: 560px;
    border-collapse: collapse;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    text-align: center;
    font-size: 14px;
}

.student-table thead th {
    background: #409eff;
    color: #fff;
    font-weight: 600;
    padding: 14px 12px;
    letter-spacing: 1px;
}

.student-table tbody td {
    padding: 12px;
    border-bottom: 1px solid #ebeef5;
    color: #606266;
}

.student-table tbody tr:nth-child(even) {
    background: #fafafa;
}

.student-table tbody tr:hover {
    background: #ecf5ff;
}

.btn {
    padding: 6px 14px;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    margin: 0 4px;
}

.btn-edit {
    background: #409eff;
}

.btn-edit:hover {
    background: #66b1ff;
}

.btn-del {
    background: #f56c6c;
}

.btn-del:hover {
    background: #f78989;
}
</style>
