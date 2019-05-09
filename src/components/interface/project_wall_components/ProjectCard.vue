<template>
  <div class="project-card-box"
       v-show="isShow"
       :class="isShowClass?'show':''"
       @click.self="close()">
    <div class="project-card">
      <div class="title-box">
        <span class="title">{{ projectCardMsg.title }}项目</span>
        <div class="close" @click="close()"><span>×</span></div>
      </div>
      <div class="word-view">
        <div class="photo-box">
          <img class="photo" :src="projectCardMsg.img">
        </div>
        <div class="word" v-html="projectCardMsg.word"></div>
        <b-button class="btn" target="_blank" :href="projectCardMsg.exhibition">项目展示</b-button>
        <b-button class="btn" target="_blank" :href="projectCardMsg.github">github</b-button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ProjectCard",
    data:function () {
      return {
        isShowClass:false,
      }
    },

    methods:{
      close:function () {
        this.isShowClass = false
        setTimeout(()=>{
          this.$store.commit('closeProjectCard')
        },500)
      }
    },
    computed:{
      isShow(){ return this.$store.state.flagStore.projectCardIsShow },
      projectCardMsg(){ return this.$store.state.projectCardMsg },
    },
    watch:{
      isShow:function (newVal) {
        setTimeout(()=>{
          this.isShowClass = newVal
        },100)
      }
    },

  }
</script>

<style lang="scss" scoped>
  .project-card-box{
    font-family:'微软雅黑',sans-serif;
    left: 0;
    top: 0;
    z-index: 9999;
    position:fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
    transition: all .5s;
    opacity:0;
    .project-card{
      height: auto;
      width: 600px;
      min-height: 200px;
      border-radius:5px;
      border:8px solid #f4d03f;
      background-color: white;
      transition: all .5s;
      opacity:0;
      transform:translateY(-400px);

      .title-box{
        width: 100%;
        height: 70px;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
          font-weight: 600;
          margin-left: 25px;
          color:white;
          font-size: 22px;
          letter-spacing: 5px;
        }
        .close{
          width: 31px;
          height: 31px;
          z-index: 10000;
          color:white;
          border-radius: 50%;
          margin-right: 25px;
          background-color: rgba(255, 0, 0, 1);
          flex-shrink:0;
          display: flex;
          justify-content: center;
          align-items: center;

          cursor:pointer;

          span{
            display: inline-block;
            text-align: center;
            font-size: 20px;
            height: 23px;
          }



        }

        .close:hover{
          color: black;
        }
      }

      .word-view{
        width: 100%;
        height: auto;
        padding: 20px;
        .photo-box{
          width: 100%;
          max-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          .photo{
            width: 100%;
            height: auto;
          }
        }


        .word{
          width: 100%;
          height: auto;
          margin: 20px 0;
          font-size: 14px;
        }

        .btn{
          background-color: black;
          color: white;
          height: 33px;
          font-size: 13px;
        }

        .btn:hover{
          background-color: #f4d03f;
          color:black;
        }


      }

    }
  }




  .project-card-box.show{
    opacity:1;
    .project-card{
      opacity:1;
      transform:translateY(0);
    }
  }
  @media screen and (max-width: 767px){
    .project-card-box{
      padding: 10px;
      .project-card{
        width: 100%;


        .title-box{
          .title{
            margin-left: 15px;
            font-size: 18px;
          }
          .close{
            margin-right: 15px;
          }

        }



      }
    }
  }
</style>