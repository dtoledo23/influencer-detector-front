<template>
<header>
  <div id="app" class="container">
    <div class="row"> 
      <router-view></router-view>
    </div>
  </div>
  </header>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'app'
}
</script>

<style scoped>
body {
  overflow: hidden !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 650px;

}
</style>
