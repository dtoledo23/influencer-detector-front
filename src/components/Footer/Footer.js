import React from 'react'
import './footer.css'

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2017 Influencer Detector.</p>
        <ul className="list-inline">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer