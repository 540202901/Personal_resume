<template>
  <div class="footer-container">
    <div class="word">联&nbsp&nbsp&nbsp&nbsp系&nbsp&nbsp&nbsp&nbsp我&nbsp&nbsp&nbsp&nbsp:   </div>
    <!--外部链接-->
    <div class="connect">
        <b-button v-for="(item,i) in $store.state.connectList" :key="item.id"
                  v-b-tooltip.hover="item.title" @click="openContactCard(item.openCard,item.title)"
        >
          <a :href="item.href" target="_blank" :onclick="item.clickFlag">
            <i :class="'fa fa-'+ item.icon"></i>
          </a>
        </b-button>
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
  }
</script>

<style lang="scss" scoped>
  .footer-container{
    width: 100%;
    height: 100%;
    background-color: #666;
    display: flex;
    align-items:center;
    .word{
      display: inline-block;
      color:#f4d03f;
      margin-left: 20px;
      margin-right: 20px;
      width: 100px;
      text-align: center;
      line-height: 100%;
    }

    .connect{
      a{
        color:white;
      }
    }
  }
</style>