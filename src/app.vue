<template>
  <div>
    app组件
    {{ $store.state.count }}
  </div>
</template>

<script>
  export default {
    name: "app",
    data:()=>{

    },
    mounted:function(){
      this.overLoading()
    },
    methods:{
      overLoading:()=>{
        //关闭等待页面
        var loadBox = window.document.getElementById("loading-screen");
        setTimeout(function(){
          loadBox.classList.add("animated","fadeOut")
        },500)//等待100毫秒再加消失类,以免看到渲染过程
        setTimeout(function(){
          loadBox.classList.add("none")
        },1000)//1秒后让盒子消失，避免遮挡内容的点击。
      },//关闭等待页面

    }
  }
</script>

<style scoped>

</style>