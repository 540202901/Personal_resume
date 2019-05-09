<template>
  <div class="contact-container">
    <div class="map-box">
      <mapContainer></mapContainer>
    </div>
    <div class="contact-bottom-container">
      <div class="contact-box">
        <div class="contact">
          <div class="contact-msg" v-for="(item,i) in contactMsgList" :key="i">
            <i :class="'fa '+item.icon"></i>
            <span>{{ item.msg }}</span>
          </div>
        </div>
      </div>

      <!--<div class="mail-box">-->
        <!--<contactMailContainer></contactMailContainer>-->
      <!--</div>-->
    </div>

  </div>
</template>

<script>
  import mapContainer from './contact_components/BaiduMapContainer.vue'
  // import contactMailContainer from './contact_components/ContactMailContainer.vue'

  export default {
    name: "Contact",
    data:function(){
      return {
        contactMsgList:[
          { icon:'fa-map-marker',msg:'杭州市萧山区' },
          { icon:'fa-phone',msg:'15114223688' },
          { icon:'fa-envelope',msg:'540202901@qq.com' },
        ],
      }
    },
    components:{
      mapContainer,
      // contactMailContainer,
    },
  }
</script>

<style lang="scss" scoped>
  .contact-container{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    overflow: hidden;
    padding: 20px;


    .map-box{
      width: 100%;
      height: 300px;
    }


    .contact-bottom-container{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      align-items:flex-end;

      .contact-box{
        i{
          width: 20px;
        }
      }


      .mail-box{
        width: 250px;
        height: 230px;
        background-color: red;
      }
    }


  }
</style>