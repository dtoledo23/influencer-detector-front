<template>
  <div class="ui cards resultItem">
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" :src="result.profile_picture" data-pin-nopin="true">
        <div class="header">

          {{ result.name | truncate(25)}}
          
        </div>
        <div class="meta">
          <div class="custom-likes"><i class="thumbs outline up icon"></i> {{ result.likes }}</div>
        </div>
        <div class="description">
          <div class="ui grid">
            <div class="eight wide column">Ranking {{ result.ranking }}</div>
            <div class="eight wide column page-rank">Score {{ result.score | truncate(5)}}</div>
          </div>
        </div>
      </div>
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
  
    truncate: function(string, value) {
      return string.substring(0, value) + '...';
    }
    },

    props: ['result']
  };
</script>

<style lang="less" scoped>
  .resultItem{
    margin-left: -60px;
    margin-bottom: 10px;
    .card{
      background: rgba(255, 255, 255, 0.7);
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