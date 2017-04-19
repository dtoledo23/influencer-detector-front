import React, { Component } from 'react';
import LandingPage from '../components/LandingPage';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container-fluid">
          <div className="row">
            <LandingPage/>
          </div>
        </div>
      </div>
      );
  }
}

export default Home;
