import Vue from "vue";

// 导入mui
import "../../static/css/mui.css"
import "../../static/css/style.css"



// 引入mint模块
import Mint from 'mint-ui';
// 注册mini
Vue.use(Mint);
import 'mint-ui/lib/style.css';


//  导入axios
import axios from 'axios';
//  指定默认URl基地址，
 axios.defaults.baseURL="http://127.0.0.1:8899/api/";
 Vue.prototype.$http = axios;