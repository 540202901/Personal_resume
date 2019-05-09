<template>
  <div class="work-experience">
    <div class="title">工作经历</div>
    <div class="work-cards">
      <workCard v-for="(item,i) in workCardList" :key="i" :workCard="item"></workCard>
    </div>

  </div>
</template>

<script>
  import workCard from './work_card_components/WorkCard.vue'

  export default {
    name: "WorkExperience",
    components:{
      workCard,
    },
    data:function(){
      return {
      }
    },
    computed:{
      workCardList(){ return this.$store.state.user.workCardList },//工作卡片渲染所需内容
    },

  }
</script>

<style lang="scss" scoped>
  .work-experience{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    .title{
      letter-spacing:5px;
      font-size: 20px;
    }

    .work-cards{
      width: 100%;
      height: 100%;
      margin-top: 15px;
      overflow-x: hidden;
      overflow-y: auto;
    }

  }
</style>