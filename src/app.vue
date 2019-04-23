<template>
  <div class="app-container" :class="appFlag ? 'appMain':''">
    <div class="content" :class="[toMainTranFlag ? 'toMainTransition':'',appFlag ? 'mainBox':'']">

      <!--头像部分-->
      <header @click="goMain"  >
        <headerBox  :hidden-flag="toMainTranFlag"  :app-flag="appFlag"></headerBox>
      </header>
      <!--头像部分-->

      <!--侧边导航栏-->
      <transition enter-active-class="animated fadeInUp">
        <nav v-if="appFlag">
          <navigation></navigation>
        </nav>
      </transition>
      <!--侧边导航栏-->

      <!--内容头部-->
      <transition enter-active-class="animated fadeInDown">
        <div class='main-header' v-if="MHeaderFlag">
        </div>
      </transition>
      <!--内容头部-->

      <!--内容面板-->
      <transition enter-active-class="animated fadeInUp">
        <main v-if="mainFlag">
        </main>
      </transition>
      <!--内容面板-->

      <!--页脚-->
      <transition enter-active-class="animated fadeInUp">
        <footer v-if="appFlag">
        </footer>
      </transition>
      <!--页脚-->
    </div>







  </div>
</template>

<script>
  import headerBox from './components/Header.vue'
  import navigation from './components/Navigation.vue'

  export default {
    name:'app',
    data:function(){
      return {
        //是否进入了主页
        appFlag:false,
        toMainTranFlag:false,//主页过渡样式是否打开
        //其他盒子显示
        MHeaderFlag:false,
        mainFlag:false,
      }
    },
    mounted:function(){//挂载结束后生命周期钩子
      this.loading()
    },//挂载结束后生命周期钩子
    methods:{
      loading: function(){
        //关闭等待页面
        var loadBox = window.document.getElementById("loading-screen");
        setTimeout(function(){
          loadBox.classList.add("animated","fadeOut")
        },500)//等待100毫秒再加消失类,以免看到渲染过程
        setTimeout(function(){
          loadBox.classList.add("none")
        },1000)//1秒后让盒子消失，避免遮挡内容的点击。
      },//loading页面加载完成消失
      //进入主页
      goMain:function(){
        this.toMainTranFlag = true//进入主页过渡动画
        setTimeout(()=>{this.appFlag = true },1000)//进入主页
        setTimeout(()=>{this.MHeaderFlag = true},1500)//主信息头部
        setTimeout(()=>{this.mainFlag = true},2000)//主信息页面
      },//进入主页
    },
    components:{
      headerBox,//头像盒子组件
      navigation,//导航组件
    },



  }
</script>

<style lang="scss" scoped>
  /*首页样式*/
  .app-container{
    /*app根界面*/
    @import './font/font.css';//引入字体
    background: url('./images/main-bg.jpg') bottom no-repeat;
    background-size:cover;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;

    overflow-x:hidden;
    /*app根界面*/

    /*容器盒子宽高100%，内容居中*/
    .content{
      width: 800px;
      height: 600px;
      display: flex;
      flex-wrap:wrap;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    /*容器盒子宽高100%，内容居中*/

    /*手机端*/
    @media screen and (max-width:767px){
      /*容器*/
      .content{
        margin: 15px;
        height: auto;
      }
      /*容器*/
    }   /*手机端*/
  }
  /*首页样式*/





  /*过渡样式*/
  .toMainTransition{
    /*手机端布局:打开主页面后的样式*/
    @media screen and (max-width:767px){
      header{
        width: 100%;
      }
    }
    /*手机端布局:打开主页面后的样式*/

  }
  /*过渡样式*/



  /*打开主页面后的样式*/
  .app-container{
    overflow: hidden;
    /*隐藏*/
    .none{
      display: none;
    }
    /*隐藏*/

    /*打开主页面后的样式*/
    .mainBox{
      display:grid;
      grid-gap:15px;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 130px 170px 300px ;
      grid-template-areas:
          "h h h h c c c c c c c c "
          "h h h h m m m m m m m m "
          "n n n n m m m m m m m m ";
      header,nav,.main-header,main,footer{
        width: 100%;
        height: 100%;
      }
      /*头部部分*/
      header{
        grid-area:h;
      }
      /*头部部分*/

      nav{
        background-color: yellow;
        grid-area:n;
      }
      .main-header{
        background-color: green;
        grid-area:c;
      }
      main{
        background-color: red;
        grid-area:m;
      }
      footer{
        display: none;
        background-color: hotpink;
      }


    }
    /*打开主页面后的样式*/
  }



  /*手机端布局:打开主页面后的样式*/
  @media screen and (max-width:767px){
    .app-container.appMain{
      overflow-x: hidden;
      overflow-y: auto;
      justify-content:flex-start;
      align-items:flex-start;


      /*主页样式*/
      .mainBox {
        overflow-y: auto;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 300px 60px 200px 300px 50px;
        grid-template-areas:
            "h h"
            "n n"
            "c c"
            "m m"
            "f f";

        margin: 15px;
        header,nav,.main-header,main,footer{
          -webkit-box-sizing:border-box;
          box-sizing:border-box;
          margin: 0;
          height: 100%;
          width: 100%;
        }

        /*头部部分*/
        header{
        }
        /*头部部分*/

        nav{

        }
        .main-header{

        }
        main{

        }
        footer{
          grid-area:f;
          display: block;
        }





      }
      /*主页样式*/
    }
  }
  /*手机端布局:打开主页面后的样式*/
  /*打开主页面后的样式*/

</style>