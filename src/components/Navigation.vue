<template>
  <div class="nav-container">
    <!--导航栏-->
    <b-list-group class="warningList" >
      <b-list-group-item  v-for="(item,index) in navList"
                          :class="[ 'warning', item.active ? 'active':'' ]"
                          @click="change(index,item.name)" :key="item.id"
      >
        <span class="label">
          <span class="word">{{ item.word }}</span>
          <i :class="'fa  fa-fw fa-'+ item.icon"></i>
        </span>
      </b-list-group-item>
    </b-list-group>
    <!--导航栏-->

    <!--外部链接-->
    <div class="connect">
      <b-button-group>
        <b-button v-for="(item,i) in $store.state.connectList" :key="item.id" :title="item.title">
          <a :href="item.href" target="_blank">
             <i :class="'fa fa-'+ item.icon"></i>
          </a>
        </b-button>
      </b-button-group>
    </div>
    <!--外部链接-->
    <footer>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    data:function () {
      return {
        navList:[
          {id:1,name:'Home',word:'首页',icon:'user',active:true},
          {id:2,name:'Resume',word:'简历',icon:'file-text',active:false},
          {id:3,name:'ProjectWall',word:'画廊',icon:'suitcase',active:false},
          {id:4,name:'Contact',word:'联系方式',icon:'paper-plane',active:false},
        ],
      }
    },
    methods:{
      change:function(index,name){//切换组件
        this.changeClass(index)//切换样式
        //切换路由动画
        this.$store.commit('chengeMain',name)

      },//切换组件
      changeClass:function(index){//切换样式
        for (var i in this.navList){
          if (i !== index){this.navList[i].active = false;
          }
        }
        this.navList[index].active = true;
      },//切换样式
    },
    components:{

    }
  }
</script>

<style lang="scss" scoped>
  /*基本样式*/
  .nav-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .warningList{
      padding-top: 15px; ;
    }
    /*左侧导航栏*/
    .warning{
      cursor:pointer;
      background-color: #f4d03f;
      border: 0 !important;
      border-bottom: 2px solid #e1c03a !important;
      position: relative;
      overflow:hidden;
      text-align: right;
      color:black;
      font-family:"FangSongGB2312",sans-serif;
      padding: 9px 15px;
      .label{
        .word{
          border-right:2px solid #e1c03a;
          padding-right:20px ;
          margin-right: 15px;
          font-size: 17px;
          font-weight:500;
        }
      }
    }
    .list-group-item:first-child{
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }
    .list-group-item:last-child{
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
    /*左侧导航栏*/

    position: relative;
    /*页脚外部链接*/
    .connect{
      position: absolute;
      bottom: 0;
      margin-bottom: 15px;
      width: 100%;
      display: flex;
      justify-content: center;

      button{
        margin-left: 1px;
        margin-right: 1px;
        border-radius: 50% !important;
        background-color: #f4d03f;
        border:1px solid #f4d03f;
        color:black;
        width: 40px;
        height: 40px;
        a{
          width: 100%;
          height: 100%;
          color:black;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration:none;
        }
      }
      button:hover {
        background-color: black;
        border:1px solid black;
        a{
          color:#f4d03f;
        }
      }
      button:focus {
        outline: 0;
        box-shadow: none;
      }

    }
    /*页脚外部链接*/

    }
  /*基本样式*/

  /*点击切换的样式*/
  .nav-container{
    .warning.active{
      .label{
        color:#e1c03a !important;
        display: block;
        position: relative;
        z-index: 2;
      }
    }

    .warning::after{
      content:"";
      z-index: 1;
      display: block;
      width: 400px;
      height: 300px;
      background-color: black;
      position: absolute;
      transform: rotateZ(16deg) translate(-100px,112px);
      transition:transform .3s linear;
    }

    .warning.active::after{
      color:white;
      transform: rotateZ(16deg) translate(-100px,-50px);
      transition:transform .3s linear;
    }
  }
  /*点击切换的样式*/

  /*鼠标移上样式*/
  .nav-container{
    .warning:hover{
      .label {
        color: #e1c03a;
        display: block;
        position: relative;
        z-index: 2;
      }
      border-bottom: 2px solid #0f0f0f !important;
    }
     .warning:hover::after{
       transform: rotateZ(16deg) translate(-100px,-50px);
    }


  }
  /*鼠标移上样式*/



  /*手机端*/
  @media screen and (max-width:767px){

  }
  /*手机端*/
</style>