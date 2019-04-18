<template>
    <div class="app-container">


      <div class="beginPage" >
        <img class="front" src="./images/front-image.jpg" alt="">
        <div class="name"><H1>{{ name }}</H1></div>
        <div class="skill">
          Web
          <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <span class="rotate ">{{ rotateSkill[0] }}</span>
          </transition>
        </div>
        <div class="mouse">
          <img src="./images/click.png" alt="">
          <span class="pulse">
          </span>
        </div>
      </div>



    </div>
</template>

<script>
  export default {
    name: "app",
    data:function(){
      return {
        name:'王 浩然',
        rotateSkill:["设计师","学习者","开发者"],
      }
    },
    mounted:function(){//挂载结束后生命周期钩子
      this.loading()
    },
    methods:{
      loading: function(){
        //关闭等待页面
        var loadBox = window.document.getElementById("loading-screen");
        setInterval(function(){
          loadBox.classList.add("animated","fadeOut")
        },100)//等待100毫秒再加消失类,以免看到渲染过程
        setInterval(function(){
          loadBox.classList.add("none")
        },1000)//等待100毫秒再加消失类,以免看到渲染过程
      }//loading页面加载完成消失


    }


  }
</script>

<style lang="scss" scoped>
    .app-container{
      /*@import './font/font.css';//引入字体*/



      background: url('./images/main-bg.jpg') bottom no-repeat;
      background-size:cover;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      .loading-screen{
        position:fixed;
        bottom: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background: url('./images/Preloader_7.gif') center no-repeat rgba(246,215,109,1);
        z-index: 9999;


      }/*等待页面*/

      .beginPage{
        display: block;
        background: #0f0f0f;
        padding: 15px;
        vertical-align:middle;
        color:white;
        cursor:pointer;

        .front{
          width: 520px;
          height: auto;
        }
        text-align:right;
        /*名字字体*/

        .name{
          margin-top: 15px;

          h1{
            font-family:"zh35-yh",sans-serif;
            font-weight: 400;
            color:rgba(246,215,109,1);
          }
        }
        .skill{
          font-family:"zh35-yh",sans-serif;
          margin-bottom: 10px;
          font-size: 20px;
        }


        /*鼠标*/
        position: relative;
        .mouse{
          position: absolute;
          left: 48%;
          bottom: 10px;
          img{
            width: 40px;
            height: auto;
          }
          .pulse{
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
              transform:scale(1) ;
              opacity:1;

            }
            to{
              transform:scale(3) ;
              opacity:0;
            }
          }
        }

      }/*点击开始页面*/


    }
</style>