<template>
<div class="col-lg-12">
  <div class="col-md-8" id="Landing">
    <h1>{{ msg }}</h1>

    <div class="col-lg-12">
          <TextInput/>
        
    </div>
    <b-button class="btn-add" v-on:click="add">+</b-button>
    <b-button class="btn-start" :variant="primary" v-on:click="startAnalysis"> Start Analysis</b-button>
  </div>
</div>
  
</template>

<script>
import TextInput from '@/components/TextInput'
export default {
  name: 'landing',
  data () {
    return {
      msg: 'Influencer Detector',
      text:""
    }
  },
  methods:{
    startAnalysis: function(event){
      this.$router.push("/results");
    },
    add: function(event){
      this.$router.push("/results");
    }
  },
  components:{
    TextInput:TextInput
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
h1{
  color: white;
  text-transform: uppercase;
font-weight: bold;
font-size: 70px;
text-shadow: 0 0 2px black;
}
#Landing{
  margin: 0 auto;
  .fbInput{
    height: 38px;
    margin-top: 8px;
  }
}
.btn-add{
    background-color: #71B277;
    float: right;
    margin-right: 22px;
}
.btn-add:hover{
  background-color: #71B277;
}
.btn-start{
  margin-top: 50px;
}
</style>
