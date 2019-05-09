<template>
  <div class="main-header-container"
       :class="[titleMove?'move':'']"
  >

    <div class="title" :class="[phoneMove?'phone-move':'']" v-html="title"></div>


  </div>
</template>

<script>
  export default {
    name: "main-header",
    data:function(){
     return {
       move:false,
       phoneMove:false,
       phoneMoveBegin:false,
     }
    },
    computed:{
      titleMove(){ return this.$store.state.flagStore.titleMove},
      title(){ return this.$store.state.title },
    },


  }
</script>

<style lang="scss">

  .main-header-container::after{
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: opacity(50%);
    background:  url("../../images/title-back.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .main-header-container{
    transform:translateX(0);
    width: 100%;
    height: 100%;
    position: relative;
    background: black;

    .title{
      z-index: 1000;
      transition: all 1s;
      transform: rotateX(0deg);
      color:white;
      font-family:"zh35-yh",sans-serif;
      font-weight: 400;
      font-size: 27px;
      position: absolute;
      bottom: 0;
      margin-left: 30px;
      margin-bottom: 20px;
      align-items: left;
      letter-spacing:10px;
      span{
        color:rgba(246,215,109,1);
      }
    }

    @media screen and (max-width: 360px){//过小屏幕手机端字体
      .title {
        margin-left: 20px;
        font-size: 22px;
      }
    }
  }

  /*title盒子切换动画*/
  .main-header-container.move{
    animation:m-header-switch 1s linear ;
    z-index: 2;
    @keyframes m-header-switch{
      0%{
        transform:translateY(0);
      }
      50%{
        transform:translateY(130px);
      }
      100%{
        transform:translateY(0);
      }
    }

    @media screen and (min-width:768px) {/*电脑端*/
      /*title文字改变动画*/
      .title {
        animation: title-rotate 1s linear 1;
      }
      @keyframes title-rotate {
        0% {
          opacity: 1;
          transform: rotateX(0deg);
        }
        50% {
          opacity: 0;
          transform: rotateX(90deg);
        }

        100% {
          opacity: 1;
          transform: rotateX(0deg);
        }
      }
      /*title文字改变动画*/
    }



  }
  /*title盒子切换动画*/

  @media screen and (max-width:767px){
    /*title盒子切换动画*/

    .main-header-container.move{
      animation:m-header-switch 1s linear ;
      @keyframes m-header-switch{
        0%{
          transform:translateX(0);
        }
        50%{
          transform:translateX(-1000px);
        }
        100%{
          transform:translateX(0);
        }
      }


      /*title文字改变动画*/
      .title{
        transform: rotateX(90deg);
      }
      /*!*title文字改变动画*!*/

    }



  }

    /*title盒子切换动画*/





</style>