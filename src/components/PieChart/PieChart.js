import React from 'react'
import './piechart.css'

const PieChart = (props) => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-sm-7" id="chart">
      <h1>Chart 1</h1>
    </div>
    <div className="col-md-5" id="chart2">
      <h1>Chart 2</h1>
    </div>
  </div>
</div>
  );
};

export default PieChart