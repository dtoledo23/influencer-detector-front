<template>
  <div class="ui cards resultItem">
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="https://semantic-ui.com/images/avatar/large/elliot.jpg" data-pin-nopin="true">
        <div class="header">

          {{ result.title | truncate(25)}}
          
        </div>
        <div class="meta">
          <div class="custom-likes"><i class="thumbs outline up icon"></i> 230,000</div>
        </div>
        <div class="description">
          <div class="ui grid">
            <div class="eight wide column">Ranking 3</div>
            <div class="eight wide column page-rank">Page Rank 0.57</div>
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