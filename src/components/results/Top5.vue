<template>
  <div class="hello">
  <h2>{{ msg }}</h2>
  <!-- <Loading v-if="loading==true"/> -->
    
    <ul v-if="loading==false">
      <li v-for="result in topFive">
        <Top5Element v-bind:result="result"/>
      </li>
    </ul>  
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
<style scoped>
h2 {
  font-weight: normal;
  color: white;
  text-transform: uppercase;
  font-size: 36px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
