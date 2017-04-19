import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
      <Navbar />
      <div className="container-fluid">
        {this.props.children}
      </div>
      <Footer />
    </div>
      );
  }
}

export default App;
