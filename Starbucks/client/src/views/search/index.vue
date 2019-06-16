<template>
    <div class="wrap">
        <header class="header">
            <input type="text" placeholder="搜索">
            <i class="iconfont icon-fangdajing"></i>
            <p @click="$router.back()">取消</p>
        </header>
        <main class="main">
            <div class="main-cont">
                <p>搜索指定内容</p>
                <ul>
                    <li><span>加班类型</span><span>发起时间</span><span>加班日期</span></li>
                    <li><span>申请单号</span><span>加班时数</span></li>
                </ul>
            </div>
        </main>
    </div>
</template>
<script>
import {mapActions} from "vuex"
import "../../static/icon/iconfont.css"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapActions("user",['getUser'])
    },
    created(){
        this.getUser()
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
            width: 100%;
            height: rem(44px);
            line-height: rem(44px);
            display: flex;
            p{
                flex: 2;
                text-align: center;;
                color: #0b6242;
            }
            input{
                flex: 8;
                border: 0;
                background: #eee;
                margin: 15px;
                padding-left: 50px;
                position: relative;
            }
            .iconfont{
                position: absolute;
                left:30px;
                top: 0;
            }
        }
        .main{
            flex: 1;
            .main-cont{
                width: 80%;
                height: rem(150px);
                margin: rem(50px) auto;
                p{
                    text-align: center;
                    color: #666;
                    font-size: rem(13px);
                    line-height: rem(44px);
                }
                ul{
                    padding: 0 20px;
                    li{
                        display: flex;
                        line-height: rem(44px);
                        span{
                            flex: 1;
                            text-align: center;
                            color: #0b6242
                        }
                    }
                }
            }
        }
    }
</style>