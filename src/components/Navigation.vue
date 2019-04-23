<template>
  <div>
    <b-list-group class="warningList" >
      <b-list-group-item href="#" class="warning">Warning list group item</b-list-group-item>
      <b-list-group-item href="#" class="warning">Warning list group item</b-list-group-item>
      <b-list-group-item href="#" class="warning">Warning list group item</b-list-group-item>
      <b-list-group-item href="#" class="warning">Warning list group item</b-list-group-item>
    </b-list-group>
    <!--页脚-->
    <footer>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    data:function () {
      return {

      }
    },
    methods:{

    },
    components:{

    }


  }
</script>

<style lang="scss" scoped>
  /*左侧导航栏*/
  .warning{
    background-color: #f4d03f;
    border: 0 !important;
    border-bottom: 2px solid #e1c03a !important;
  }
  .list-group-item:first-child{
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }
  .list-group-item:last-child{
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  /*左侧导航栏*/




  /*手机端*/
  @media screen and (max-width:767px){

  }
  /*手机端*/
</style>