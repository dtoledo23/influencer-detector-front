<template>
  <div class="ui grid" id="landing">
    <div class="sixteen wide column">
      <h1>{{ msg }}</h1>
      <div class="ui grid">
        <div class="ten wide column ui form">
          <input type="text" name="first-name" placeholder="Facebook Page" v-model="fbPage.page" @change="searchUrl(tempDB.tempDBSaved)">
        </div>
        <div class="four wide column ui form">
          <div class="ui form">
            <div class="field">
              <select class="ui dropdown" v-model="fbPage.depth">
                <option value="">Depth</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>

        <div class="two wide column">
          <div class="" id="page-status">
            <i class="check circle icon" v-if="pageStatus == 'check'"></i>
            <i class="warning sign icon" v-if="pageStatus == 'warning'"></i>
            <i class="remove circle icon" v-if="pageStatus == 'remove'"></i>
          </div>
        </div>
      </div>

      
      <div class="ui grid">
        <div class="right floated two wide column ui form">
          <div class="ui animated fade green fluid button" tabindex="0" id="plusButton">
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
            <select class="ui dropdown" v-model="categories">
              <option value="">Categories</option>
            </select>
          </div>
        </div>
        <div class="right floated four wide column ui form">
          <button class="ui primary button" id="startAnalysisButton" >
            Start Analysis
          </button>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
  export default {
    name: 'Landing',

    data () {
      return {

        classObject: {
          active: false,
          'text-danger': false
        },

        msg: 'Influencer Detector',
        pageStatus: '',
        tempDB: {
          tempDBSaved:[{url:"https://www.facebook.com/MALUMAMUSIK/",Value:"1"},{
            url:"https://www.facebook.com/LeonLarregui/",Value:"2"},{url:"https://www.facebook.com/Barezzito.GDL/",Value:"3"}],
            tempDBValid:[{url:"https://www.facebook.com/toledo/",Value:"1"},{
              url:"https://www.facebook.com/monserrat/",Value:"2"},{url:"https://www.facebook.com/victor/",Value:"3"}]
            },

            categoriesTemp:['it', 'party', 'alcohol', 'M&M'],
            fbPage:{
              page: '',
              depth: ''
            },
            categories: ''
          };
        },
        methods:{

          searchUrl: function(){
            this.checkSaved();
            this.checkValid();

            if (this.checkValid()==true) {
              this.pageStatus = 'warning'
            }else if (this.checkSaved()==true){
              this.pageStatus = 'check'
            }else{
              this.pageStatus = 'remove'
            }
          },
          checkValid:function(){
            var query = this.fbPage.page;
            var valObj = this.tempDB.tempDBValid.filter(function(elem){
              if(elem.url == query) 
                return elem
            });
            if(valObj.length > 0)
              return true;
            
          },
          checkSaved:function(){
            var query = this.fbPage.page;
            var valObj = this.tempDB.tempDBSaved.filter(function(elem){
              if(elem.url == query) 
                return elem
            });
            if(valObj.length > 0)
              return true;
            
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