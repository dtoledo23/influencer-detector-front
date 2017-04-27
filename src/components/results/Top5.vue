<template>
  <div class="hello">
    <div class="ui divider"></div>
    <!-- <Loading v-if="loading==true"/> -->
    
    <div class="ui five stackable fluid cards" id="roster">
      <div class="card" v-for="result in topFive">
        <Top5Element v-bind:result="result"/>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Top5Element from "@/components/results/Top5Element"
  import Loading from '@/components/Loading'
  export default {
    name: 'top5',
    data () {
      return {
        msg: 'Top 5',
        loading: false
      }
    },
    props: ['topFive'],
    components:{
      Top5Element:Top5Element,
      Loading:Loading
    },
    methods:{
    },
    mounted(){
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #roster{
    margin-bottom: 200px;
  }
</style>
