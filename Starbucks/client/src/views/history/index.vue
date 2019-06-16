<template>
    <div class="wrap">
        <Header :title="title">
            <span></span>
        </Header>
        <section class="section">
            <div>
                <ul>
                    <li>申请人&nbsp;&nbsp;&nbsp;&nbsp;<span>刘大雨</span></li>
                    <li>员工职位<span>p2</span></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>部门&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>星巴克</span></li>
                    <li>员工编号<span>45235325</span></li>
                </ul>
            </div>
        </section>
        <main class="main">
            <div class="main-cont" v-for="(item,index) in historyList" :key="index">
                <dl>
                    <dt><img :src="item.avatar" alt=""></dt>
                    <dd>
                        <p>{{item.nickname}}</p>
                        <p>{{item.phone}}</p>
                        <p>审批意见:{{item.remark}}</p>
                    </dd>
                </dl>
            </div>
        </main>
    </div>
</template>
<script>
import api from "../../api/index"
export default {
    props:{
        type:String,
        id:String
    },
    components:{

    },
    data(){
        return {
            title:"审批历史",
            historyList:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        api.historySubmit({
            applicationNumber:this.id
        }).then(res=>{
            if(res.data.data){
                this.historyList=res.data.data
            }else{
                this.$alert("该员工没有提交审批内容,请点击左上角返回")
            }
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "@/static/scss/_minix.scss";
    @import "@/static/scss/common.scss";
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            height: rem(120px);
            background: #0b6242;
            color: #fff;
            border-radius: 0 0 rem(20px) rem(20px);
        }
        .section{
            width: 90%;
            height: rem(80px);
            background: #fff;
            margin:-12% 0 0 5%;
            border-radius: rem(10px) rem(10px) rem(10px) rem(10px);
            display: flex;
            div{
                flex: 1;
                ul{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 0 10px;
                    li{
                        flex: 1;
                        line-height: 80px;
                        color: #ccc;
                        span{
                            color: #000;
                            margin-left: 30px;
                        }
                    }
                }
            }
        }
        .main{
            flex: 1;
            margin: 0 rem(20px);
            margin-top: rem(20px);
            overflow: auto;
            .main-cont{
                width: 100%;
                height: rem(120px);
                background: #fff;
                border-radius: rem(10px) rem(10px) rem(10px) rem(10px);
                margin-bottom: rem(20px);
                dl{
                    display: flex;
                    dt{
                        width: rem(100px);
                        height: rem(100px);
                        margin-top: rem(10px);
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    dd{
                        flex: 1;
                        margin:rem(20px) rem(20px);
                        p{
                            line-height: rem(30px);
                            color: #ccc;
                            &:last-child{
                                background: #eee;
                                color: #666;
                            }
                        }
                    }
                }
            }
        }
    }
</style>