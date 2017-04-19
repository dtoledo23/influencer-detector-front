import React, { Component } from 'react';
import Grafo from '../components/Grafo';
import PieCharts from '../components/PieCharts';

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
