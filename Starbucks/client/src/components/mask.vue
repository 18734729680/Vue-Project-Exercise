<template>
    <div class="mask" @click="changeopen">
        <div class="mask-cont">
            <dl v-for="(item,index) in taskList" :key="index" @click="gotoType(item.type)">
                <dt :class="`iconfont ${item.icon}`"></dt>
                <dd>{{item.title}}</dd>
            </dl>
        </div>
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
            taskList:[
                {
                    title:"加班",
                    icon:"icon-xuanzhong-01",
                    type:"overtime"
                },
                {
                    title:"休假",
                    icon:"icon-weixuanzhong-01",
                    type:"vacation"
                }
            ],
            maskopen:true
        }
    },
    computed:{

    },
    methods:{
        changeopen(){
            this.maskopen=!this.maskopen
            this.$emit("changemask",this.maskopen)
        },
        gotoType(type){
            this.$router.push(`/edit/${type}`)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../static/scss/_minix.scss";
    @import "../static/scss/common.scss";
    .mask{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        position: fixed;
        left: 0;
        top: 0;
        .mask-cont{
            width: 100%;
            height: rem(150px);
            background: #fff;
            position: absolute;
            left: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            z-index: 999;
            dl{
                flex: 1;
                display: flex;
                flex-direction: column;
                text-align: center;
                dt{
                    font-size: 70px;
                    margin-bottom: 20px;
                }
                dd{
                    flex: 1;
                    font-size: 30px
                }
            }
        }
    }
</style>