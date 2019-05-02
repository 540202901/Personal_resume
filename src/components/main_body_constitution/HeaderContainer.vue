<template>
  <div class="header-container"
       :class="[isMain?'isMain':'',]"
       @click="goMain"
  >

    <img class="front"  src="../../images/front-image.jpg" alt="" v-show="!profileFlag" >

    <div class="title-position"></div>
    <div class="title" ref="title">
      <div class="name"><H1>{{ personName }}</H1></div>
      <div class="skill">
        Web <rotateWord :rotateSkillArr="rotateSkillArr" rotateTime="2500"></rotateWord>
      </div>
    </div>

    <div class="mouse" v-if="!isMain" >
      <img src="../../images/click.png" alt="">
      <span class="pulse"></span>
    </div>

    <img src="../../images/profile-thum.png" v-show="profileFlag" class="headIcon">
  </div>
</template>

<script>
  import rotateWord from '../word_animate_components/RotateWord.vue'
  export default {
    name: "HeaderContainer",
    data:function () {
      return {
        profileFlag:false,
      }
    },
    methods:{
      goMain:function(){
        this.$store.commit('isMain')
      }
    },
    computed:{
      isMain(){ return this.$store.state.flagStore.isMain },
      personName(){ return this.$store.state.personName },
      rotateSkillArr(){ return this.$store.state.rotateSkillArr },
    },
    components:{
      rotateWord,
    },
    watch:{
      isMain:function(newVal){
        var width = window.screen.width//获取当前屏幕宽度
        //如果点击了进入主页面，且屏幕属于手机端尺寸，触发此事件
        if (newVal){
          var yDiffer = width > 767 ? 181 : 10
          var xDiffer = width > 767 ? -42 : 0

          //1，获取盒子
          var box = this.$refs.title
          var border = 15
          //3,根据盒子的父盒子和距离爷爷盒子顶部计算差距值：
          const xDist = -box.offsetLeft + xDiffer + border
          const yDist = -box.offsetTop + yDiffer + border

          box.offsetWidth;//不加没有动画，所以一定要加上一句类似的
          box.style.transition =  'all .5s linear'
          box.style.transform = `translate(${xDist}px,${yDist}px)`//偏移位置最终位置

          setTimeout(()=>{
            this.profileFlag=true
            box.style.transition =  'all 0s '
            box.style.transform = `translate(0px,0px)`//还原位置
            box.classList.add('isMain')
          },1000)
        }
      }
    }


  }
</script>

<style lang="scss" scoped>

  .header-container{
    width: 550px;
    height: 425px;
    cursor:pointer;
    padding: 15px;
    background-color: black;
    text-align: right;
    .front{
      width: 100%;
      height: auto;
    }

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
        font-size: 20px;
        color:white;
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


  }
  .header-container.isMain{
    width: 100%;
    height: 100%;
    transition:all .5s linear;
    text-align: center;
    /*头像样式*/
    .headIcon{
      margin-top: 10px;
      display: inline-block;
      border-radius: 50%;
      min-width: 140px;
      min-height: 141px;
      padding: 7px;
      background-color: #f4d03f;
    }
    /*头像样式*/

    .front{
      opacity: 0;
    }
    @media screen and (min-width:768px) {
      /*文字盒子*/
      .title {
        /* transform:translate(-190px, -280px);*/
        transition: all 0.5s linear;
        text-align: right;
        .skill {
          text-align: right;
          transform: translateX(-13px);
          transition: all .5s;
        }
        .name {
          text-align: right;
        }
      }

      .title.isMain {
        .skill {
          text-align: center;
          transform: translateX(0px);
          transition: all 0s;
        }
        .name {
          text-align: center;
        }
      }
    }
    /*文字盒子*/
  }


  @media screen and (max-width:767px){
    .header-container{
      width: 100%;
      height: auto;
      text-align: center;
      /*鼠标*/
      .mouse {
        img {
          width: 30px;
          height: auto;
          opacity: 0.75;
        }
      }
      /*鼠标*/

      /*文字盒子*/
      .title{
        width: 100%;
        .name{
          margin-top:10px ;
        }
      }
      /*文字盒子*/
    }
    .header-container.isMain{
      .title{
        .skill{
          text-align: center;
        }
        .name{
          text-align:  center;
        }
      }

    }
  }


</style>