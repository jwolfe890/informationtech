import React, { Component, Fragment} from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

const Navbar = props => {
  return (
      <Fragment>
        <header> 
            <nav className="flex-nav">
                <ul>
                    <li className="nav-item2">JW</li>
                    <li><a className="nav-item" href="https://github.com/jwolfe890">GITHUB</a></li>
                    <li><a className="nav-item" href="https://medium.com/@johnwolfe820">BLOG</a></li>
                    <li><a className="nav-item" href="https://www.linkedin.com/in/johnmwolfe/">LINKEDIN</a></li>
                    <li><a className="nav-item" href="https://twitter.com/johnwolfe820">TWITTER</a></li>
                    <li><a className="nav-item" href="mailto:jwolfe890@gmail.com">CONTACT ME</a></li>
                </ul>              
            </nav>
        </header>
    </Fragment>
  );
}
 
export default Navbar;







