<template>
  <div class="row">
    <div class="col-md-12">
      <h1>{{ msg }}</h1>
    </div>
    
 <div class="col-md-2">
      <Top5/>
    </div>
    
    <div class="col-md-10" >
      <div id="custom-charts">
      <Graph/>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <PieChart/>
        </div>
        <div class="col-md-6">
          <PieChart/>
        </div>
        
      </div>
    </div>
    </div> 
  </div> 
</template>

<script>
import Top5 from '@/components/Top5'
import Graph from '@/components/Graph'
import PieChart from '@/components/PieChart'

export default {
  name: 'results',
  data () {
    return {
      msg: 'Results',
      text: ""
    }
  },
  components:{
    Top5:Top5,
    Graph:Graph,
    PieChart:PieChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #custom-charts{
    margin-left: 100px;
  }

</style>
