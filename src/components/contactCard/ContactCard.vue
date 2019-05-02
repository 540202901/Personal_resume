<template>
  <div class="contactCar-container"
       :class="off?'off':''"
       @click="$store.commit('changeContactCarFlag',{off:true})"
  >
    <div>
     <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"  :duration="1000">
      <b-card
          v-show="$store.state.contactCarFlag"
          :title="titleList[$store.state.contactCarName].title"
          tag="article"
          class="mb-2"
      >
        <b-card-text>
          <b-img-lazy :src="titleList[$store.state.contactCarName].img"  blank-src="https://upload-images.jianshu.io/upload_images/5070211-b4120bdbd5933573.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/812"></b-img-lazy>
        </b-card-text>
      </b-card>
    </transition>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ContactCard",
    data:function () {
      return {
        titleList:{
          'QQ':{
            title:'我的QQ：540202901',
            img:'http://pqikp3898.bkt.clouddn.com/blog/resume/practiceCarWeChat.JPG',
          },
          '微信':{
            title:'我的微信：15114223688',
            img:'http://pqikp3898.bkt.clouddn.com/blog/resume/practiceCarQQ.JPG',
          },
        },
        off:false,
      }
    },
    methods:{

    },
    computed:{
      isOffCar(){return this.$store.state.contactCarFlag},
    },
    watch:{
      isOffCar:function (newVal) {
        if (newVal === false){
          return setTimeout(()=>{this.off=false},1000)

        }
        this.off = true
      }
    },

  }
</script>

<style lang="scss" scoped>
  .contactCar-container{
    position: absolute;
    z-index: 9999;
    opacity:.9;
    background-color: rgba(0,0,0,0);
    .mb-2{
      background-color: rgba(0,0,0,.5);
      color:rgba(246,215,109,1);
      font-family:"zh35-yh",sans-serif;
    }
  }

  @media screen and (max-width: 767px){
    .contactCar-container{
      position: fixed;
      margin: 50px auto;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .contactCar-container.off{
      width: 100%;
      height: 100%;
    }
  }
</style>