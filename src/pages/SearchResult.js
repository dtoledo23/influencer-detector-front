import React, { Component } from 'react';
import Grafo from '../components/Graph/Graph';
import PieCharts from '../components/PieChart/PieChart';

class SearchResult extends Component {
  render() {
    return (
      <div>
        <h1>Results</h1>
        <Grafo/>
        <PieCharts/>
      </div>
    );
  }
}

export default SearchResult;
