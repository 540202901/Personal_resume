<template>
  <div class="work-card">
    <div class="title">
      <div class="position">
        <span class="name">{{workCard.name}}</span>
        <span class="describe">{{workCard.describe}}</span>
      </div>
      <div class="date">{{workCard.date}}</div>
    </div>

    <div class="work-text" v-html="workCard.workText">
    </div>

  </div>
</template>

<script>
  export default {
    name: "WorkCard",
    props:['workCard'],
  }
</script>

<style  lang="scss" scoped>
  .work-card{
    padding: 15px;
    color:white;
    width: 100%;
    min-height: 120px;
    background-color: black;
    margin-bottom: 20px;
    font-size: 13px;
    font-family:'Microsoft YaHei',sans-serif;

    .title{
      width: 100%;
      display: flex;
      justify-content: space-between;
      .position{
        span{
          display: block;
          letter-spacing:2px;
        }
        .name{

        }
        .describe{
          color: #f4d03f;
          font-weight:bold;

        }
      }

      .date{
        color: #F9BF3B;;
      }
    }

    .work-text{
      margin-top: 10px;
      padding-right: 75px;
      font-size: 12px;
    }


  }
  @media screen and (max-width: 768px){
    .work-card {
      width: 98%;
      .work-text{
        padding-right: 55px;
      }
    }
  }
</style>