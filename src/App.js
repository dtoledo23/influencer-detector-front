import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Grafo from './components/Grafo';
import PieCharts from './components/PieCharts';

import 'bootstrap/dist/css/bootstrap.css';

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
