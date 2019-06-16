<template>
    <div class="wrap">
        <Header :title="type==='overtime'?'办公室加班申请表':'办公室调休申请表'">
            <span></span>
        </Header>
        <section class="section">
            <b><img :src="list.avatar" alt=""/></b>
            <ul>
                <li>申请人姓名<span class="one">{{list.nickname}}<i>&gt;</i></span></li>
                <li>直接主管<span>秦毅超</span></li>
            </ul>
        </section>
        <main class="main">
            <div class="main-title">
                <p>申请信息</p>
                <ul>
                    <li>{{title}}日期
                        <span>
                            <el-date-picker
                            v-model="date"
                            type="date"
                            value-format="yyyy-MM-dd"
                            :placeholder="new Date().toLocaleDateString()"
                            :default-value="new Date().toLocaleDateString()"
                            />
                        </span>
                    </li>
                    <li>{{title}}类型
                        <span>
                            <select v-model="newType">
                                <option value="-1">请选择</option>
                                <option v-for="item in this[type+'Type']" :key="item.id">{{item.title}}</option>
                            </select>
                        </span>
                    </li>
                    <li>{{title}}起始时间
                        <span>
                            <el-time-picker
                            v-model="startTime"
                            format="HH:mm"
                            placeholder="请选择时间"
                            />
                        </span>
                    </li>
                    <li>{{title}}截止时间
                        <span>
                            <el-time-picker
                            v-model="endTime"
                            format="HH:mm"
                            placeholder="请选择时间"
                            @change="timeDiff"
                            />
                        </span>
                    </li>
                    <li>共计时数
                        <span>
                            {{time}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="main-reason">
                <p>{{title}}事由</p>
                <textarea 
                cols="35" 
                rows="6" 
                placeholder="最多可输入200个字符"
                v-model="text"
                > 
                </textarea>
            </div>
            <div class="main-affix">
                <p><button>+</button>上传附件</p><input type="file" @change="addFile($event)" ref="file"/>
                <dl>
                    <dt v-for="(item,index) in imgurl" :key="index">
                        <img :src="'http://localhost:3000'+item" alt="">
                    </dt>
                </dl>
            </div>
        </main>
        <footer class="footer">
            <button>取消</button>
            <button @click="submit">提交</button>
        </footer>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
import Files from "../../utils/js/files"
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
            date:'',
            startTime:"",
            endTime:"",
            time:"",
            text:"",
            imgurl:[],
            newType:"",
            detailList:[],
            overtimeType:[
                {
                    title:"双休日加班",
                    id:1,
                },
                {
                    title:"节假日加班",
                    id:2
                },
                {
                    title:"工作日加班",
                    id:3
                }
            ],
            vacationType:[
                {
                    title:"年假",
                    id:1
                },
                {
                    title:"调休",
                    id:2
                }
            ]
        }
    },
    computed:{
        ...mapState('user',['list']),
        title(){
            return this.type==="overtime"?"加班":"调休"
        }
    },
    methods:{
        ...mapActions("user",['getUser']),
        timeDiff(){
            let newTime=((new Date(this.startTime.endTime).getTime()-new Date(this.startTime.startTime).getTime())/1000/3600).toFixed(2)
            if(newTime<0){
                this.$alert("请合理操作")
                return
            }
            this.startTime.time=newTime
        },
        addFile(e){
            let myFiles=this.$refs.file.files[0]
            let ArrFiles=new Files(myFiles,{
                type:['jpg','png','gif','svg','jpeg'],
                size:2
            })
            if(ArrFiles.isType() && ArrFiles.isSize()){
                const formdata=new FormData()
                formdata.append('file',myFiles)
                api.getFile(formdata).then(res=>{
                    this.imgurl.push(res.data.url)
                })
            }else{
                this.$alert("请正确选择文件格式")
            }
        },
        submit(){
            let newOptions={
                annex:this.imgurl,
                describe:this.text,
                endTime:this.endTime,
                startTime:this.startTime,
                type:this.newType
            };
            api['submit'+this.type](newOptions).then(res=>{
                let {msg}=res.data
                if(msg==="提交成功"){
                    this.$router.back()
                }else{
                    this.$alert("请完善信息")
                }
            })
        }
    },
    created(){
        this.getUser()
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
            margin-top: 5%;
            li{
                font-size: rem(14px);
                line-height: rem(30px);
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
            textarea{
                padding-left: rem(20px);
                margin-left: rem(20px);
                margin-top: 5px;
                border: 1px solid #eee;
                font-size: rem(14px);
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
                    select{
                        width: 220px;
                        height: 40px;
                        font-size: 16px;
                        padding: 0 10px;
                        background: #fff;
                        border: 1px solid #eee;
                        outline: none;
                        color: #ccc;
                    }
                }
            }
        }
        .main-reason{
            height: rem(150px);
        }
        .main-affix{
            height:rem(120px);
            margin-bottom: 0;
            position: relative;
            background: #fff;
            p{
                button{
                    width: 40px;
                    height: 40px;
                    background: yellow;
                    border-radius: 50%;
                    border: 0;
                    outline: none;
                    float: left;
                    text-align: center;
                    font-size: rem(12px);
                    margin:20px 15px 0 0;
                    color: #ccc;
                    border-bottom: 1px solid #ccc;
                }
            }
            input{
                position: absolute;
                left: 5%;
                top: 20%;
                opacity: 0;
            }
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
        button{
            height: rem(44px);
            width: 50%;
            font-size: rem(12px);
            outline: none;
            border: 0;
            background: #0b6242;
            color: #ccc;
            float: left;
            &:first-child{
                width: 30%;
                background: #fff;
                color: green;
            }
            &:last-child{
                width: 70%;
            }
        }
    }
</style>