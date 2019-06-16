import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import ("../views/home/index")
const Login = () => import ("../views/login/index")
const Search = () => import ("../views/search/index")
const Detail = () => import ("../views/detail/index")
const Edit = () => import ("../views/edit/index")
const History = () => import ("../views/history/index")
const Sort = () => import ("../views/sort/index")

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta:{
                title:"加班/休假"
            }
        },
        {
            path:"/login",
            name:"login",
            component:Login,
            meta:{
                title:"登陆"
            }
        },
        {
            path:"/search",
            name:"search",
            component:Search,
            meta:{
                title:"搜索"
            }
        },
        {
            path:"/detail/:type/:id",
            name:"detail",
            component:Detail,
            props:true,
            meta:{
                title:"详情"
            }
        },
        {
            path:"/edit/:type",
            name:"edit",
            component:Edit,
            props:true,
            meta:{
                title:"编辑"
            }
        },
        {
            path:"/history/:id",
            name:"history",
            component:History,
            props:true,
            meta:{
                title:"审批"
            }
        },
        {
            path:"/sort",
            name:"sort",
            component:Sort,
            props:true,
            meta:{
                title:"排序"
            }
        }
    ]
})

export default router

router.beforeEach((to, from, next) => {
    document.title=to.meta.title
    next()
})