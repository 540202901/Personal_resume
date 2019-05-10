<template>
  <div class="app-container" >
    <div class="error" v-if="!userDataAvailable">
        <h1>数据信息读取失败或其他错误，请稍后尝试。</h1>
    </div>
    <div class="main-deviation-box" v-if="userDataAvailable">
      <div class="main-deviation-box-center"
           :class="isMainAnimateOut?'isMain':''"
           ref="mainDeviationBox">
        <mainContainer></mainContainer>
      </div>
      <!--显示练习方式二维码卡片组件-->
      <contactCard></contactCard>
      <!--显示项目卡片组件-->
      <projectCard></projectCard>
    </div>

  </div>
</template>

<script>
  import mainContainer from './components/MainContainer.vue'
  import contactCard from './components/contactCard/ContactCard.vue'
  //项目显示卡
  import projectCard from './components/interface/project_wall_components/ProjectCard.vue'

  export default {
    name: "app",
    data:()=>{
      return {
        userDataAvailable:false,
      }
    },
    mounted:function(){
      this.overLoading()
    },
    methods:{
      overLoading:()=>{
        //关闭等待页面
        var loadBox = window.document.getElementById("loading-screen");
        setTimeout(function(){
          loadBox.classList.add("animated","fadeOut")
        },500)//等待100毫秒再加消失类,以免看到渲染过程
        setTimeout(function(){
          loadBox.classList.add("none")
        },1000)//1秒后让盒子消失，避免遮挡内容的点击。
      },//关闭等待页面
      getUser:function () {
        this.$http.get('API/resume').then(result =>{
          if(result.body.status === 0){
            this.$store.commit('setUser',result.body.message.user)//用AJAX获取User数据
            this.userDataAvailable = true//在数据未获取前页面不显示
          }
        })
      }
    },
    components : {
      mainContainer,//主页面组件
      contactCard,//联系卡
      projectCard,//项目显示卡
    },
    computed: {
      listenIsMain() {return this.$store.state.flagStore.isMain;},
      isMainAnimateOut(){return this.$store.state.flagStore.isMainAnimateOut},
    },
    watch:{
      listenIsMain:function(newVal,oldVal) {
        if (newVal) {
          //1，获取盒子
          var box = this.$refs.mainDeviationBox
          //3,根据盒子的父盒子和距离爷爷盒子顶部计算差距值：
          const xDist = -box.offsetLeft
          const yDist = -box.offsetTop

          box.offsetWidth;//不加没有动画，所以一定要加上一句类似的
          box.style.transition =  'all .5s linear'
          box.style.transform = `translate(${xDist}px,${yDist}px)`//偏移位置最终位置

        }
        // var width = window.screen.width//获取当前屏幕宽度
        //如果点击了进入主页面，且屏幕属于手机端尺寸，触发此事件
        // if (newVal && width < 768) {}
      }
    },
    created:function () {
      this.getUser()//获取User数据
    },//创建完数据还未生成盒子的的钩子函数

  }
</script>

<style lang="scss" scoped>
  .app-container{
    padding: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: url('./images/main-bg.jpg') bottom;
    background-size:cover ;
    margin: 0;

    display:flex;
    justify-content: center;
    align-items: center;

    .main-deviation-box{
      width: 747px;
      height: 600px;
      /*background-color: rgba(0,0,0,.5);*/
      display:flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .main-deviation-box-center{
        /*background-color: rgba(155,220,110,.5);*/
        width: 550px;
        height: 420px;

      }
      .main-deviation-box-center.isMain{
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(0px,0px)!important;
        transition: all 0s !important;
      }
    }

  }

  /*手机端布局*/
  @media screen and (max-width:767px){
    .app-container{
      height: 101%;
      display: block;
      overflow-x: hidden;
      overflow-y: auto;
      .main-deviation-box{
        width: 100%;
        min-height: 200%;
        display: block;



        .main-deviation-box-center{
          width: 100%;
          height: 25%;
          position: absolute;
          top:12%;
        }

      }

    }
  }/*手机端布局*/

</style>