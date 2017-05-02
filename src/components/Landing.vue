<template>
  <div class="ui grid" id="landing">
    <div class="sixteen wide column">
      <h1>{{ msg }}</h1>
      
      <div class="ui grid" v-if="show == 1 || show == 2 || show == 3 || show == 4 || show == 5">
        <div class="ten wide column ui form">
          <input type="text" name="first-name" placeholder="Facebook Page" v-model="fbPage1.page" @change="getFbPageId1()">
        </div>
        <div class="four wide column ui form">
          <div class="ui form">
            <div class="field">
              <select class="ui dropdown" v-model="fbPage1.depth">
                <option value="">Depth</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="two wide column">
          <div class="" id="page-status">
            <i class="check circle icon" v-if="fbPage1.status == 'ready'"></i>
            <i class="warning sign icon" v-if="fbPage1.status == 'fetchable'"></i>
            <i class="remove circle icon" v-if="fbPage1.status == 'non-existant'"></i>
          </div>
        </div>
      </div>

      <div class="ui grid" v-if="show == 2 || show == 3 || show == 4 || show == 5">
        <div class="ten wide column ui form">
          <input type="text" name="first-name" placeholder="Facebook Page" v-model="fbPage2.page" @change="getFbPageId2()">
        </div>
        <div class="four wide column ui form">
          <div class="ui form">
            <div class="field">
              <select class="ui dropdown" v-model="fbPage2.depth">
                <option value="">Depth</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="two wide column">
          <div class="" id="page-status">
            <i class="check circle icon" v-if="fbPage2.status == 'ready'"></i>
            <i class="warning sign icon" v-if="fbPage2.status == 'fetchable'"></i>
            <i class="remove circle icon" v-if="fbPage2.status == 'non-existant'"></i>
          </div>
        </div>
      </div>

      <div class="ui grid" v-if="show == 3 || show == 4 || show == 5">
        <div class="ten wide column ui form">
          <input type="text" name="first-name" placeholder="Facebook Page" v-model="fbPage3.page" @change="getFbPageId3()">
        </div>
        <div class="four wide column ui form">
          <div class="ui form">
            <div class="field">
              <select class="ui dropdown" v-model="fbPage3.depth">
                <option value="">Depth</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="two wide column">
          <div class="" id="page-status">
            <i class="check circle icon" v-if="fbPage3.status == 'ready'"></i>
            <i class="warning sign icon" v-if="fbPage3.status == 'fetchable'"></i>
            <i class="remove circle icon" v-if="fbPage3.status == 'non-existant'"></i>
          </div>
        </div>
      </div>

      <div class="ui grid" v-if="show == 4 || show == 5">
        <div class="ten wide column ui form">
          <input type="text" name="first-name" placeholder="Facebook Page" v-model="fbPage4.page" @change="getFbPageId4()">
        </div>
        <div class="four wide column ui form">
          <div class="ui form">
            <div class="field">
              <select class="ui dropdown" v-model="fbPage4.depth">
                <option value="">Depth</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="two wide column">
          <div class="" id="page-status">
            <i class="check circle icon" v-if="fbPage4.status == 'ready'"></i>
            <i class="warning sign icon" v-if="fbPage4.status == 'fetchable'"></i>
            <i class="remove circle icon" v-if="fbPage4.status == 'non-existant'"></i>
          </div>
        </div>
      </div>      
      
      <div class="ui grid" v-if="show == 5">
        <div class="ten wide column ui form">
          <input type="text" name="first-name" placeholder="Facebook Page" v-model="fbPage5.page" @change="getFbPageId5()">
        </div>
        <div class="four wide column ui form">
          <div class="ui form">
            <div class="field">
              <select class="ui dropdown" v-model="fbPage5.depth">
                <option value="">Depth</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="two wide column">
          <div class="" id="page-status">
            <i class="check circle icon" v-if="fbPage5.status == 'ready'"></i>
            <i class="warning sign icon" v-if="fbPage5.status == 'fetchable'"></i>
            <i class="remove circle icon" v-if="fbPage5.status == 'non-existant'"></i>
          </div>
        </div>
      </div>





      <div class="ui grid">
        <div class="right floated two wide column ui form">
          <div class="ui animated fade green fluid button" tabindex="0" id="plusButton" v-on:click="addShownInputs"  v-bind:class="{ disabled: addButtonDisabled }">
            <div class="visible content"><i class="plus icon"></i></div>
            <div class="hidden content">
              Add
            </div>
          </div>
        </div>
      </div>




      <div class="ui grid">
        <div class="left floated four wide column ui form">
          <div class="field">
            <select class="ui dropdown" v-model="category">
              <option selected="selected"  value="">Categories</option>
              <option v-for="category in categories" :value="category">{{category}}</option>
            </select>
          </div>
        </div>
        <div class="right floated four wide column ui form">
          <button class="ui primary button" id="startAnalysisButton" v-on:click="analyse">
            Start Analysis
          </button>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
  import axios from 'axios';
  // Require dependencies
  import Vue from 'vue'
  var VueCookie = require('vue-cookie');
  // Tell Vue to use the plugin
  Vue.use(VueCookie);
export default {
  name: 'Landing',

  data () {
    return {
      msg: 'Influencer Detector',
      show: 1,
      addButtonDisabled: false,
      categories:[],
      errors: [],
      fbPage1:{
        page: '',
        pageId: '',
        status: '',
        depth: ''
      },
      fbPage2:{
        page: '',
        pageId: '',
        status: '',
        depth: ''
      },
      fbPage3:{
        page: '',
        pageId: '',
        status: '',
        depth: ''
      },
      fbPage4:{
        page: '',
        pageId: '',
        status: '',
        depth: ''
      },
      fbPage5:{
        page: '',
        pageId: '',
        status: '',
        depth: ''
      },
      category: '',
      pagesToFetch: []
    };
  },
  methods:{
    addShownInputs: function(){
      if(this.show <= 4){
        this.show = this.show+1;
      }else if(this.show >= 5){
        this.addButtonDisabled = true
      }
    },
    getFbPageId1: function(){
      axios.get(`http://ec2-35-160-85-138.us-west-2.compute.amazonaws.com:3000/status?url=`+this.fbPage1.page)
      .then(response => {
        this.fbPage1.pageId = response.data.id
        this.fbPage1.status = response.data.status
        if(response.data.id != null){this.pagesToFetch.push(response.data.id);}
        this.getCategories()
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    getFbPageId2: function(){
      axios.get(`http://ec2-35-160-85-138.us-west-2.compute.amazonaws.com:3000/status?url=`+this.fbPage2.page)
      .then(response => {
        this.fbPage2.pageId = response.data.id
        this.fbPage2.status = response.data.status
        if(response.data.id != null){this.pagesToFetch.push(response.data.id);}
        this.getCategories()
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    getFbPageId3: function(){
      axios.get(`http://ec2-35-160-85-138.us-west-2.compute.amazonaws.com:3000/status?url=`+this.fbPage3.page)
      .then(response => {
        this.fbPage3.pageId = response.data.id
        this.fbPage3.status = response.data.status
        if(response.data.id != null){this.pagesToFetch.push(response.data.id);}
        this.getCategories()
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    getFbPageId4: function(){
      axios.get(`http://ec2-35-160-85-138.us-west-2.compute.amazonaws.com:3000/status?url=`+this.fbPage4.page)
      .then(response => {
        this.fbPage4.pageId = response.data.id
        this.fbPage4.status = response.data.status
        if(response.data.id != null){this.pagesToFetch.push(response.data.id);}
        this.getCategories()
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    getFbPageId5: function(){
      axios.get(`http://ec2-35-160-85-138.us-west-2.compute.amazonaws.com:3000/status?url=`+this.fbPage5.page)
      .then(response => {
        this.fbPage5.pageId = response.data.id
        this.fbPage5.status = response.data.status
        if(response.data.id != null){this.pagesToFetch.push(response.data.id);}
        this.getCategories()
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    buildCategories: function(){
      var pagesToFetch = []
      if(this.fbPage1.pageId){pagesToFetch.push(this.fbPage1.pageId)}
        if(this.fbPage2.pageId){pagesToFetch.push(this.fbPage2.pageId)}
          if(this.fbPage3.pageId){pagesToFetch.push(this.fbPage3.pageId)}
            if(this.fbPage4.pageId){pagesToFetch.push(this.fbPage4.pageId)}
              if(this.fbPage5.pageId){pagesToFetch.push(this.fbPage5.pageId)}
                return pagesToFetch
            },
            getCategories: function(){
              var pagesToFetch = this.buildCategories()
              this.categories = []
              axios.post('http://ec2-35-160-85-138.us-west-2.compute.amazonaws.com:3000/categories',{
                pages: pagesToFetch
              })
              .then(response => {
                this.categories = response.data
              })
              .catch(e => {
                this.errors.push(e)
              })
            },
            pagesToAnalyse: function(){
              var pagesToAnalyse = []
              if(this.fbPage1.pageId && this.fbPage1.depth && this.fbPage1.pageId){
                var obj = {};
                obj["id"] = this.fbPage1.pageId;
                obj["depth"] = this.fbPage1.depth;
                pagesToAnalyse.push(obj)
              }

              if(this.fbPage2.pageId && this.fbPage2.depth && this.fbPage2.pageId){
                var obj = {};
                obj["id"] = this.fbPage2.pageId;
                obj["depth"] = this.fbPage2.depth;
                pagesToAnalyse.push(obj)
              }

              if(this.fbPage3.pageId && this.fbPage3.depth && this.fbPage3.pageId){
                var obj = {};
                obj["id"] = this.fbPage3.pageId;
                obj["depth"] = this.fbPage3.depth;
                pagesToAnalyse.push(obj)
              }

              if(this.fbPage4.pageId && this.fbPage4.depth && this.fbPage4.pageId){
                var obj = {};
                obj["id"] = this.fbPage4.pageId;
                obj["depth"] = this.fbPage4.depth;
                pagesToAnalyse.push(obj)
              }

              if(this.fbPage5.pageId && this.fbPage5.depth && this.fbPage5.pageId){
                var obj = {};
                obj["id"] = this.fbPage5.pageId;
                obj["depth"] = this.fbPage5.depth;
                pagesToAnalyse.push(obj)
              }

              return pagesToAnalyse
            },
            analyse: function(event){
              if (event) event.preventDefault()

                var obj = {};
              obj["category"] = this.category;
              obj["pages"] = this.pagesToAnalyse();

                // Store
                this.$cookie.set('query', JSON.stringify(obj), 1);
                location.href = '#/results';
              }
            }
          };
        </script>

        <style lang="less" scoped>
          #landing{
            min-height: 780px;
            padding-top: 50px;
            h1{
      //text-align: center;
      text-transform: uppercase;
      font-size: 90px;
      margin-bottom: 50px;
    }
    #form-nice{
      margin-top: -100px;
    }

    #page-status{
      font-size: 30px;
      padding-top: 10px;
      .check{
        color: #21ba45;
      }
      .warning  {
        color: #eaae00;
      }
      .remove{
        color: #d01919;
      }
    }
    #startAnalysisButton{
      margin-left: -11px;
    }
    #plusButton{
      margin-left: -144px;
    }
  }
</style>