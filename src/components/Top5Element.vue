<template>
  <div class="hello">
    <div class="business-card">
                <div class="media">
                    <div class="media-left">
                        <img class="media-object img-circle profile-img" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png">
                    </div>
                    <div class="media-body">
                        <div class="nombre">{{'Lorem ipsum dolor sit amet, consectetur adipisicing' | truncate 5 '...' }}</div>
                        <div>likes: 230,000</div>
                        <div class="row">
                          <div class="col-md-5">
                            <small>ranking: 3</small>
                          </div>
                          <div class="col-md-7">
                            <small>pageRank: 0.567</small>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
import Vue from 'vue';
var VueTruncate = require('vue-truncate-filter');
Vue.use(VueTruncate);
export default {
  name: 'top5element',
  data () {
    return {
      
    }
  },
  props:[
    "result"
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Business Card Css */
.business-card {
  border: 1px solid #cccccc;
  background: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 300px;
margin-left: -50px;
}
.profile-img {
  height: 75px;
  background: white;
  border-radius: 150px;
}
.nombre{
  font-weight: bolder;
  font-size: 18px;
}
</style>
