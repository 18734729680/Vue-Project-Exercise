import api from "../../api/index"
export default{
    namespaced: true,
    state: {
        list:[]
    },
    getters: {
        
    },
    mutations: {
        getNewdata(state,data){
            state.list=data
        }
    },
    actions: {
        getUser({commit}){
            api.isLogin({
                token:window.localStorage.getItem("token")
            }).then(res=>{
                commit("getNewdata",res.data.data)
            })
        }
    }
}