<template>
<div class="form">
    账号: <input type="text" v-model="account">
    <br>
    密码: <input type="password" name="" id="" v-model="password">
</div>
</template>

<script>
export default{
    name:'BaseForm',
    data(){
        return{
            account:'',
            password:''
        }
    },
    methods:{
        // 方法1：收集表单数据，返回一个对象
        getValues(){
            return{
                account:this.account,
                password:this.password
            }
        },
        // 方法2：重置表单
        resetValues(){
            this.account = ''
            this.password = ''
        }
    }
}
</script>

<style scoped>
.form{
    width: 300px;
    text-align: center;
    border: 2px solid black;
    padding: 20px;
}
.form input{
    margin: 10px 0;
   
}
</style>