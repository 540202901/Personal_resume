<template>
  <div class="circleBarBox">
    <div class="circleBar" v-for="(item,i) in otherSkillsList" :key="i">
      <doughnutChart :circleBarType="circleBarType" :percentage="item.percentage"></doughnutChart>
      <div class="circleText">{{item.circleText}}</div>
    </div>
  </div>
</template>

<script>
  import doughnutChart from '../../general_components/chart_components/DoughnutChart.vue'
  export default {
    name: "OtherSkills",
    data:function(){
      return {
        circleBarType:{
          r: 45,//半径
          lineWidth: 10,//进度条宽度
          lineColor:'rgba(244,208,63,1)',//进图条颜色
          lineBgColor: 'rgba(244,208,63,0.2)',//背景颜色
          duration: 1000,//过渡时间
          textFontSize: 14,//中间字体
          textColor: 'black',//文字颜色
          animationMode: 'decelerate', // 'linear' || 'accelerate' || 'decelerate'  匀速，加速， 减速
          startAngle: -Math.PI * 0.5,    		   // 起始角度
        }//圆圈样式
      }
    },
    components:{
      doughnutChart,
    },
    props:['otherSkillsList'],//圆圈列表

  }
</script>

<style lang="scss" scoped>
  .circleBarBox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    margin-top: 10px;


    .circleBar{
      min-width: 20%;
      height: 100%;
      margin: 10px;

      .circleText{
        font-family:'Microsoft YaHei',sans-serif;
        width: 100%;
        text-align:center;
        padding: 8px;
        font-size: 14px;
      }
    }



    @media screen and (max-width: 676px){
      .circleBar{
        margin: 5px;
      }
    }
    }

</style>