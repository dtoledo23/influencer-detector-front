<template>
  <div class="resultItem">
    <div class="image">
      <img class="ui bordered rounded image" :src="result.profile_picture">
    </div>
    <div class="content">
      <div class="header">{{ result.name | truncate(10)}}</div>

      <div class="description">
        <span class="right floated">
         <i class="comments outline icon"></i>
         {{ result.talking_about}}
       </span>
       <i class="thumbs outline up icon"></i> {{ result.likes }}
     </div>
   </div>
   <div class="extra content">
    <span class="right floated">
     <i class="bullseye icon"></i>
     {{ result.score | truncate(5)}}
   </span>
   <span>
    <i class="list icon"></i>
    {{ result.ranking }}
  </span>
</div>
</div>
</template>

<script>
  import Vue from 'vue'
  var VueTruncate = require('vue-truncate-filter');
  Vue.use(VueTruncate);
  export default {

    name: 'Top5Element',

    data () {
      return {

      };
    },
    methods:{
      stringLify: function(){
        var a= this.result.score;
        this.result.score=a.toString();
      }
      
    },
    mounted(){
      this.stringLify();
    },
    filters: {
      truncate: function(stingValue, value) {
        return stingValue.substring(0, value) + '...';
      }
    },
    props: ['result']
  };
</script>

<style lang="less" scoped>
  .pageAvatar{
    width: 100%;
    padding: 10px;
  }
  .resultItem{
    color: black;
    background: rgba(255, 255, 255, 0.7);
    img{
      width: 100%;
    }
    .content{
      .header{
        font-weight: 700;
        font-size: 1.28571429em;
        margin-top: -.21425em;
        line-height: 1.28571429em;
        padding: 10px 5px;
      }
    }
    .description{
      padding: 5px 10px 2px 10px;
    }
    .extra{
      &.content{
        padding: 10px;
      }
    }
    .custom-likes{
      color: black;
      font-size: 15px;
      padding-top: 10px;
    }
    .page-rank{
      text-align: right;
    }
  }
</style>