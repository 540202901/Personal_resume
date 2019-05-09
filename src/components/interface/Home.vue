<template>
  <div class="home-container">
    <div class="hello-word">
      <h4 class="name">您好,我是<span class="yellow">{{userName}}</span></h4>
      <h6 class="title"><span class="gray">{{ message.title }}</span></h6>
    </div>

    <div class="brief-introduction-text" v-html="message.brief"></div>

    <div class="personal-info">
      <div class="title"><h4>个人信息</h4> </div>

      <div class="message-item"
           v-for="item in message.msgItems" :key="item.title"
      >
        <span class="yellow">{{item.title}}</span> <span class="black">{{item.msg}}</span>
      </div>
    </div>

    <img class="personal-img" src="../../images/profile.png">



  </div>
</template>

<script>
  export default {
    name: "Home",
    data:function () {
      return {}
    },
    methods:{

    },
    computed:{
      userName(){return this.$store.getters.getUserName},
      message(){ return this.$store.state.user.homeMessage },
    },
  }
</script>

<style lang="scss" scoped>
  .home-container{
    overflow: hidden;
    span{
      display: inline-block;
      padding: 5px ;
      height: 30px;
      line-height: 100%;
      text-align: left;
    }
    span.yellow{
      color:black;
      background-color:#f4d03f;
    }
    span.black{
      background-color: black;
      color:white;
    }
    span.gray{
      color:grey;
    }

    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 25px;
    font-family:Microsoft YaHei,sans-serif;

    .name{
      span{
        margin: 0 10px;
        height: 100%;
      }
    }
    .title{
      span{
        padding: 0;
      }
      h4{
        font-size: 21px !important;
      }
    }

    .hello-word{
      font-family:"zh35-yh",sans-serif;
      letter-spacing:5px;
    }

    .brief-introduction-text{
      margin-right: 75px;
      line-height:30px;
      color:#666666;
    }
    @media screen and (max-width: 413px){
      .brief-introduction-text{
        font-size: 14px;
        line-height: 20px;
      }
    }


    .personal-img{
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      height: 345px;
      width: auto;
    }

    .personal-info{
      margin-top: 20px;
      /*position: absolute;*/
      /*margin: 25px;*/
      /*bottom: 0;*/
      /*left: 0;*/
      z-index: 1;
      span{
        margin: 5px 5px 5px 0;
        padding: 5px 10px;
      }
      .message-item{
        span.yellow{
          width: 80px;
        }
      }
    }

  }

  @media screen and (max-width: 360px){
    .hello-word{
      .name{
        font-size: 21px;
      }
      .title{
        font-size: 16px;
      }
    }

    .personal-info{
      .title{
        h4{
          font-size: 21px;
        }
      }
      font-size: 14px;

      .message-item{
        span.yellow{
          width: 60px !important;
          padding: 5px ;
        }
      }
    }
  }
</style>