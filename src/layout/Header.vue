<template>
    <div class="headers">
        <div class="logo">
            <div class="img">
                <img src="../assets/header_logo.png" >
            </div>
            <h1>全国政务数据开放中心</h1>
            <div class="user">
                <el-button round class="login">登录</el-button>
                <el-button round  class="register">注册</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.headers {
    width: 100%;
    height: 100%;
    background-color:#4698ff;
    .logo {
        display: flex;
        align-items:center;
        .img {
            width: 35px;
            height: 35px;
            margin-left: 10px;
            img {
                width:100%;
                height:auto;
            }
        }
        h1 {
            width: 14%;
            font-family: Roboto,"Helvetica Neue",sans-serif;
            color: rgb(250,250,250);
            margin: 0px 0px;
        }
        .user {
            position:absolute;
            right: 10px;
            .login{
                border-radius: 17px;
                background: #4698ff;
                border: 1px solid white;
                text-align: center;
                color: white;
                font-size: 14px;
                font-weight: bold;
            }
            .register{
                border-radius: 17px;
                background: #FFF;
                border: 1px solid white;
                text-align: center;
                color: #2287ef;
                font-size: 14px;
                font-weight: bold;

            }
            .el-button{
                padding: 8px 20px;
            }
        }

    }
    
}

</style>

<script>
export default {
    name: 'Header'
}
</script>

