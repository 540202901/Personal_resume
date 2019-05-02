import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



//挂载到app实例上后，想调取store值：this.$store.state.变量名 调取。
//只要在将store绑定到vm实例上，即可在任何组件上使用他的值。
var store = new Vuex.Store({
  state:{
    //这里可以当成组件中的data  this.$store.state.变量名
    personName:'王 浩 然',//简历主角名字
    rotateSkillArr:["设计师","学习者","开发者"],//不断更新的文字内容
    flagStore:{
      isMain:false,
      navIn:false,
      mainHeaderIn:false,
      mainViewIn:false,
      footerIn:false,
      isMainAnimateOut:false,
    },
    connectList:[
      {
        id:1,title:'QQ', icon:'qq',clickFlag:'return false;', href:'javascript:void(0)',
        openCard:true,
      },
      {
        id:2,title:'微信', icon:'weixin ',clickFlag:'return false;', href:'javascript:void(0)',
        openCard:true,
      },
      {
        id:3,title:'GitHub', icon:'github',clickFlag:'return true;', href:'https://github.com/540202901/',
        openCard:false,
      },
      {
        id:4,title:'个人博客',icon:'bold', clickFlag:'return true;', href:'#',
        openCard:false,
      },
    ],//外部链接
    comName:'Home',//切换组件名称变量，默认home
    titleMove:false,//标题动画
    titleList:{
      'Home':'<span>欢迎来到</span>我的简历',
      'Resume':'<span>王浩然</span>的简历',
      'ProjectWall':'<span>项目画廊</span>',
      'Contact':'<span>联系方式</span>',
    },//mian-title的标题
    title:'<span>欢迎来到</span>我的简历',
    contactCarFlag:false,//是否显示联系卡
    contactCarName:'QQ',//联系卡的名称
  },
  mutations:{
    isMain:function(state){
      state.flagStore.isMain = true
      setTimeout(()=>{
        state.flagStore.navIn=true
        state.flagStore.isMainAnimateOut=true
        state.flagStore.footerIn=true
      },500)
      setTimeout(()=>{state.flagStore.mainHeaderIn=true},1000)
      setTimeout(()=>{  state.flagStore.mainViewIn=true },1500)

    },//进入主页
    changeContactCarFlag:function (state,msg) {
      //如果是点击的关闭卡片，直接关闭，不执行后续代码
      if (msg.off) return state.contactCarFlag = false

      //如果点击的是联系方式组件按钮：
      if (state.contactCarName === msg.name) {
        //如果上次点击联系名称的和这次相同，打开或关闭卡片
        state.contactCarFlag = !state.contactCarFlag
      }else{
        //如果上次点击联系名称的和这次不同，保存联系名称，并打开卡片
        state.contactCarFlag = false
        setTimeout(()=>{state.contactCarName = msg.name},900)
        setTimeout(()=>{state.contactCarFlag = true},1000)
      }


    },//打开联系卡
    changeMainView:function(state,name){
      if (state.comName !== name){//如果点击的不是已经被点过的
        state.comName = name//修改组件名字，会影响到Title组件中的标题
        state.titleMove = true//title动画开启
        setTimeout(()=>{state.title = state.titleList[state.comName]},500)//.5秒后设置标题的值
        setTimeout(()=>{state.titleMove = false},1000)//1秒后title动画关闭
      }
    },//切换main-view视图 组件的方法
  },


  getters:{
    //这里类似管道修饰符，修饰数据用的 this.$store.getters.optCount
    //  optCount:function(state){
    //     return '最新count值是:' + state.count
    //   }
  }
})





export default store

