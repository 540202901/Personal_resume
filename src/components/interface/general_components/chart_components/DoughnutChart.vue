<template>
  <div class="doughnutChart">
     <canvas width="100%" height="100%" ref="canvas"></canvas>
  </div>
</template>

<script>
  //======================引入环形进度条
  import CircleProgressBar from '../../../../lib/js/chart/circle-progress-bar.js'
  export default {
    name: "DoughnutChart",
    mounted:function () {
      this.showChart()
    },
    props:['circleBarType','percentage'],
    methods:{
      showChart:function () {
        ctx = this.$refs.canvas
        var option = {
          canvasDom: ctx,//画布对象
          angle: Math.PI * this.percentage * 2,          		   // 需要转动的角度  * 1 = 50%
        }
        for(var key in this.circleBarType){
          option[key] = this.circleBarType[key]
        }
        var c1 = new CircleProgressBar(option);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .doughnutChart{
    width: 100%;
    height: 100%;
    display: flex;

  }
</style>