<template>
  <div class="title-container" :class="$store.state.titleMove ? 'move' : ''">
    <div class="title" v-html="$store.state.title"></div>
  </div>
</template>

<script>
  export default {
    name: "Title",
    data:function(){
      return {
      }
    },
    mounted:function(){

    },
    methods:{


    },

  }
</script>

<style lang="scss" >
  .title-container{
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
  .title-container.move{
    animation:m-header-switch 1s linear 1 ;
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
</style>