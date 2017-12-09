import Vue from 'vue';

// 导入路由
import VueRouter from "vue-router";
// 注册路由
Vue.use(VueRouter);

// 导入底部导航子组件
import home from "../component/home/home.vue";
import search from "../component/search/search.vue";
import member from "../component/member/member.vue";
import shopcar from "../component/shopcar/shopcar.vue";

// 九宫格子组件
import news from "../component/home/news/news.vue";
import buy from "../component/home/buy/buy.vue";
import contact from "../component/home/contact/contact.vue";
import feedback from "../component/home/feedback/feedback.vue";
import share from "../component/home/share/share.vue";
import video from "../component/home/video/video.vue";
// 详情页
import newsDetails from "../component/home/news/newsDetails.vue";
// 图片详情
import shareInfo from "../component/home/share/shareInfo.vue";

// 定义路由对象
let router=new VueRouter({
    routes:[
        // 底部导航
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:"/search",component:search},
        {path:"/member",component:member},
        {path:"/shopcar",component:shopcar},

        // 九宫格
        {path:'/news',component:news},
        {path:'/buy',component:buy},
        {path:'/contact',component:contact},
        {path:'/share',component:share},
        {path:'/video',component:video},
        {path:'/feedback',component:feedback},

        // 详情页
        {name:'newsDetail',path:'/news/:id',component:newsDetails,props: true},

        // 图片详情
        {name:'imgInfo',path:'/shareInfo/:id',component:shareInfo,props:true}
    ],
    linkActiveClass :'mui-active'
}) 

export default router;