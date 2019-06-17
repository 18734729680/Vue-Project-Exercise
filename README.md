# 项目名称：Starbucks
# 项目介绍


这是一个仿星巴克内部加班休假，基于vue实现的单页面应用练习


## 项目知识点

vue + vuex + vue-router + webpack + ES6 + scss + element-ui


## 项目运行


```
git clone https://github.com/zhf0314/Starbucks.git  

cd client
npm run dev

cd server
npm start
```


# 项目功能
- [x] 搜索 -- 简单排版
- [x] 排序 -- 简单排版
- [x] 登陆 -- 完成
- [x] 注册 -- 未完成
- [x] 待处理、已发起、已处理切换 -- 完成
- [x] 加班、休假切换 -- 完成
- [x] 发起加班、休假任务 -- 完成
- [x] 审批加班、休假任务 -- 完成


# 项目布局

```
.
├── client                                          // 项目
|   ├── build                                       // webpack配置文件
|   ├── config                                      // 项目打包路径
|   ├── src                                         // 源码目录
|   |   ├── api                                     // 接口文件
|   |   |   ├──index.js                             // 管理接口
|   │   ├── components                              // 公共组件
|   │   │   ├── alert                               // 弹窗
|   │   │   │   ├── index.vue                       // 弹出框组件
|   │   │   ├── header.vue                          // 头部公共组件
│   │   │   └── mask.vue                            // 蒙层组件
│   │   ├── directives                              // 公用指令
│   │   ├── plugins                                 // 引用的插件
│   │   ├── router                                  // 路由
│   │   │   ├── index.js                            // 路由表配置
│   │   ├── static                                  // 静态文件
│   │   │   ├── icon                                // 引用的icon图标
│   │   │   └── scss                                // 引用的公用scss
│   │   ├── store                                   // vuex的状态管理
│   │   │   ├── user                                // User验证状态
│   |   |   |   ├──index.js                         // 公共User验证状态，
│   │   │   ├── index.js                            // 引用vuex，创建store
│   │   └── utils                                   // 公用方法的封装
│   │   |   ├── js                                  
|   |   |   |   ├── file.js                         // 上传图片格式、大小的封装
|   │   |   |   ├── fiexble.js                      // 字体大小封装
|   │   |   |   ├── request.js                      // axios二次封装
|   │   ├── views                                   // 视图
|   |   |   ├── detail                              
|   |   |   |   ├── index.vue                       // 列表项详情
|   |   |   ├── edit                              
|   |   |   |   ├── index.vue                       // 加班调休申请
|   |   |   ├── history                              
|   |   |   |   ├── index.vue                       // 审批历史
|   |   |   ├── home                                
|   |   |   |   ├── components                      // 首页类型组件
|   |   |   |   |   ├── tabTask.vue                 // 待处理、已发起、已处理组件
|   |   |   |   |   ├── tabTask.vue                 // 加班、休假组件             
|   |   |   |   |   ├── tabTask.vue                 // 每一项组件             
|   |   |   |   ├── index.vue                       // 首页页面 
|   |   |   ├── login                              
|   |   |   |   ├── index.vue                       // 登陆
|   |   |   ├── history                              
|   |   |   |   ├── index.vue                       // 搜索
|   |   |   ├── history                              
|   |   |   |   ├── index.vue                       // 排序
|   │   ├── App.vue                                 // 输出组件
|   │   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── server                                          // 接口
.

```

