import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
//-----------------------------------Vue-resource  ajax请求
import VueResource from 'vue-resource'//安装ajax请求组件
Vue.use(VueResource)//安装ajax请求组件
// var root = 'http://127.0.0.1:8000/'
var root = 'http://47.106.98.203/'
Vue.http.options.root = root//ajax设置根目录
Vue.http.options.emulateJSON = true//全局设置post表单数据格式组织形式：

export default Vue