import React, { Component } from 'react';
import LandingPage from './LandingPage';
import Grafo from './Grafo';
import PieCharts from './PieCharts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
              <div className="row">
                    <LandingPage/>
              </div>
        </div>
        <Grafo/>
        <PieCharts/>
      </div>
      );
  }
}

export default App;
