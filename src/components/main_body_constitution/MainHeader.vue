<template>
  <div class="main-header-container" :class="move ? 'move' : ''">
    <div class="title" v-html="$store.state.title"></div>
  </div>
</template>

<script>
  export default {
    name: "main-header",
    data:function(){
     return {
       move:false,
     }
    },
    computed:{
      titleMove(){ return this.$store.state.titleMove},
    },
    watch:{
      titleMove:function(newVal){
        clearInterval(this.delay)
        this.move = false
        var width = window.screen.width
        if (width < 768 && newVal === false){//如果是手机端

          this.delay = setInterval(()=>{
            this.move = this.titleMove
            clearInterval(this.delay)
          },500)

          return
        }

          this.move = newVal
      },

    },

  }
</script>

<style lang="scss">
  .main-header-container{
    background-color: black;
    width: 100%;
    height: 100%;
    position: relative;
    .title{
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

    /*title文字改变动画*/
    .title{
      animation:title-rotate 1s linear 1;
    }
    @keyframes title-rotate {
      0%{
        opacity:1;
        transform:rotateX(0deg);
      }
      50%{
        opacity:0;
        transform:rotateX(90deg);
      }

      100%{
        opacity:1;
        transform:rotateX(0deg);
      }
    }
    /*title文字改变动画*/
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
        animation:title-rotate 1s linear .5s  ;
      }
      @keyframes title-rotate {
        0%{
          opacity:0;
          transform:rotateX(90deg);
        }
        50%{
          opacity:0;
          transform:rotateX(90deg);
        }
        100%{
          opacity:1;
          transform:rotateX(0deg);
        }
      }
      /*title文字改变动画*/

    }
  }


</style>