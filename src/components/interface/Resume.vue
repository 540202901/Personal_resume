<template>
  <div class="resume-container">
    <div class="switch-view-component">
     <b-card no-body>
      <b-tabs pills card>

        <b-tab title="技能展示" active @click="switchComponents('skillFlag')">
          <b-card-text>
            <transition enter-active-class="animated fadeIn">
              <skillView v-show="skillFlag"></skillView>
            </transition>
          </b-card-text>
        </b-tab>


        <b-tab title="教育背景" @click="switchComponents('accordionFlag')">
          <b-card-text>
            <transition enter-active-class="animated fadeIn" >
              <accordionView v-show="accordionFlag"  :accordion="accordion"></accordionView>
            </transition>
          </b-card-text>
        </b-tab>

        <b-tab title="工作经历" @click="switchComponents('workFlag')">
          <b-card-text>
            <transition enter-active-class="animated fadeIn" >
              <workExperience  v-show="workFlag"  ></workExperience>
            </transition>
          </b-card-text>
        </b-tab>

      </b-tabs>
    </b-card>
    </div>
  </div>
</template>

<script>
  import accordionView from './general_components/AccordionView.vue'//手风琴视窗组件
  import skillView from './resume_components/SkillView.vue' // 技能展示组件
  import workExperience from './resume_components/WorkExperience.vue'//工作经历组件

  export default {
    name: "Resume",
    data:function(){
      return {
        //动画显示
        skillFlag:true,
        accordionFlag:false,
        workFlag:false,

        resumeFlagList:[
          'skillFlag',
          'accordionFlag',
          'workFlag'
        ]

      }
    },
    methods:{
      switchComponents:function (component) {
        for (var i=0;i<this.resumeFlagList.length;i++){
          var flagName = this.resumeFlagList[i]
          if (component === flagName){
            this[flagName] = true
          }else{
            this[flagName] = false
          }
        }
      }
    },
    computed:{
      accordion(){ return this.$store.state.user.educationAccordion },
    },
    components:{
      accordionView,skillView,workExperience,
    },
  }
</script>

<style lang="scss" >
  .resume-container{
    /*简历内容间距padding*/
    .tab-pane{
      padding: 35px;
    }
    @media screen and (max-width: 414px){
      .tab-pane{
        padding: 35px 15px;
      }
    }
    /*简历内容间距padding*/





    width: 100%;
    height: 100%;
    background-color: white;
    overflow: hidden;

    font-family:"zh35-yh",sans-serif;
    font-weight:normal;

    .card-text{
      width: 100%;
      height: 100%;
    }

    .switch-view-component{
      width: 100%;
      height: 100%;
      background-color: white;
      overflow: hidden;




      /*面板切换按钮组*/
      .card-header{
        height: 45px ;
        padding: 0;

        .nav{
          height: 100%;
          display: flex;
          width: 100%;
          margin: 0;
          flex-wrap:nowrap;

        }

        .nav-item{
          margin-right:3px;
          width: 100%;
          height: 100%;
          a{
            background-color: black;
            border-radius: 0;
            height: 100%;
            color:#f4d03f;
            text-align:center;
            line-height: 200%;
            transition: all .5s;
          }
          a.active,a:hover{
            background-color: #f4d03f !important;
            color: black;
          }


        }
        .nav-item:nth-last-of-type(1){
          margin-right: 0;
        }






      }
      /*面板切换按钮组*/

      /*面板样式*/
      .card,.tabs{
        height: 100%;
        width: 100%;
        display: flex;
        overflow: hidden;
        flex-direction:column;
        border-radius: 0;
        .tab-content{
          height: 100%;
          width: 100%;
          overflow: hidden;

          .tab-pane{
            height: 100%;
            width: 100%;
            overflow: hidden;
          }

        }

      }
      /*面板样式*/


    }


    /*面板切换按钮组*/
    .card-header{
      height: 65px !important;

      .nav-item:nth-of-type(1) a{
        background: url("../../images/resume/icon_01.png") no-repeat black;
      }
      .nav-item:nth-of-type(2) a{
        background: url("../../images/resume/icon_02.png") no-repeat black;
      }
      .nav-item:nth-of-type(3) a{
        background: url("../../images/resume/icon_03.png") no-repeat black;
      }

      .nav-item{
        a{
          line-height: 300% !important;
        }
      }

    }
    /*面板切换按钮组*/



  }
</style>