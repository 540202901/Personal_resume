<template>
  <div class="project-wall-container" >
    <div class="switch-view-component">

      <div class="nav"><b-card no-body>
        <b-tabs pills card>
          <b-tab title="所有" active @click="selectShow('all')"></b-tab>
          <b-tab title="博客" @click="selectShow('blog')"></b-tab>
          <b-tab title="商城" @click="selectShow('shop')"></b-tab>
          <b-tab title="其他" @click="selectShow('other')"></b-tab>
        </b-tabs>
      </b-card></div>

      <div class="view-container">
        <div class="view-box">
          <div class="view">
            <div class="project-box"
                 v-for="(item,i) in projectList"
                 :key="i"
                 :class="[!item.isShow?'hidden':'',]"
                 :ref="'projectBox'+i"
            >
              <div class="project-box-center"
                   :class="[!item.isShow?'hidden':'',]"
                   :ref="'projectBoxCenter'+i">
                <projectPhotoComponent :src="item.src"
                                       :github="item.github"
                                       :exhibition="item.exhibition"
                                       :projectName="item.projectName"
                                       :projectWord="item.projectWord"
                ></projectPhotoComponent>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>


<script>
  import projectPhotoComponent from './project_wall_components/ProjectPhotoComponent.vue'


  export default  {
    name: "ProjectWall",
    data:function () {
      return {
        showTypeName:'all',
      }
    },
    computed:{
      projectList(){ return this.$store.state.user.projectList},

    },
    mounted:function(){
      this.showPhoto()
      //切换显示组件将图片进行偏移
      setTimeout(()=>{this.photoPosition()},200)//刚挂载默认为black:none 因此无法抓到父盒子，所以延迟200毫秒再执行
      window.onresize= ()=>{this.photoPosition()}//当窗口改变，移动盒子
    },
    methods:{
      selectShow:function (showTypeName) {
        this.showTypeName = showTypeName
        //切换显示组件将图片进行偏移
        setTimeout(()=>{this.photoPosition()},100)//刚修改完内容，还没有体现出结果，所以延迟100毫秒再执行
      },//修改showTypeName，进行显示模式切换
      showPhoto(){
        for(let i in this.projectList){//循环每个图片对象
          let showTypeName = this.showTypeName //获取当前模式名称
          let showType = this.projectList[i].showType//获取当前图片的显示类型数组
          let isShow = showType.some(//循环当前showType显示类型数组,如果符合返回true
            function (typeName,index) {
              if (typeName === showTypeName){//如果有名称是当前模式名称返回true。
                return true
              }
            }
          )
          this.projectList[i].isShow = isShow
          this.$store.commit('setProjectPhotoFlag',{i,isShow})//设置当前图片是否继续显示
        }
      },//显示图片的方法 //根据显示模式来检查图片数组显示
      photoPosition(){
        let distArr = []//保存依次应该排序的位置，存数组的目的是为了让没有hidden属性的盒子依次排序在数组位置中
        let noHiddenArr = []//保存没有hidden类的图片

        for (let i in this.projectList) {//循环存入的需要偏移的位置和图片
          let projectBox = this.$refs['projectBox'+i][0]//用来计算位置的盒子
          let projectBoxCenter = this.$refs['projectBoxCenter'+i][0]//需要偏移的图片

          if(!projectBox.classList.contains('hidden')){//如果不存在类名
            let xDist = projectBox.offsetLeft//计算位置
            let yDist = projectBox.offsetTop//计算位置
            let dist = {xDist:xDist,yDist:yDist}//存入对象
            distArr.push(dist)//存入位置数组
            noHiddenArr.push(projectBoxCenter)//存入需要偏移的盒子
            setTimeout(()=>{projectBoxCenter.classList.remove('none')},300)
          }else{//如果存在hidden类300毫秒后隐藏盒子
            setTimeout(()=>{projectBoxCenter.classList.add('none')},300)
          }
        }

        for(let i in distArr){//进行循环偏移
          let xDist = distArr[i].xDist
          let yDist = distArr[i].yDist
          noHiddenArr[i].style.transform = `translate(${xDist}px,${yDist}px)`//设定图片应该展示的位置。
        }
      },//切换显示组件将图片进行偏移

    },
    watch:{
      showTypeName:function () {
        this.showPhoto()//调用显示图片方法
      },//根据显示模式来检查图片数组显示
    },
    components:{
      projectPhotoComponent,
    },
  }


</script>

<style lang="scss" >
  .project-wall-container{
    width: 100%;
    height: 100%;
    background-color: white;
    overflow: hidden;

    font-family:"zh35-yh",sans-serif;
    font-weight:normal;

    .switch-view-component{
      width: 100%;
      height: 100%;
      background-color: white;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      /*导航按钮栏*/
      .nav{
        width: 100%;
        height: 47px !important;
        flex-shrink:0;
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
              transition: all .3s linear;
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
          /*overflow: hidden;*/
          flex-direction:column;
          border-radius: 0;
          .tab-content{
            height: 0;
            background-color: black;
            .tab-pane{
              display: none;
              padding: 0;
            }
          }
        }
        /*面板样式*/
      }
      /*导航按钮栏*/

      /*显示窗口*/
      .view-container{
        width: 100%;
        height: 90%;
        padding: 25px;
        .view-box{
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          overflow-y: scroll;
          .view{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            flex-wrap:wrap;
            position: relative;
            /*justify-content:space-between;*/

            /*个体图片盒子*/
            .project-box{
              margin: 0 3px 3px 0;
              width: 32.5%;
              height: 150px;
              /*background-color: #f4d03f;*/
              img{
                transition:all .3s linear;
              }
              .project-box-center{
                top: 0;
                left: 0;
                position: absolute;

                width: 32.5%;
                height: 150px;
                transition:all .3s linear;
              }
            }
            .project-box.hidden{
              margin: 0;
              width: 0;
              height: 0;
            }


            .project-box-center.hidden{
              img{
                opacity: 0;
                width: 0;
                height: 0;
              }
            }


            .project-box-center.none{
              display: none;
            }
            /*个体图片盒子*/

            @media screen  and (max-width: 460px) {
              .project-box{
                width: 48%;
                height: 160px;
                .project-box-center{
                  width: 48%;
                  height: 160px;
                }
              }
            }
            @media screen and (min-width:461px)  and (max-width: 767px) {
              .project-box{
                width: 48%;
                height: 210px;
                .project-box-center{
                  width: 48%;
                  height: 210px;
                }
              }
            }


          }
          @media screen and (max-width: 767px) {
            .view{
              height: auto;
            }
          }
        }
      }
      /*显示窗口*/

    }
  }
</style>