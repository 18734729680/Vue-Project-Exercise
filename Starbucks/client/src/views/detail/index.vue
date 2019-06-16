<template>
    <div class="wrap">
        <Header :title="type==='overtime'?'办公室加班申请':'办公室调休申请'">
            <span></span>
        </Header>
        <section class="section">
            <b><img :src="detailList.avatar" alt=""/></b>
            <ul>
                <li>申请人姓名<span class="one">{{detailList.nickname}}<i>&gt;</i></span></li>
                <li>直接主管<span>{{detailList.auditor?"":"秦毅超"}}</span></li>
                <li>申请单号<span>{{id}}</span></li>
                <li>发起时间<span v-if="detailList.startTime">{{detailList.startTime.slice(0,10)}}</span></li>
            </ul>
        </section>
        <main class="main">
            <div class="main-title">
                <p>申请信息</p>
                <ul>
                    <li>加班日期<span v-if="detailList.startTime">{{detailList.startTime.slice(0,10)}}</span> </li>
                    <li>加班类型<span>{{getweek}}</span></li>
                    <li>加班起始时间<span v-if="detailList.create_at">{{detailList.create_at.slice(11,16)}}</span></li>
                    <li>加班截止时间<span v-if="detailList.endTime">{{detailList.endTime.slice(11,16)}}</span></li>
                    <li>共计时数<span>{{gettime}}</span></li>
                </ul>
            </div>
            <div class="main-reason">
                <p>加班事由</p>
                <b>{{detailList.describes}}</b>
            </div>
            <div class="main-affix">
                <p>附件<span>共{{detailList.annex?detailList.annex.length:0}}个 ></span></p>
                <dl>
                    <dt v-for="(item,index) in detailList.annex" :key="index">
                        <img :src="'http://localhost:3000'+item" alt="">
                    </dt>
                </dl>
            </div>
        </main>
        <footer class="footer">
            <button @click="$router.push(`/history/${id}`)">审批历史</button>
            <button @click="$router.go(-1)">退回</button>
            <button>同意</button>
        </footer>
    </div>
</template>
<script>
import {mapActions} from "vuex"
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
            detailList:[]
        }
    },
    computed:{
        gettime(){
            let start=new Date(this.detailList.startTime)
            let end=new Date(this.detailList.endTime)*1
            return ((end-start)/1000/3600/24).toFixed(1)
        },
        getweek(){
            let end=new Date(this.detailList.endTime)
            return end.getDay()===(6||7)?"工作日加班":"双休日加班"
        }
    },
    methods:{
        ...mapActions("user",['getUser']),
        getdetailList(){
            api[this.type+'Detail']({
                applicationNumber:this.id
            }).then(res=>{
                this.detailList=res.data.data
            })
        }
    },
    created(){
        this.getUser()
        this.getdetailList()
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
        background: #eee;
        flex-direction: column;
    }
    .header{
        height: rem(44px);
        background: #0b6242;
        color: #fff;
    }
    .section{
        width: 100%;
        height: rem(150px);
        background: #0b6242;
        border-radius: 0 0 rem(20px) rem(20px);
        b{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            left: 5%;
            top: 10%;
        }
        ul{
            margin-left: 25%;
            li{
                line-height: rem(25px);
                color: #eee;
                span{
                    margin-left: 100px;
                    font-weight: bold;
                    &.one{
                        margin-left: 76px;
                        i{
                            float: right;
                            margin-right: 5%;
                        }
                    }
                }
            }
        }
    }
    .main{
        flex: 1;
        overflow: auto;
        width: 90%;
        margin:-10% 0 0 5%;
        .main-title,.main-reason,.main-affix{
            width: 100%;
            height: rem(200px);
            background: #fff;
            border-radius: rem(10px) rem(10px) rem(10px) rem(10px);
            margin-bottom: 20px;
            p{
                height: rem(44px);
                line-height: rem(44px);
                padding-left: rem(20px);
                font-weight: bold;
                border-bottom: 1px solid #eee;
                span{
                    float: right;
                    padding-right: rem(20px);
                    color: #ccc;
                }
            }
            b{
                height: rem(44px);
                line-height: rem(44px); 
                padding-left: rem(20px);
            }
            ul{
                padding: 0 rem(20px);
                li{
                    height: rem(30px);
                    line-height: rem(30px);
                    color: #ccc;
                    span{
                        float: right;
                    }
                }
            }
        }
        .main-reason{
            height: rem(150px);
        }
        .main-affix{
            height: rem(120px);
            margin-bottom: 0;
            dl{
                padding-left: rem(20px);
                margin-top: 25px;
                dt{
                    float: left;
                    margin-right: rem(20px);
                    img{
                        width: 80px;
                        height: 100px;
                    }
                }
            }
        }
    }
    .footer{
        height: rem(44px);
        display: flex;
        button{
            flex: 1;
            font-size: rem(12px);
            outline: none;
            border: 0;
            &:first-child{
                background: #fff;
                color: #666;
            }
            &:nth-child(2){
                background: #999;
                color: #fff
            }
            &:last-child{
                background: #0b6242;
                color: #fff
            }
        }
    }
</style>