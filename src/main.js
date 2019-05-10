
//=============================引入样式类库
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './lib/css/Animate.css';
// import './lib/font-awesome-4.7.0/css/font-awesome.min.css';//引入奥森图标
// import './font/font.css';//引入自定义字体：需要字蛛缩小
import './css/app.scss'
// //=============================Vue主页面
import Vue from './js/app.js'
import app from './app.vue'
import store from './js/store.js'




var vm = new Vue({
  el:'#app',
  render:c => c(app),
  store,
})
