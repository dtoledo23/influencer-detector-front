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

   
  
  
          <p>Compañías toman decisiones estratégicas basándose en las tendencias en Facebook </p>
          <p>Ver las empresas más influyentes en donde poder trabajar (Estudiante)</p>
          <p>Ver los restaurantes más influyentes dentro de una zona en particular</p>
          <p>Ver el ecosistema de las diferentes categorías</p>
        </div>
      </div>
      <div class="eight wide column">
        <h3 class="architecture">Architecture</h3>
        <img class="architecture" src="../assets/img/Arquitectura.png"height="400" width="400">
      </div>
      <div class="row">
        <div class="sixteen wide column">
          <h3 class="featuresTitle">Features</h3>
          <div class="ui tall stacked segment features">
            <div class="ui grid">
              <div class="sixteen wide column">
                <h4>Docker</h4>
                <p>Levantar instancias de servidores para cada uno de los micro-servicios</p>
                <h4>AWS</h4>
              </div>
              <div class="five wide column">
                <dl>
                  <dt>
                    Cassandra
                  </dt>
                  <dd>
                    3 Instancias de nodos
                    Cada uno con:
                    <ul class="lista">
                      <li>
                        2 cores
                      </li>
                      <li>
                       8GB RAM
                     </li>
                     <li>
                      32GB SSD
                    </li>
                  </ul>

                </dd>

              </dl>
            </div>
            <div class="five wide column">
              <dl>
                <dt>Spark</dt>
                <dd>
                  5 Instancias con:
                  <ul class="lista">
                    <li>
                      4 cores
                    </li>
                    <li>
                      15GB RAM
                    </li>
                    <li>
                      80GB SSD
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div class="five wide column">
              <dl class="five wide column">
                <dt>Front y Back End</dt>
                <dd>
                  1 Instancia con:
                  <ul class="lista">
                    <li>
                      2 cores
                    </li>
                    <li>
                      4GB RAM
                    </li>
                    <li>
                      20GB SSD
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>





        </div>
      </div>
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
  .features{
    margin-bottom: 50px !important;
  }
  .featuresTitle{
    margin-top: -60px;
  }
  h4{
    font-weight: bolder;
  }
  ul.lista{
    li{
      font-size: 10px;
    }
    
  }


</style>
