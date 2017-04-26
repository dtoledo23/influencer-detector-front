<template>
  <div class="ui grid">
    <div class="sixteen wide column">
      <h2 class="titulo">Technologies</h2>
      <div class="sixteen wide column titulo">        
        <ul class="social-network social-circle">
          <li> <img src="../assets/img/cassandra.png"height="100"> </li>
          <li><img src="../assets/img/go.png"height="100"></li>
          <li><img src="../assets/img/node.png"height="100"></li>
          <li><img src="../assets/img/vue.png"height="100"></li>
          <li><img src="../assets/img/spark.png"height="100" ></li>
          <li><img src="../assets/img/fb.png"height="100"></li>
        </ul>       
      </div>
    </div>
    <div class="row">
      <div class="eight wide column">
        <h3>Use Cases</h3>
        <div class="ui tall stacked segment">
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</div>
        <h3>Features</h3>
        <div class="ui tall stacked segment">
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</div>
      </div>
      <div class="eight wide column">
        <h3 class="architecture">Architecture</h3>
        <img class="architecture" src="../assets/img/Arquitectura.png"height="400" width="400">
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'aboutus'

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  ul.social-network {
    list-style: none;
    display: inline;
    margin-left:0 !important;
    padding: 0;
  }
  ul.social-network li {
    display: inline;
    margin: 0 5px;
    
  }

  .social-circle li a {
    display:inline-block;
    position:relative;
    margin:0 auto 0 auto;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    border-radius:50%;
    text-align:center;
    width: 50px;
    height: 50px;
    font-size:20px;
  }

  h2{
    font-weight: bold;
    font-size: 70px;
    margin-top: -40px;
  }
  li{
    font-size: 20px;
  }
  h3{
    font-size: 50px;
    font-weight: bold;
    margin-top: 60px;
  }

  .titulo{
    padding-top: 60px;
    text-align: center;
  }
  .segment{
    color: black;
    background: rgba(255, 255, 255, 0.8);
  }
  .architecture{
    text-align: center;
    margin-left: 100px;
  }


</style>
