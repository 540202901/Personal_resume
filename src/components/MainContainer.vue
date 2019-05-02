<template>
  <div class="main-container">

    <div class="header" ><headerContainer></headerContainer></div>

    <transition enter-active-class="animated fadeInUp">
     <div class="nav" v-if="navIn"><navContainer></navContainer></div>
    </transition>

    <transition enter-active-class="animated fadeInDown" >
      <div class="main-header" v-if="mainHeaderIn"><mainHeaderContainer></mainHeaderContainer></div>
    </transition>


    <transition enter-active-class="animated fadeInUp" >
      <div class="main-view" v-if="mainViewIn"><mainViewContainer></mainViewContainer></div>
    </transition>

    <transition enter-active-class="animated fadeInUp">
      <div class="footer" v-if="footerIn"><footerContainer></footerContainer></div>
    </transition>

  </div>
</template>

<script>
  import footerContainer from './main_body_constitution/Footer.vue'
  import mainHeaderContainer from './main_body_constitution/MainHeader.vue'
  import mainViewContainer from './main_body_constitution/MainView.vue'
  import navContainer from './main_body_constitution/Nav.vue'
  import headerContainer from './main_body_constitution/HeaderContainer.vue'
  export default {
    name: "MainContainer",
    data:()=>{
      return {
      }
    },
    methods:{

    },
    components:{
      headerContainer,footerContainer,mainHeaderContainer,mainViewContainer,navContainer,
    },
    computed:{
      navIn(){return this.$store.state.flagStore.navIn},
      mainHeaderIn(){return this.$store.state.flagStore.mainHeaderIn},
      mainViewIn(){return this.$store.state.flagStore.mainViewIn},
      footerIn(){return this.$store.state.flagStore.footerIn},
    }

  }
</script>

<style lang="scss" scoped>
  .main-container{
    width: 800px;
    height: 600px;
    display:grid;
    grid-gap:15px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 120px 170px 300px ;
    grid-template-areas:
        "h h h h c c c c c c c c "
        "h h h h m m m m m m m m "
        "n n n n m m m m m m m m ";
    .header,.nav,.main-header,.main,.footer{
      width: 100%;
      height: 100%;
    }
    /*头部部分*/
    .header{
      /*background-color: #00CC00;*/
      grid-area:h;
    }
    /*头部部分*/

    /*导航部分*/
    .nav{
      /*background-color: #f4d03f;*/
      grid-area:n;
    }
    /*导航部分*/

    /*标题部分*/
    .main-header{
      /*background-color: green;*/
      grid-area:c;
    }
    /*标题部分*/

    /*主体内容部分*/
    .main-view{
      /*background-color: black;*/
      grid-area:m;
    }
    /*主体内容部分*/

    /*页脚部分*/
    .footer{
      display: none;
      /*background-color: hotpink;*/
    }
    /*页脚部分*/




  }


  /*手机端布局*/
  @media screen and (max-width:767px){
    .main-container{
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: 300px 60px 130px 560px 50px;
      grid-template-areas:
          "h"
          "n"
          "c"
          "m"
          "f";

      .header,.nav,.main-header,.main,.footer{
        -webkit-box-sizing:border-box;
        box-sizing:border-box;
        margin: 0;
        height: 100%;
        width: 100%;
      }

      /*头部部分*/
      .header{
      }
      /*头部部分*/

      .nav{

      }
      .main-header{

      }
      .main{

      }
      .footer{
        grid-area:f;
        display: block;
      }




    }
  }/*手机端布局*/
</style>