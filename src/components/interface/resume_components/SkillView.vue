<template>
  <div class="skill-view">
    <div class="skills">
      <span class="title">常用技术</span>
      <chiefSkills :chiefSkillsList="chiefSkillsList" ></chiefSkills>
    </div>


    <div class="other-skills">
      <span class="title">其他技术</span>
      <otherSkills :otherSkillsList="otherSkillsList" :circleBarType="circleBarType"></otherSkills>
    </div>

  </div>
</template>

<script>
  import otherSkills from './skills_components/OtherSkills.vue'
  import chiefSkills from './skills_components/ChiefSkills.vue'
  export default {
    name: "SkillView",
    computed:{
      chiefSkillsList(){ return this.$store.state.user.skill.chiefSkillsList},
      otherSkillsList(){ return this.$store.state.user.skill.otherSkillsList},
    },
    components:{
      chiefSkills,otherSkills,
    }

  }
</script>

<style lang="scss" scoped>
  .skill-view{
    width: 100%;
    height: 100%;

    .skills{
      width: 100%;
      height: 50%;
      /*margin-bottom: 20px;*/
    }
    .other-skills{
      width: 100%;
      height: auto;
    }

    .title{
      letter-spacing:5px;
      font-size: 20px;
    }


  }
</style>