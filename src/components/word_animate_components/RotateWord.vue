<template>
  <div class="rotate-word" style="display: inline-block">
    <span class="rotate" :style="'transform:rotateX('+rotate+'deg);'" >
      <span class="rotate-front" >{{ rotateSkillArr[SkillNum] }}</span>
      <span class="rotate-back" >{{ rotateSkillArr[SkillNum] }}</span>
    </span>
  </div>

</template>

<script>
  export default {
    name: "RotateWord",
    data:function () {
      return {
        rotateFlag:true,//字体翻转显示标识符
        SkillNum:0,//目前显示哪个文字
        rotate:0,//旋转度数
      }
    },
    props:['rotateSkillArr','rotateTime'],
    mounted:function(){//挂载结束后生命周期钩子
      this.skillCarousel()
    },//挂载结束后生命周期钩子
    methods:{
      //称号轮播
      skillCarousel:function(){
        //设置轮播效果
        setInterval(() => {
          this.SkillNum = (this.SkillNum < this.rotateSkillArr.length - 1 ? this.SkillNum + 1 : 0)
          this.rotate = this.rotate === 0 ? 180 : 0
          this.rotateFlag = !this.rotateFlag
        },this.rotateTime)
      },//称号轮播
    },
  }
</script>

<style lang="scss" scoped>
  .rotate{
    transform-style:preserve-3d;/*定义3d转换*/
    -webkit-transform-style: preserve-3d;
    display: inline-block;
    transition : all 0.3s linear;
    position: relative;
    width: 60px;
    height: 21px;

    .rotate-front,.rotate-back{
      text-align: center;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      backface-visibility:hidden;
      -moz-backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .rotate-front{
      transform:rotateX(0deg)  translateZ(1px);
    }

    .rotate-back{
      transform: rotateX(-180deg)  translateZ(1px) ;
    }
  }
</style>