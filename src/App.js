import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css';

const App = (props) => {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default App;
