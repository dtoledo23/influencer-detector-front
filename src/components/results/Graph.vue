<template>
  <div id="grafo">
    <graphSVG :chartData="chartData" />
    <br>
  </div>
</template>

<script>

  var _ = require('lodash')
  import axios from 'axios';
  const graphSVG = require('@/components/results/GraphElement')

  export default {
    components: {
      graphSVG: graphSVG
    },
    data: function() {
      return {
        chartData: [],
        errors: []
      }
    },
    computed: {
      
    },
    mounted(){
      this.getData();
    },
    methods: {
      getData: function() {
        axios.get(`https://raw.githubusercontent.com/d3/d3-plugins/master/graph/data/miserables.json`)
        .then(response => {
          this.chartData = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        })}
      }
    }
  </script>

  <style lang="less" scoped>
    #grafo{
      min-height: 600px;
    }
  </style>