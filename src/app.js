
// 导入vue
import Vue from "vue";

// 导入组件
import app from  "./app.vue";

// 导入插件
import "./config/plugins"


// 过滤器
import "./config/filter";





// 路由模块
import router from "./config/router"
// 实例化vue
// 挂载路由
let vm=new Vue({
    el:'#app',
    // render:function(createElement){
    //     return createElement(app)
    // },
    render:(e)=>e(app),
    router,
    
    created(){
    //    
       // 添加一个请求拦截器
    this.$http.interceptors.request.use( (config)=> {
    // 在请求发送之前，先做点什么
        this.$indicator.open('加载中...');
        return config;
    },  (error)=> {
    // 处理请求错误,先做点什么
        this.$indicator.close();
        return Promise.reject(error);
    });
       
    // 添加一个响应拦截器
    this.$http.interceptors.response.use( (response)=> {
        // 如何处理响应数据
        this.$indicator.close();
        return response;
    },  (error)=> {
        //如何处理响应错误
        this.$indicator.close();
        return Promise.reject(error);
    });
        // 
    }   
})