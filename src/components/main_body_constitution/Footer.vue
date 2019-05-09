<template>
  <div class="footer-container" :class="[titleMove?'move':'']">
    <div class="word">Connect With Me  </div>
    <!--外部链接-->
    <div class="connect">
          <a :href="item.href" target="_blank"
             :onclick="item.clickFlag"
             v-for="(item,i) in connectList" :key="item.id"
             @click="openContactCard(item.openCard,item.title)"
          >
            <i :class="'fa fa-'+ item.icon"></i>
          </a>
    </div>
    <!--外部链接-->

  </div>
</template>

<script>
  export default {
    name: "Footer",
    methods:{
      openContactCard:function(flag,name){//打开联系卡
        if (flag){//是否为允许点的联系卡片
          this.$store.commit('changeContactCarFlag',{name:name})
        }
      },//打开联系卡
    },
    computed:{
      titleMove(){ return this.$store.state.flagStore.titleMove},
      connectList:function () {return  this.$store.state.user.connectList},
    }
  }
</script>

<style lang="scss" scoped>
  .footer-container{
    margin-bottom: 15px;
    width: 100%;
    height: 100%;
    background-color: #666;
    display: flex;
    align-items:center;
    .word{
      display: inline-block;
      color:#f4d03f;
      margin-left: 10px;
      margin-right: 10px;
      width: 130px;
      text-align: center;
      line-height: 100%;
    }

    .connect{
      a{
        color:white;
        display: inline-block;
        margin: 0 10px 0 10px;
      }
      a:hover,a:focus{
        color: #f4d03f;
      }

    }
  }

  @media screen and (max-width:767px){
    /*footer盒子切换动画*/
    .footer-container.move{
      animation:footer-move 1s linear ;
      @keyframes footer-move{
        0%{
          transform:translateY(0);
        }
        50%{
          transform:translateY(1000px);
        }
        100%{
          transform:translateY(0);
        }
      }
    }
  }
</style>