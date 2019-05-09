<template>
  <div class="contactCar-container"
       :class="on?'on':''"
       @click="$store.commit('changeContactCarFlag',{off:true})"
  >
    <div>
     <transition enter-active-class="animated bounceInDown" leave-active-class="animated  bounceOutDown"  :duration="1000">
      <b-card
          v-show="$store.state.flagStore.contactCarFlag"
          :title="connectCardList[$store.state.user.contactCarName].title"
          tag="article"
          class="mb-2"
      >
        <b-card-text>
          <b-img-lazy :src="connectCardList[$store.state.user.contactCarName].img"  ></b-img-lazy>
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
        on:false,
      }
    },
    methods:{

    },
    computed:{
      isOffCar(){return this.$store.state.flagStore.contactCarFlag},
      connectCardList(){return this.$store.state.user.connectCardList},
    },
    watch:{
      isOffCar:function (newVal) {
        if (newVal === false){
          return setTimeout(()=>{this.on=false},1000)

        }
        this.on = true
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
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      .mb-2{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        img{
          box-sizing: border-box;
          width: 100%;
          height: 100%;
        }
      }
    }
    .contactCar-container.on{
      top: 5px;
      width: 100%;
      height: 100%;
    }




  }
</style>