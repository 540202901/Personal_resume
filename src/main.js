//==============================引入主要模块和框架、包等
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
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



var store = new Vuex.Store({
  state:{//这里就是data
    connectList:[
      { id:1, href:'#', icon:'qq',title:'QQ'},
      { id:2, href:'#', icon:'weixin ',title:'微信'},
      { id:3, href:'https://github.com/540202901/', icon:'github',title:'GitHub'},
      // { id:4, href:'#', icon:'fort-awesome',title:'fort-awesome '},
      { id:4, href:'#', icon:'bold',title:'个人博客'},
    ],//外部链接
    comName:'Home',//切换组件名称变量，默认home
    titleMove:false,//标题动画
    titleList:{
      'Home':'<span>欢迎来到</span>我的简历',
      'Resume':'<span>王浩然</span>的简历',
      'ProjectWall':'<span>项目画廊</span>',
      'Contact':'<span>联系方式</span>',
    },
    title:'<span>欢迎来到</span>我的简历',

  },
  mutations:{//这里类似methods
    chengeMain:function(state,name){
      if (state.comName !== name){//如果点击的不是已经被点过的
        state.comName = name//修改组件名字，会影响到Title组件中的标题
        state.titleMove = true//title动画开启
        setTimeout(()=>{state.title = state.titleList[state.comName]},500)//.5秒后设置标题的值
        setTimeout(()=>{state.titleMove = false},1000)//1秒后title动画关闭
      }
    }//切换组件的方法
  },getters:{
    //使用方法：
    //this.$store.getters.***

  }
})


//创建Vue实例
var vm = new Vue({
  el:'#app',
  render:c => c(app),
  store:store,//挂载全局变量
});