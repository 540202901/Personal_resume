<template>
  <div class="beginPage">
    <img class="front" v-show="!hiddenFlag" src="../images/front-image.jpg" alt="" >

    <div class="title">
      <div class="name"><H1>{{ nameOP }}</H1></div>
      <div class="skill">
        Web
        <span class="rotate" :style="'transform:rotateX('+rotate+'deg);'" >
              <span class="rotate-front" v-show="rotateFlag">{{ rotateSkillArr[SkillNum] }}</span>
              <span class="rotate-back" v-show="!rotateFlag">{{ rotateSkillArr[SkillNum] }}</span>
            </span>
      </div>
    </div>

    <div class="mouse" v-show="!hiddenFlag" >
      <img src="../images/click.png" alt="">
      <span class="pulse"></span>
    </div>

    <img src="../images/profile-thum.png" v-show="appFlag" class="headIcon">

  </div>
</template>

<script>
  export default {
    name:'Header',
    data:function () {
      return {
        nameOP:'王 浩 然',//简历主角名字
        rotateFlag:true,//字体翻转显示标识符
        rotateSkillArr:["设计师","学习者","开发者"],//不断更新的文字内容
        SkillNum:0,//目前显示哪个文字
        rotate:0,//旋转度数
      }
    },
    mounted:function(){//挂载结束后生命周期钩子
      this.skillCarousel()
    },//挂载结束后生命周期钩子
    methods:{
      //称号轮播
      skillCarousel:function(){
        //设置轮播效果
        setInterval(() => {
          this.SkillNum = (this.SkillNum < this.rotateSkillArr.length - 1 ? this.SkillNum + 1 : 0)
          this.rotate = this.rotate === 0 ? -180 : 0
          this.rotateFlag = !this.rotateFlag
        },4000)
      },//称号轮播
    },
    props:['hiddenFlag','appFlag'],
  }
</script>

<style lang="scss" scoped>


  /*点击开始页面*/
  .beginPage{
    width: 550px;
    height: 420px;
    display: block;
    background: #0f0f0f;
    padding: 15px;
    vertical-align:middle;
    color:white;
    cursor:pointer;
    line-height: 1.5;

    /*正面页面*/
    .front{
      width: 100%;
      height: auto;
    }
    text-align:right;
    /*正面页面*/

    /*文字盒子*/
    .title{


      /*名字字体*/
      .name{
        margin-top: 15px;
        h1{
          font-family:"zh35-yh",sans-serif;
          font-weight: 400;
          color:rgba(246,215,109,1);
        }
      }
      /*名字字体*/

      /*称号字体和动画样式*/
      .skill{
        font-family:"zh35-yh",sans-serif;
        margin-bottom: 10px;
        font-size: 20px;
        .rotate{
          display: inline-block;
          transition : all 0.3s linear;
          .rotate-front,.rotate-back{
            display: inline-block;
          }
          .rotate-front{
            transform:rotateX(0deg) ;
          }

          .rotate-back{
            transform:rotateX(-180deg) ;
          }
        }
      }
      /*称号字体和动画样式*/
    }
    /*文字盒子*/

    /*鼠标*/
    position: relative;
    .mouse{
      /*鼠标4秒后再出现*/
      animation:mouse-none 5s 1 linear;
      @keyframes mouse-none{
        0%{
          opacity: 0;
        }
        80%{
          opacity: 0;
        }
        100%{
          opacity: 1;
        }
      }
      /*鼠标4秒后再出现*/

      position: absolute;
      left: 48%;
      bottom: 10px;
      img{
        width: 40px;
        height: auto;
      }


      /*鼠标的点击动画*/
      .pulse::after{
        content: "";

        display: block;
        position: absolute;
        top: 16px;
        left: 5px;
        height: 8px;
        width: 15px;

        border-radius: 50%;
        box-shadow:0 0 1px 1px #bdbdbd;

        animation:pulse 0.7s infinite linear;
      }
      @keyframes pulse{
        form{
          transform: scale(1)  ;
          opacity:1;
        }
        to{
          transform: scale(3)   ;
          opacity:0;
        }
      }
      /*鼠标的点击动画*/

    }
    /*鼠标*/
  }
  /*手机端*/
  @media screen and (max-width:767px){
    .beginPage{
      line-height: 0.5;
      text-align: center;
      width: 100%;
      height: auto;
      /*正面页面*/
      .front{
        width: 100%;
        height: auto;
      }
      /*正面页面*/
      /*鼠标*/
      .mouse{
        img{
          width: 30px;
          height: auto;
          opacity:0.75;
        }
      }
      /*鼠标*/
    }
  }
  /*手机端*/
  /*点击开始页面*/




  /*打开主页过渡样式*/
  .toMainTransition{
    /*justify-content: left;*/
    /*align-items:flex-start;*/
    /*头部部分*/
    .beginPage{
      cursor:auto;
      width: 256.667px;
      height: 305px;
      transform:translate(-272px,-148px);

      position: static;
      transition:all 0.7s linear;


      /*文字盒子*/
      .title{
        position: relative;
        bottom: -290px;
        right:-190px;
        transform:translate(-190px, -280px);
        transition:all 0.7s linear;
        .skill{
          text-align: center;
        }
        .name{
          text-align: center;
        }
      }
      /*文字盒子*/



    }
    /*头部部分*/

  }
  /*手机端*/
  @media screen and (max-width: 767px){
    /*进入主页过渡样式*/
    .toMainTransition{
      width: 100%;
      /*头部部分*/
      .beginPage{
        cursor:auto;
        width: 100%;
        height: 300px;
        transform:translate(0px,-203px);
        transition:all .7s linear;


        /*文字盒子*/
        .title{
          line-height: 1.5;
          bottom: -150px;
          right:0px;
          transform:translate(0px,-139px);
          transition:transform .7s linear;
        }
        /*文字盒子*/
      }
      /*头部部分*/
    }
    /*进入主页过渡样式*/

  }
  /*手机端*/
  /*打开主页过渡样式*/



  /*进入主页后样式*/
  .mainBox{
    .beginPage{
      line-height: 1.5;
      text-align: center;
      transform:translate(0,0);
      transition:all 0s ;
      width: 100%;
      height: 100%;

      .name{
        margin-top: 25px;
      }

      /*头像样式*/
      .headIcon{
        display: inline-block;
        border-radius: 50%;
        min-width: 140px;
        min-height: 141px;

        padding: 7px;
        background-color: #f4d03f;

      }
      /*头像样式*/
      /*文字盒子*/
      .title{
        position:static;
        transform:translate(0px,0px);
        transition:all 0s;
      }
      /*文字盒子*/
    }
  }
  /*进入主页后样式*/

</style>