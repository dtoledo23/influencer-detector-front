<template>
  <div class="InputText">
    <div class="input-group">
      <b-form-input v-model="text" type="text" class="fbInput" placeholder="Enter fb page id" :size="lg"></b-form-input>
      <div class="input-group-btn">

        <b-dropdown text="Profundidad" variant="primary" split class="m-md-2">
          <b-dropdown-item href="#">1</b-dropdown-item>
          <b-dropdown-item href="#">2</b-dropdown-item>
          <b-dropdown-item href="#">3</b-dropdown-item>
          <b-dropdown-item href="#">4</b-dropdown-item>
          <b-dropdown-item href="#">5</b-dropdown-item>
          <b-dropdown-item href="#">6</b-dropdown-item>
          <b-dropdown-item href="#">7</b-dropdown-item>
          <b-dropdown-item href="#">8</b-dropdown-item>
          <b-dropdown-item href="#">9</b-dropdown-item>
          <b-dropdown-item href="#">10</b-dropdown-item>
        </b-dropdown>        
      </div><!-- /btn-group -->
    </div><!-- /input-group -->
  </div>
</template>

<script>
  export default {
    name: 'textinput',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
