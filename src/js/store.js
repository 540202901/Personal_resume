import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



//挂载到app实例上后，想调取store值：this.$store.state.变量名 调取。
//只要在将store绑定到vm实例上，即可在任何组件上使用他的值。
var store = new Vuex.Store({
  state:{
    //这里可以当成组件中的data  this.$store.state.变量名
    user:{
      name:'王浩然',//简历主角名字
      rotateSkillArr:["设计师","学习者","开发者"],//不断更新的文字内容
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
      contactCarName:'QQ',//联系卡的名称
      connectCardList:{
        'QQ':{
          title:'我的QQ：540202901',
          img:'http://pqikp3898.bkt.clouddn.com/blog/resume/practiceCarQQ.JPG',
        },
        '微信':{
          title:'我的微信：15114223688',
          img:'http://pqikp3898.bkt.clouddn.com/blog/resume/practiceCarWeChat.JPG',
        },
      },
      homeMessage:{
        title:'Web开发者 & Web设计师',
        brief:`作为一名网页/界面设计师，我有一年的开发经验。<br>我喜欢干净、优雅的设计风格。我在现代网站的CSS和HTML制作方面有很多经验。<br>`,
        msgItems:[
          {title:'姓名',msg:'王浩然'},
          {title:'地址',msg:'浙江省杭州市萧山区'},
          {title:'e-mail',msg:'540202901@qq.com'},
          {title:'电话',msg:'15114223688'},
        ],
      },
      skill:{
        chiefSkillsList:[
          {title:'HTML',value:65},
          {title:'CSS',value:55},
          {title:'JavaScript',value:60},
        ],
        otherSkillsList:[
          {circleText:'Vue',percentage:.65,},
          {circleText:'Node.js',percentage:.45,},
          {circleText:'jQuery',percentage:.55,},
        ],//其他技能
      },//技能能力
      educationAccordion:{
        title:'教育背景',
        list:[
          // {id:'accordion-1',title:'计算机工程研究生',textTitle:'123',text:'123'},
          {id:'accordion-1',title:'福建广播电视大学',textTitle:'(2016 - 2019)',
            text:`
              <span><span class="title">学校名称：</span>福建广播电视大学</span>
              <span><span class="title">就读时间：</span>2016.09 - 2019.07</span>
              <span><span class="title">所学专业：</span>会计</span>
              <span><span class="title">学历学位：</span>大专</span>
            `},
          {id:'accordion-2',title:'辽宁省朝阳市职业中专',textTitle:'(2006 - 2009)',
            text:`
              <span><span class="title">学校名称：</span>辽宁省朝阳市职业中专</span>
              <span><span class="title">就读时间：</span>2006.08 - 2009.06</span>
              <span><span class="title">所学专业：</span>计算机信息技术</span>
              <span><span class="title">学历学位：</span>中专</span>
            `},
        ]
      },//教育背景手风琴
      workCardList:[
        {name:'.net 实习开发员',describe:'美亦软件',date:'2018.09 - 2019.01',
          workText:`
            工作内容:<br>
            根据客户要求负责系统项目的架构设计、性能优化、代码编写等工作； <br>
            针对管家婆ERP进销存软件进行二次开发开发接口等。<br><br>
            相关技术:<br>
            SQL Sever、C#

          `},
        {name:'策划人员',describe:'福建金海创门业',date:'2017.09 - 2018.04',
          workText:`
            工作内容:<br>
            对公司接单系统进行优化，简化繁杂的流程，将能够自动化的部分尽可能利用计算机替代。<br>
            对员工工资制度进行合作制转化，提高员工积极性，提高公司的投资回报率。<br>

            `},
        {name:'销售代表',describe:'智华传奇企业管理有限公司',date:'2016.04 - 2017.008',workText:`
            工作内容:<br>
            搜集客户资料，并利用电话进行沟通，与客户约见进行产品介绍，并邀约产品说明会。<br>
            根据客户需求的特点，为客户提供最优产品解决方案，负责与客户之间的商务谈判，建立客户关系，并随时争取达成销售目标。
          `},
        {name:'一级士官',describe:'大连旅顺口水雷技术队',date:'2007.09 - 2012.10',
          workText:`
            工作内容:<br>
            通过水雷专业技术进行对各种新老款水雷进行保养，组装等工作。<br>
            针对水雷电池进行充放电保养，发现故障电池与供应商工程师对接进行维修工作。
          `},
      ],//工作卡片渲染所需内容
      projectList:[
        {
          projectName:'个人简历',
          showType:['all','blog',],
          src:'http://pqikp3898.bkt.clouddn.com/blog/resume/images/projectImg/resume-img.JPG',
          github:'https://github.com/540202901/Personal_resume',
          exhibition:'http://47.106.98.203/resume/',
          projectWord:`
          这是我的个人简历项目，制作它的目的是：将学到的基础知识能够进一步的溶解到实际开发经验中。
          它的模板来自于网络，但制作过程则由我自己根据所学或现学前端技术进行自主创建。<br><br>
          使用技术：vue+webpack+vuex+bootstrap-vue，项目还是用了第三方动画库、图表模块等。<br>
          
          `,
          isShow:false,
        },
      ],//项目图片列表
    },

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

