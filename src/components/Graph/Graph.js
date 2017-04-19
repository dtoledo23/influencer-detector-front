import React from 'react';
import Roster from '../Roster';

import './graph.css'

const Graph = (props) => {
  return (
    <div>
       <div className="container">
       <div className="row">
       <div className="col-sm-5">
       <Roster/>
       </div>
       <div className="col-sm-7" id="grafo">
       </div>
       </div>
       </div>
       </div>
  );
};

export default Graph