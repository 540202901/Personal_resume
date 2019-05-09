<template>
  <div class="chief-skills">
    <div class="skill-box" v-for="(item,i) in chiefSkillsList" :key="i">
      <span class="title">{{item.title}}</span>
      <div class="chart-box"><lineChart :maxValue="item.value"></lineChart></div>
    </div>
  </div>
</template>

<script>
  import lineChart from '../../general_components/chart_components/LineChart.vue'
  export default {
    name: "ChiefSkills",
    components:{
      lineChart,
    },
    props:['chiefSkillsList'],
  }
</script>

<style lang="scss" scoped>
  .chief-skills{
    margin-top: 10px;
    margin-left: 15px;
    .skill-box{
      height: 35px;
      line-height: 35px;
      width: 100%;
      display: flex;


      .title{
        display: inline-grid;
        width: 100px;
        height: 100%;
      }
      .chart-box{
        height: 35px;
        width: 100%;
      }
    }

  }
</style>