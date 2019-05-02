<template>
  <div class="main-view-container">
    <transition mode="out-in">
      <component :is="$store.state.comName"></component>
    </transition>
  </div>
</template>

<script>
  //需要在main-view中切换的组件
  import Home from '../interface/Home.vue'
  import Resume from '../interface/Resume.vue'
  import ProjectWall from '../interface/ProjectWall.vue'
  import Contact from '../interface/Contact.vue'
  export default {
    name: "MainView",


    components:{
      //在main中切换的组件
      Home,Resume,ProjectWall,Contact,
    },
  }
</script>

<style lang="scss" scoped>
.main-view-container{
  width: 100%;
  height: 100%;

  .v-enter,.v-leave-to{
    /*opacity:0;*/
    height: 0;
    /* transform: translateY(-200px);*/
  }
  .v-enter-active,
  .v-leave-active{
    transition:all .5s ease;
  }

}
@media screen and (max-width:767px) {
  .v-enter,.v-leave-to{
    height: 100%;
    transform:translateY(1000px);
  }

  .v-enter-active,
  .v-leave-active{
    transition:all .5s ease;
  }

}

</style>