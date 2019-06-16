<template>
    <div class="wrap">
        <Header>
            <span><i class="iconfont icon-tian"></i><i class="iconfont icon-fangdajing" @click="Tosearch"></i></span>
        </Header>
        <tabTask @chanetask="tabTask"></tabTask>
        <tabType @changetype="tabType" :tag="defaultTask.type"></tabType>
        <main class="main">
            <taskItem v-for="(item,index) in taskList" :key="index" :item="item"></taskItem>
            <button class="btntask" @click="maskopen=!maskopen">+ 发起任务</button>
            <Masks v-if="maskopen" @changemask="mashopen"/>
        </main>
    </div>
</template>
<script>
import api from "../../api/index"
import tabTask from "./components/tabTask"
import tabType from "./components/tabType"
import taskItem from "./components/taskItem"
import Masks from "../../components/mask"
import {mapActions} from "vuex"
export default {
    name:"home",
    props:{

    },
    components:{
        tabTask,
        tabType,
        taskItem,
        Masks
    },
    data(){
        return {
            defaultTask:{
                page:1,
                pageSize:10,
                create_at:0,
                type:"overtime",
                status:0
            },
            taskList:[],
            maskopen:false
        }
    },
    computed:{

    },
    methods:{
        ...mapActions('user',['getUser']),
        Tosearch(){
            this.$router.push("/search")
        },
        getTask(){
            api.getList(this.defaultTask).then(res=>{
                this.taskList=res.data.data
            })
        },
        tabTask(status){
            this.defaultTask.status=status
            this.defaultTask.type="overtime"
            this.getTask()
        },
        tabType(type){
            this.defaultTask.type=type
            this.getTask()
        },
        mashopen(flag){
            this.maskopen=flag
        }
    },
    created(){
        this.getUser();
        this.getTask();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../static/scss/common.scss";
    @import "../../static/scss/_minix.scss";
    .wrap{
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: rem(44px);
        }
        .main{
            flex: 1;
            overflow:auto;
            .btntask{
                width: rem(100px);
                height: rem(40px);
                border-radius: rem(20px);
                position: fixed;
                bottom: 4%;
                right: 5%;
                background: #0b6242;
                color: #fff;
                border: 0;
                outline: none;
                font-size: 25px
            }
        }
    }
</style>