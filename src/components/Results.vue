<template>
  <div class="ui grid" id="results">
    <h1>Results</h1>
    <div class="row">
      <div class="sixteen wide column">
        <Stats v-bind:stats="stats"/>
      </div>
      <div class="sixteen wide column">
        <Top5 v-bind:topFive="topFive"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Top5 from '@/components/results/Top5'
  import PieChart from '@/components/results/PieChart'
  import GeoStats from '@/components/results/GeoStats'
  import Stats from '@/components/results/Stats'

  import axios from 'axios';

  export default {
    name: 'results',
    data () {
      return {
        msg: 'Results',
        text: "",
        topFive: [],
        activeView: 'stats',
        stats:{
          number_edges: '',
          number_likes: '',
          number_nodes: '',
        },
        likes: {
          title: 'Likes',
          data: [
          {value:335, name:'Martin'},
          {value:310, name:'Moscosa'},
          {value:274, name:'Monse'},
          {value:235, name:'Penny'},
          {value:400, name:'Ambar'}
          ]
        },
        audience: {
          title: 'Audience',
          data: [
          {value:335, name:'Martin'},
          {value:310, name:'Moscosa'},
          {value:274, name:'Monse'},
          {value:235, name:'Teji'},
          {value:400, name:'Carlota'}
          ]
        }
      }
    },
    mounted(){
      this.runCrawler()
    },
    methods:{
      runCrawler: function(){
        var query = this.$cookie.get('query');
        query = JSON.parse(query)
        this.categories = []
        axios.post(' http://ec2-34-208-123-87.us-west-2.compute.amazonaws.com:3000/analyze',{
          "category": query.category,
          "pages": query.pages
        })
        .then(response => {
          
          this.topFive = response.data.top_five
          this.stats.number_edges = response.data.number_edges
          this.stats.number_likes = response.data.number_likes
          this.stats.number_nodes = response.data.number_nodes
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
    },
    components:{
      Top5:Top5,
      PieChart:PieChart,
      Stats: Stats,
      GeoStats: GeoStats
    }
  }
</script>


<style lang="less" scoped>
  #results{
    min-height: 800px !important;
  }
  #custom-charts{
    margin-left: 100px;
  }
</style>