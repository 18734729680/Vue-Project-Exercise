<template>
    <div class="mask" v-if="open">
        {{text}}
    </div>
</template>
<script>
export default {
    props:{
        text:String
    },
    components:{

    },
    data(){
        return {
            open:false
        }
    },
    computed:{

    },
    methods:{
        
    },
    created(){

    },
    mounted(){
        this.timer=setTimeout(()=>{
            this.open=false
        },3000)
    },
    destroyed(){
        clearTimeout(this.timer)
    }
}
</script>
<style scoped lang="scss">
    @import "@/static/scss/_minix.scss";
    @import "@/static/scss/common.scss";
    .mask{
        background: rgba(0,0,0,.6);
        padding: rem(20px);
        color: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 20px;
    }
</style>