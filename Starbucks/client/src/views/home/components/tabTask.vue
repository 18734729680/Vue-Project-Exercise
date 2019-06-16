<template>
    <nav class="nav">
        <dl v-for="(item) in dlList" :key="item.status" :class="{'active':item.status===index}" @click="bindType(item.status)">
            <dt :class="`iconfont ${item.icon}`"></dt>
            <dd>{{item.title}}</dd>
        </dl>
    </nav>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            dlList:[
                {
                    title:"待处理",
                    icon:"icon-shizhong1",
                    status:0
                },
                {
                    title:"已发起",
                    icon:"icon-07",
                    status:1
                },
                {
                    title:"已处理",
                    icon:"icon-dui",
                    status:2
                }
            ],
            index:0
        }
    },
    computed:{

    },
    methods:{
        bindType(status){
            this.index=status
            this.$emit("chanetask",status)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../../static/scss/common.scss";
    @import "../../../static/scss/_minix.scss";
    .nav{
        width: 100%;
        height: rem(88px);
        box-shadow: 0px 10px 15px #ccc;
        display: flex;
        @include justify;
        @include align;
        dl{
            flex: 1;
            display: flex;
            flex-direction: column;
            @include justify;
            @include align;
            color: #ccc;
            &.active{
                color: #0b6242;
            }
            dt{
                font-size: rem(25px);
                margin-bottom: 10px;
            }
            dd{
                flex: 1;
            }
            &.router-link-exact-active{
                color:#0b6242;
            }
        }
    }
</style>