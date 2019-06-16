<template>
    <div class="wrap">
        <header class="header">
            排序
        </header>
        <main class="main">
            <div class="main-cont">
                <div class="main-list" v-for="(item,index) in sortList" :key="index">
                    <p>{{item.type}}</p>
                    <ul>
                        <li>{{item.sortT}}</li><li>{{item.sortB}}</li>
                    </ul>
                </div>
            </div>
        </main>
        <footer class="footer">
            <p @click="$router.back()">返回</p>
            <p>确认</p>
        </footer>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            sortList:[
                {
                    type:"按发起时间排序",
                    sortT:"按时间顺序",
                    sortB:"按时间倒序"
                },
                {
                    type:"按加班日期排序",
                    sortT:"按日期顺序",
                    sortB:"按日期倒序"
                },
                {
                    type:"按加班时数排序",
                    sortT:"按时数顺序",
                    sortB:"按时数倒序"
                }
            ],
            ind:0
        }
    },
    computed:{

    },
    methods:{
        
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
            width: 100%;
            height: rem(44px);
            text-align: center;
            line-height: rem(44px);
            font-size: rem(13px)
        }
        .main{
            flex: 1;
            .main-cont{
                width: 80%;
                height: 100%;
                margin-left: 10%;
                .main-list{
                    width: 100%;
                    height: rem(100px);
                    background: #fff;
                    p{
                        line-height: rem(44px);
                        font-size: rem(13px);
                        color: #999;
                    }
                    ul{
                        display: flex;
                        li{
                            flex: 1;
                            background: #ccc;
                            margin-right: 10px;
                            text-align: center;
                            padding: 10px 0;
                            border-radius: 10px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .footer{
            width: 100%;
            height: rem(44px);
            text-align: center;
            line-height: rem(44px);
            p{
                float: left;
                width: 40%;
                text-align: center;
                line-height: rem(44px);
                background: #ccc;
                color: #0b6242;
                &:last-child{
                    width: 60%;
                    background: #0b6242;
                    color: #ccc;
                }
            }
        }
        .active{
            background: #0b6242
        }
    }
</style>