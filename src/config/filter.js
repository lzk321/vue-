import Vue from "vue";

// 定义过滤器
Vue.filter('fmt',function(value){
    var val=new Date(value);
    var years=val.getFullYear();
    var month=val.getMonth();
    var date=val.getDate();
    return years+'年'+month+'月'+date+'日'
})