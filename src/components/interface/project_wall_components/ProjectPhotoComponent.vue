<template>
  <div class="project-photo" >
    <!--默认图片是懒加载动画-->
    <img src="http://pqikp3898.bkt.clouddn.com/blog/resume/images/preloadingloader-4-2.gif"  ref="img">
    <div class="btn-box" @click.self ="openProjectCard()">
      <div class="title" v-html="projectName"></div>
      <b-button class="project-btn"  :href="exhibition" target="_blank">展示效果</b-button>
      <b-button class="project-btn"  :href="github" target="_blank">GitHub</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProjectPhotoComponent",
    props:['src','exhibition','github','projectName','projectWord'],
    mounted:function () {
      this.loadImg()//预加载图片
    },
    methods:{
      loadImg:function () {//预加载图片
        let image = new Image() //声明一个图片对象
        image.src = this.src //绑定图片地址
        image.onload = () => {//当图片加载成功调用函数抓取图片盒子，将其绑定其中。
          let img = this.$refs.img //抓取父亲盒子
          img.src = this.src //
        }
      },//预加载图片
      openProjectCard(){
        let msg = {
          title:this.projectName,//title名字
          img:this.src,//图片地址
          word:this.projectWord,//项目文字
          github:this.github,//github
          exhibition:this.exhibition,
        }

        this.$store.commit('openProjectCard',msg)
      },//打开项目展示卡片方法
    }
  }
</script>

<style lang="scss" scoped>
  .project-photo{
    cursor:pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    img,.btn-box{
      transition:all 0.5s linear;
      width: 100%;
      height: 100%;
    }
    .btn-box{
      overflow: hidden;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(0,0,0,.5);
      z-index: 10;
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;

      .title{
        font-family:'Microsoft YaHei',sans-serif;
        transition: all .2s linear;
        transform:translateY(-500%);
        color:white;
        margin: 5px;
        padding-bottom: 10px;
        min-width: 50%;
        border-bottom: 1px solid rgba(255,255,255,.7);
        text-align: center;
        line-height: 18px;
      }

      .project-btn{
        opacity: 0;
        outline:none;
        border: 0;
        border-radius:0;
        font-family:'Microsoft YaHei',sans-serif;
        padding: 2px !important;
        font-size: 12px;
        margin: 2px;
        width: 60px;
        background-color: black;
      }


    }
  }

  .project-photo:hover{
    img{
      width: 120%;
      height: 120%;
    }

    .btn-box{
      opacity:1;
      .title{
        transform:translateY(0);
      }

      .project-btn{
        outline:0;
        border: 0;
        box-shadow:1px 1px 1px 1px rgba(0,0,0,.7);
        animation: show-btn .6s linear;
        opacity:1;
        @keyframes show-btn {
          0%{opacity:0;}
          50%{opacity:0;}
          100%{opacity:1;}
        }
      }


      .project-btn:focus{
        outline:0;
      }

      .project-btn:hover{
        background-color: #f4d03f;
        color:black;
      }



    }

  }
</style>