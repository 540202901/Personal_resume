<template>
  <div class="tab-list" role="tablist">
    <div class="title">{{accordion.title}}</div>

    <b-card no-body class="mb-1" v-for="(item,i) in accordion.list"  :key="item.id">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#"  v-b-toggle="item.id"  variant="info">
          {{ item.title }}
          <i class="fa fa-sort-desc pull-right"></i>
        </b-button>
      </b-card-header>
      <b-collapse :id="item.id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><h5>{{ item.title }} <span>{{ item.textTitle }}</span></h5></b-card-text>
          <b-card-text><p v-html="item.text"> </p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

  </div>
</template>

<script>
  export default {
    name: "AccordionView",
    props:['accordion'],
  }
</script>

<style lang="scss">
  .tab-list{
    .title{
      height: 40px;
      font-size: 20px;
      letter-spacing:5px;
    }

    .card{
      border: 0;
      /*title*/
      .card-header{
        height: 55px  !important;
        background-color: white;
        border: 0;
        padding: 0 !important;
        .btn.collapsed{/*不点的样式*/
          background-color: black;
          color:rgba(244,208,63,1);
        }
        .btn{/*点了会去掉.collapsed*/
          border-radius: 0;
          font-family:'Microsoft YaHei',sans-serif;
          text-align: left;
          background-color: rgba(244,208,63,1);
          color:black;
          font-weight:400;
          letter-spacing:2px;
          border: 0;
        }
        .btn-info.focus, .btn-info:focus {
          box-shadow: none ;
        }
        .btn.focus, .btn:focus {
          outline: 0;
          box-shadow: none ;
        }

      }
      /*title*/

      /*文字显示*/

      .card-body{
        padding-top: 0  !important;
        font-family:'Microsoft YaHei',sans-serif;
        .card-text{
          h5 {
            font-weight: 700;
            font-size: 14px;
            line-height: 1.1;
            color: #666;
            letter-spacing: 2px;
            span{
              font-size: 13px;
              font-style:oblique;
              letter-spacing:0;
            }
          }
          p{
            width: 100%;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            color: #666;
            line-height: 1.42857143;
            margin: 15px 0;
            padding-right: 75px;
            span{
              display: block;
              height: auto;
              .title{
                font-size: 14px;
                font-weight: bold;
                display: inline-block;
              }
            }
          }

          @media screen and (max-width: 414px) {
            p{
              padding-right: 35px;
            }
          }

        }
      }

      /*文字显示*/

    }
  }
</style>