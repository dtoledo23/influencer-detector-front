import React from 'react';
import Roster from './Roster';
import ChartGraph from './ChartGraph';
class Grafo extends React.Component {
   render() {
      return (
       <div>
       <div className="container">
       <div className="row">
       <div className="col-sm-5">
       <Roster/>
       </div>
       <div className="col-sm-7" id="grafo">
          <ChartGraph/>
       </div>
       </div>
       </div>
       </div>
       );
    }
 }

 export default Grafo;
