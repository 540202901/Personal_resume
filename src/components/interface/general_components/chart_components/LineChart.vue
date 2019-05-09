<template>
  <div class="lineChart">
    <b-progress height="25px" :value="value"  class="mb-2"></b-progress>
  </div>
</template>

<script>
  export default {
    name: "LineChart",
    data() {
      return {
        value: 0
      }
    },
    mounted(){
      this.initValue()
    },
    methods:{
      initValue:function () {
        this.value =  this.maxValue
      }
    },
    props:['maxValue'],
  }
</script>

<style lang="scss"  >
  .lineChart{
    max-width: 400px;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-right: 50px;

    .mb-2 {
      border-radius: 0;
      margin: 5px 0;
      background-color: rgba(244,208,63,0.2);
      .progress-bar{
        background-color: rgba(244,208,63,1);
        transition: all 2s ease-in-out ;
      }
    }
  }

  @media screen and (max-width: 767px){
    .lineChart{
      padding-left: 10px;
      padding-right: 20px;

    }
  }

</style>