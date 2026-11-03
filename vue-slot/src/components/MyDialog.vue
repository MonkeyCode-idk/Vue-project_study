<template>
    <div class="dialog-mask">
        <div class="dialog">
            <!-- 标题 -->
            <div class="dialog-header">
                <slot name="title">
                    友情提示
                    <span>X</span>
                </slot>
            </div>

            <!-- 内容 -->
            <div class="dialog-body">
                <!-- 1.在需要定制的位置，使用slot占位 -->
                <!-- 如果外部使用组件时，不传数据，则默认以slot标签内的数据为主 -->
                <slot>你确认要退出本系统么?</slot>
            </div>

            <!-- 底部 -->
            <div class="dialog-footer">
                <slot name="footer">
                    <button class="btn btn-cancel">取消</button>
                    <button class="btn btn-confirm">确定</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyDialog',
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

.btn {
    padding: 6px 16px;
    margin-left: 8px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
}

.btn:hover {
    background-color: paleturquoise;
}

.btn-cancel {
    color: #606266;
}

.btn-confirm {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
}
</style>
