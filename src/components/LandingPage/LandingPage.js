import React from 'react'
import SearchButton from '../SearchButton/SearchButton';
import './landingpage.css'

const LandingPage = (props) => {
 return (
   <div>
   <div className="col-md-6 col-md-offset-3" >
   <div className="header-content" id="contenedor">
   <div className="header-content-inner">
   <h1 id="brand-name">Influencer Detector</h1>
   <div className="form-inline">
   <div className="form-group">
   <SearchButton/>
   </div>
   </div>
   </div>
   </div>
   </div>
   <div className="col-md-3"></div> 
   </div>
   );
};

export default LandingPage
