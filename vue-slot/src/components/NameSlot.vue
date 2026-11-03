<template>
    <div class="dialog-mask">
        <div class="dialog">
            <!-- 标题 -->
            <div class="dialog-header">
                <!-- 一旦插槽起了名字，就是具名插槽，只支持定向分发 -->
                <slot name="head"></slot>
            </div>

            <!-- 内容 -->
            <div class="dialog-body">
                <slot name="content"></slot>
            </div>

            <!-- 底部 -->
            <div class="dialog-footer">
                <slot name="footer">

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NameSlot',
}
</script>

<style scoped>
.dialog-mask {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.dialog {
    width: 320px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.dialog-header {
    /* background-color: pink; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
}

.dialog-header span {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
}

.dialog-header span:hover {
    color: wheat;
    cursor: pointer;
}

.dialog-body {
    padding: 24px 16px;
    font-size: 14px;
    color: #333;
}

.dialog-footer {
    padding: 12px 16px;
    text-align: right;
    border-top: 1px solid #eee;
}

button {
    padding: 6px 16px;
    margin-left: 8px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
}

button:hover {
    background-color: paleturquoise;
}

.dialog-footer button:first-child {
    color: #606266;
}

.dialog-footer button:last-child {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
}
</style>
