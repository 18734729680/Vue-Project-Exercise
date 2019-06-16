<template>
    <div class="list-nav">
        <p>
            <b v-for="(item) in listnav" 
            :key="item.id" 
            :class="{'active':tag===item.type}"
            @click="addActive(item.type,item.id)"
            >{{item.title}}</b>
        </p>
        <span><i class="iconfont icon-gongzuo"></i><i class="iconfont icon-shouqi-01" @click="sort" :class="sortAct?'actives':''"></i></span>
    </div>
</template>
<script>
export default {
    props:['tag'],
    components:{

    },
    data(){
        return {
            listnav:[
                {
                    title:"加班",
                    type:"overtime",
                    id:0
                },
                {
                    title:"休假",
                    type:"vacation",
                    id:1
                }
            ],
            ind:0,
            sortAct:false
        }
    },
    computed:{

    },
    methods:{
        addActive(type,id){
            this.ind=id
            this.$emit("changetype",type)
        },
        sort(){
            this.$router.push("/sort")
            this.sortAct=true
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
    .list-nav{
        width: 100%;
        height: rem(88px);
        display: flex;
        @include justify;
        @include align;
        position: relative;
        p{
            width: rem(150px);
            height: rem(30px);
            border: 1px solid #0b6242;
            border-radius: rem(15px);
            overflow: hidden;
            display: flex;
            @include justify;
            @include align;
            b{
                flex: 1;
                height: rem(30px);
                text-align: center;
                line-height: rem(30px);
                &.active{
                    background: #0b6242;
                    color: #fff;
                }
            }
        }
        span{
            position: absolute;
            right: 0%;
            top: 38%;
            i{
                font-size: 40px;
                color: #ccc;
                font-weight: bold;
                margin-right: 45px;
            }
        }
        .actives{
            color: #0b6242;
        }
    }
</style>