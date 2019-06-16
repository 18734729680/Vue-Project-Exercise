import request from "../utils/js/request"

export default{
    // 登陆验证
    isLogin:(data)=>request.get("/api/user/info",data),
    // 获取列表数据
    getList:(data)=>request.get("/api/task/list",data),
    // 登陆接口
    userLogin:(data)=>request.post("/api/login",data),
    // 获取加班详情数据
    overtimeDetail:(data)=>request.get("/api/apply/overtime",data),
    // 获取调休详情数据
    vacationDetail:(data)=>request.get("/api/apply/vacation",data),
    // 获取文件数据
    getFile:(file)=>request.post("/api/upload",file),
    // 提交加班申请
    submitovertime:(data)=>request.post("/api/apply/overtime",data),
    // 提交休假申请
    submitvacation:(data)=>request.post("/api/apply/vacation",data),
    // 审批接口
    historySubmit:(data)=>request.get("/api/task/history",data)
}