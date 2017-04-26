<template>
  <div class="ui grid" id="results">
    <div class="row">
      <div class="four wide column">
        <Top5/>
      </div>
      <div class="twelve wide column">
        <Stats/>
        <div class="ui divider"></div>
        <div class="ui grid">
          <div class="eight wide column">
            <PieChart v-bind:info="audience"/>
          </div>
          <div class="eight wide column">
            <PieChart v-bind:info="likes"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Top5 from '@/components/results/Top5'
  import PieChart from '@/components/results/PieChart'
  import Stats from '@/components/results/Stats'

  export default {
    name: 'results',
    data () {
      return {
        msg: 'Results',
        text: "",
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
    components:{
      Top5:Top5,
      PieChart:PieChart,
      Stats: Stats
    }
  }
</script>


<style lang="less" scoped>
  #custom-charts{
    margin-left: 100px;
  }
</style>