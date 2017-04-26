<template>
  <div id="app">
    <TopMenu/>
    <div class="ui container content">
      <router-view/>
      <PageFooter/>
    </div>
  </div>
</template>

<script>
  // import 'bootstrap/dist/css/bootstrap.css'
  // import 'bootstrap-vue/dist/bootstrap-vue.css'
  import TopMenu from '@/components/elements/TopMenu.vue';
  import PageFooter from '@/components/elements/PageFooter.vue';
  export default {
    name: 'app',
    components: {
      TopMenu: TopMenu,
      PageFooter: PageFooter
    }
  }
</script>

<style scoped>
  @import url('https://cdn.jsdelivr.net/semantic-ui/2.2.9/semantic.min.css');
  @import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,900';

  body {
    font-family: 'Roboto', sans-serif; 
    height: 100% !important;
  }

  #app{
    position: relative;
    width: 100%;
    min-height: auto;
    overflow-y: hidden;
    background: url("./assets/new-age/bg-pattern.png"), #7b4397;
    /* fallback for old browsers */
    background: url("./assets/new-age/bg-pattern.png"), -webkit-linear-gradient(to left, #7b4397, #dc2430);
    /* Chrome 10-25, Safari 5.1-6 */
    background: url("./assets/new-age/bg-pattern.png"), linear-gradient(to left, #7b4397, #dc2430);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
  }

  .hidden{
    display: none;
  }
  .gradient-bg{
    min-height: 105%;
    background: #3b91d7 !important;
    background: -moz-linear-gradient(-180deg, #3FDC97 0%, #3B91D7 100%) !important;
    background: -webkit-linear-gradient(-180deg, #3FDC97 0%, #3B91D7 100%) !important;
    background: linear-gradient(to bottom, #3b91d7 0%,#3fdc97 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3b91d7', endColorstr='#3fdc97',GradientType=0 ) !important;
  }
  .gray-bg{
    min-height: 105%;
    background: #F9F9F9 !important;
  }
  h1, h2, h3, h4{
    font-family: 'Roboto', sans-serif; 
  }
  
  .content {
    height: inherit !important;
    .pull{
      &.right{
        float: right;
      }
    }
  }
</style>
