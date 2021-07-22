在main.js中引用
import Axios from 'axios'
import qs from 'qs'
//跨域post实例；用到qs组件来避开ajax信使请求；并兼容安卓；
Vue.prototype.$qs = qs;
// 给对象一个原型挂载属性（很重要）
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://139.9.157.89:8088/doc.html#';
