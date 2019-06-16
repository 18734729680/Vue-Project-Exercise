<template>
    <div class="wrap">
        <header class="header">
            <i class="iconfont icon-cuo"></i>
        </header>
        <nav class="nav">
            欢迎来到星享俱乐部
        </nav>
        <main class="main">
            <input type="text" placeholder="请输入手机号" v-model="phoVal">
            <input type="password" placeholder="请输入验证码" v-model="pwdVal">
            <button @click="bindLogin()">登陆</button>
        </main>
    </div>
</template>
<script>
import "../../static/icon/iconfont.css"
import api from "../../api/index"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            phoVal:"",
            pwdVal:"",
            phoRest:/^1[3579]\d{9}$/
        }
    },
    computed:{

    },
    methods:{
        bindLogin(){
            let phoVal=this.phoVal
            let pwdVal=this.pwdVal
            let phoRest=this.phoRest
            if(phoVal.trim() !== "" && phoRest.test(phoVal)){
                api.userLogin({
                    phone:phoVal,
                    password:pwdVal
                }).then(res=>{
                    let {token}=res.data
                    window.localStorage.setItem("token",token)
                    this.$router.back()
                }).catch(error=>{
                    this.$alert(error.response.data.message)
                })
            }else{
                this.$alert("用户名或密码输入有误,请重新输入")
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../static/scss/common.scss";
    @import "../../static/scss/_minix.scss";
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            width: 98%;
            height: rem(44px);
            padding-left: 2%;
            line-height: rem(44px);
            font-size: rem(20px)
        }
        .nav{
            width: 98%;
            height: rem(70px);
            padding-left: 2%;
            line-height: rem(70px);
            font-size: rem(25px);
            font-weight: bold;
            box-shadow:0px 10px 10px #ccc;
            margin-bottom: 20px;
        }
        .main{
            flex: 1;
            display: flex;
            flex-direction: column;
            input{
                width: 90%;
                height: rem(55px);
                line-height: rem(55px);
                border-bottom: 1px solid #ccc;
                margin-left: 5%;
                font-size: rem(13px)
            }
            button{
                width: 90%;
                height: rem(40px);
                line-height: rem(40px);
                margin-top: rem(40px);
                margin-left: 5%;
                font-size: rem(13px);
                border-radius: rem(20px);
                border: 0;
                color:#fff;
                outline: none;
            }
        }
    }
</style>