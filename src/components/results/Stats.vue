<template>
  <div class="ui grid">
    <div class="four wide column">
      <div class="ui card">
        <div class="content">
          <div class="header">Nodes</div>
          <div class="meta">Number of pages</div>
          <div class="description">
            {{stats.number_nodes}}
          </div>
        </div>
      </div>
    </div>
    <div class="four wide column">
      <div class="ui card">
        <div class="content">
          <div class="header">Edges</div>
          <div class="meta">Number of connections</div>
          <div class="description">
            {{stats.number_edges}}

          </div>
        </div>
      </div>
    </div>
    <div class="four wide column">
      <div class="ui card">
        <div class="content">
          <div class="header">Likes</div>
          <div class="meta">Avg likes</div>
          <div class="description">
            {{stats.number_likes}}
          </div>
        </div>
      </div>
    </div>
    <div class="four wide column" id="stats-buttons">
      <button class="ui fluid inverted black button" v-on:click="goToMonitoring()">Monitoring</button>
      <div class="ui divider"></div>
      <!-- <button class="ui fluid inverted default button" v-if="piechart == false" v-on:click="togglePie()">Pie Chart</button>
      <button class="ui fluid inverted default button" v-if="piechart == true" v-on:click="togglePie()">Roster</button> -->
    </div>
  </div>
</template>

<script>
  export default {

    name: 'Top5Element',

    data () {
      return {
        piechart: false
      };
    },
    props: ['stats'],
    methods:{
      goToMonitoring: function(){
        location.href = 'http://ec2-35-167-97-183.us-west-2.compute.amazonaws.com:8090/';
      },
      togglePie: function(){
        if(this.piechart){this.piechart = false}else{this.piechart = true}
      },
    }
  };
</script>

<style lang="less" scoped>
  .card{
    background: rgba(255, 255, 255, 0.7);
  }
  #stats-buttons{
    .divider{
      margin: 9px auto;
    }
  }
  
</style>