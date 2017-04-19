import React from 'react';
import './CategoriesDropdown.css';

class CategoriesDropdown extends React.Component {
   render() {
      var categories = [
         {id: 1, name: 'Categoria1'},
         {id: 2, name: 'Categoria2'},
         {id: 3, name: 'Categoria3'},
         {id: 4, name: 'Categoria4'},
      ];
      var categoriesList = categories.map(function(category){
         return (
               <li key={category.id} className="categoryItem"><a href="#">{category.name}</a></li>
            );
      })

      return (
      <div className="dropdown">
      <button className="btn btn-default dropdown-toggle btn-block btn-xl" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Choose one Category 
      <span className="caret"></span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" > 
         { categoriesList }
         </ul>
         </div>
         );
      }
   }

   export default CategoriesDropdown;
