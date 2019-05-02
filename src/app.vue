<template>
  <div class="app-container">
    <div class="main-deviation-box" >
      <div class="main-deviation-box-center"
           :class="isMainAnimateOut?'isMain':''"
           ref="mainDeviationBox">
        <mainContainer></mainContainer>

      </div>
      <contactCard></contactCard>
    </div>

  </div>
</template>

<script>
  import mainContainer from './components/MainContainer.vue'
  import contactCard from './components/contactCard/ContactCard.vue'
  export default {
    name: "app",
    data:()=>{
      return {
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
    },
    components:{
      mainContainer,//主页面组件
      contactCard,//联系卡
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
    }

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
      width: 800px;
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
        overflow-x: hidden;
        overflow-y: auto;


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