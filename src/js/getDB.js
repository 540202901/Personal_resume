var DBSRC = {
  user: {
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
      {name:'销售代表',describe:'智华传奇企业管理有限公司',date:'2016.04 - 2017.008',
        workText:`
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
  }
}

