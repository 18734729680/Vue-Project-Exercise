<template>
    <div class="list-item">
        <dl @click="gotoDetail(item.list_type,item.applicationNumber)">
            <dt>
                <span>{{item.applicationNumber}}</span>
                <p><span>申请人</span>{{item.nickname}}</p>
                <p><span>加班日期</span>{{item.create_at.slice(0,item.create_at.indexOf("T"))}}</p>
            </dt>
            <dd>
                <span>{{item.aauditor?"":"待审批"}}</span>
                <p><span>加班类型</span>{{getWeek}}</p>
                <p><span>加班时长</span>{{getTime}}</p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:['item'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        getTime(){
            let start=new Date(this.item.startTime)
            let end=new Date(this.item.endTime)*1
            return ((end-start)/1000/3600/24).toFixed(1)
        },
        getWeek(){
            let end=new Date(this.item.endTime)
            return end.getDay()===(6||7)?"工作日加班":"双休日加班"
        }
    },
    methods:{
        gotoDetail(type,id){
            this.$router.push("/detail"+'/'+type+'/'+id)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../../static/scss/_minix.scss";
    @import "../../../static/scss/common.scss";
    .list-item{
        width: 100%;
        height: rem(110px);
        border-bottom: 15px solid #eee;
        dl{
            display: flex;
            font-size: 26px;
            dt{
                flex: 5;
                margin: 30px 0 0 20px;
                span{
                    color: #ccc;
                }
                p{
                    margin: 20px 0;
                    line-height: 40px;
                    >span{
                        margin-right: 30px;
                    }
                }
            }
            dd{
                flex:5;
                margin: 30px 0 0 150px;
                span{
                    color: #ccc;
                    margin-left: 65%;
                }
                p{
                    margin: 20px 0;
                    line-height: 40px;
                    >span{
                        margin-right: 30px;
                        margin-left: 0;
                    }
                }
            }
        }
    }
</style>