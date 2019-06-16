<template>
    <header class="header">
        <p><i class="iconfont icon-arrow-left" @click="Goback"></i></p>
        <b>{{title?title:$route.meta.title}}</b>
        <slot></slot>
    </header>
</template>
<script>
import "../static/icon/iconfont.css"
export default {
    props:{
        title:{
            default:""
        }
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
        Goback(){
            this.$router.go(-1)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../static/scss/common.scss";
    @import "../static/scss/_minix.scss";
    .header{
        width: 100%;
        height: rem(44px);
        display: flex;
        justify-content: space-between;
        line-height: rem(44px);
        p{
            font-size: 30px;
            margin-left: 20px;
        }
        b{
            font-size: 30px;
            font-weight: 600;
        }
        span{
            font-size: 40px;
            i{
                margin-right: 20px;
            }
        }
    }
</style>