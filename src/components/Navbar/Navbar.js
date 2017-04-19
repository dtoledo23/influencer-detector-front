import React from 'react'

import './navbar.css'

// TODO: Implement Navbar
const Navbar = (props) => {
	return (
		<nav className="navbar navbar-default">
		<div className="container-fluid">
		<ul className="nav navbar-nav">
		
		<li><a href="#">I…D…</a></li>
		</ul>

		<ul className="nav navbar-nav navbar-right">
		<li><a href="#">About Us</a></li>
		</ul>
		</div>
		</nav>
		);
};

export default Navbar