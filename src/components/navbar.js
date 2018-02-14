import React, { Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = props => {
  return (
      <Fragment>
        <header> 
            <div className="logo-image">
                <img className="logo-img" src={require("../images/logo.jpg")} alt="Mountain View" />
            </div>
            <nav className="flex-nav">
                <ul>
                    <li><NavLink className="nav-item" to="/questions/new">SERVICES</NavLink></li>
                    <li><NavLink className="nav-item" to="/questions">COMPANY</NavLink></li>
                    <li><NavLink className="nav-item" to="/questions/new">STUFF</NavLink></li>
                    <li><NavLink className="nav-item" to="/questions/new">THINGS</NavLink></li>
                    <li><NavLink className="nav-item" to="/questions/new">ITEMS</NavLink></li>
                </ul>              
            </nav>
        </header>
    </Fragment>
  );
}
 
export default Navbar;




