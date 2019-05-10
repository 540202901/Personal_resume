import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



//挂载到app实例上后，想调取store值：this.$store.state.变量名 调取。
//只要在将store绑定到vm实例上，即可在任何组件上使用他的值。
var store = new Vuex.Store({
  state:{
    //这里可以当成组件中的data  this.$store.state.变量名
    user:{},
    titleList:{
      'Home':'<span>欢迎来到</span>我的简历',
      'Resume':'的简历',
      'ProjectWall':'<span>项目画廊</span>',
      'Contact':'<span>联系方式</span>',
    },//mian-title的标题
    title:'<span>欢迎来到</span>我的简历',
    flagStore:{
      isMain:false,
      navIn:false,
      mainHeaderIn:false,
      mainViewIn:false,
      footerIn:false,
      isMainAnimateOut:false,
      titleMove:false,//标题动画
      contactCarFlag:false,//是否显示联系卡
      projectCardIsShow:false,//是否显示项目展示卡
    },
    comName:'Home',//切换组件名称变量，默认home

    projectCardMsg:{
      title:'',//title名字
      img:'',//图片地址
      word:'',//项目文字
    },//项目卡信息

  },
  mutations:{
    //3,commit中传参：this.$store.commit('方法名',参数)//只能传1个参数
    setUser: function(state,user){
      state.user = user
    },//获取并设置User数据
    isMain:function(state){
      state.flagStore.isMain = true//设置进入主页
      setTimeout(()=>{
        state.flagStore.navIn=true//每个页面逐步进入
        state.flagStore.isMainAnimateOut=true//每个页面逐步进入
        state.flagStore.footerIn=true//每个页面逐步进入
      },500)
      setTimeout(()=>{state.flagStore.mainHeaderIn=true},1000)//每个页面逐步进入
      setTimeout(()=>{  state.flagStore.mainViewIn=true },1500)//每个页面逐步进入

    },//进入主页
    changeContactCarFlag:function (state,msg) {
      //如果是点击的关闭卡片，直接关闭，不执行后续代码
      if (msg.off) {
        return state.flagStore.contactCarFlag = false
      }
      //如果点击的是联系方式组件按钮：
      if (state.user.contactCarName === msg.name) {
        //如果上次点击联系名称的和这次相同，打开或关闭卡片
        state.flagStore.contactCarFlag = !state.flagStore.contactCarFlag
      }else if(state.flagStore.contactCarFlag === false){//如果窗口是关闭的
        state.user.contactCarName = msg.name
        state.flagStore.contactCarFlag = true
      }else{
        //如果上次点击联系名称的和这次不同，保存联系名称，并打开卡片
        state.flagStore.contactCarFlag = false
        setTimeout(()=>{state.user.contactCarName = msg.name},600)
        setTimeout(()=>{state.flagStore.contactCarFlag = true},700)
      }
    },//打开联系卡
    changeMainView:function(state,name){
      if (state.comName !== name){//如果点击的不是已经被点过的
        state.comName = name//修改组件名字，会影响到Title组件中的标题
        state.flagStore.titleMove = true//title动画开启
        setTimeout(()=>{
          if (state.comName === 'Resume') {
            state.title = `<span>${state.user.name}</span>` + state.titleList[state.comName]
            return
          }
          state.title = state.titleList[state.comName]
        },500)//.5秒后设置标题的值
        setTimeout(()=>{state.flagStore.titleMove = false},1000)//1秒后title动画关闭
      }
    },//切换main-view视图 组件的方法
    setProjectPhotoFlag(state,project){
      let i = project.i
      let isShow = project.isShow
      state.user.projectList[i].isShow = isShow //设置当前图片是否继续显示
    },//设置某项目图片是否显示

    closeProjectCard(state){
      state.flagStore.projectCardIsShow = false//关闭项目展示卡
    },//关闭项目展示卡
    openProjectCard(state,msg){
      state.flagStore.projectCardIsShow = true//打开项目展示卡
      state.projectCardMsg = msg //设置项目展示卡信息
    },//打开项目展示卡

  },


  getters:{
    getUserName:function (state) {
      var nameArr = state.user.name.split("")
      return nameArr.join(' ')
    }

    //这里类似管道修饰符，修饰数据用的 this.$store.getters.optCount
    //  optCount:function(state){
    //     return '最新count值是:' + state.count
    //   }
  }
})





export default store

