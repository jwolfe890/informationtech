import React, { Component, Fragment} from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                    <li><a className="nav-item" href="https://github.com/jwolfe890">GITHUB</a></li>
                    <li><a className="nav-item" href="https://medium.com/me/stories/public">BLOG</a></li>
                    <li><a className="nav-item" href="https://www.linkedin.com/in/johnmwolfe/">LINKEDIN</a></li>
                    <li><a className="nav-item" href="https://twitter.com/johnwolfe820">TWITTER</a></li>
                    <li><a className="nav-item" href="https://github.com/jwolfe890">CONTACT ME</a></li>
                </ul>              
            </nav>
        </header>
    </Fragment>
  );
}
 
export default Navbar;




