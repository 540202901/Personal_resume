//==============================引入主要模块和框架、包等
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' //BootstrapVue
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//=============================引入样式类库
import './lib/css/Animate.css'
//=============================引入自定义内容
import './css/Main.scss'



//=============================Vue主页面
import app from './app.vue'






//创建Vue实例
var vm = new Vue({
  el:'#app',
  render:c => c(app),

});