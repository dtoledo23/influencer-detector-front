import React from 'react';
import CategoriesDropdown from './CategoriesDropdown';
import BotonBusqueda from './BotonBusqueda';

class LandingPage extends React.Component {
   render() {
      return (
        <div>
         <div className="col-md-6 col-md-offset-3" >
      <div className="header-content" id="contenedor">
            <div className="header-content-inner">
                  <h1 id="brand-name">Influencer Detector</h1>
                  <div className="form-inline">
                        <div className="form-group">
                           <CategoriesDropdown/>
                        </div>
                        <div className="form-group">
                           <BotonBusqueda/>
                        </div>
                  </div>
            </div>
      </div>
</div>
<div className="col-md-3"></div> 
</div>
      );
   }
}

export default LandingPage;
