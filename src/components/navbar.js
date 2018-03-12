import React, { Component, Fragment} from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';


class Navbar extends Component {

    state = {
        class: "none stuff",
        width: window.innerWidth,
    }
    
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        if (this.state.width > 699) {
            this.setState({
                class: "none stuff",
                width: window.innerWidth  
            })
        } else {
            this.setState({ width: window.innerWidth });
        }
      };

      toggle = () => {
        if (this.state.class === "none stuff" && window.innerWidth <= 700) {
           this.setState({
              class: "heading stuff"
            }) 
        } else if (this.state.class === "heading stuff" && window.innerWidth <= 700) {
           this.setState({
              class: "heading2 stuff"
            })
        } else if (this.state.class === "heading2 stuff" && window.innerWidth <= 700) {
           this.setState({
              class: "heading stuff"
            })
        }
        
        }

    render() {
        return (
        <Fragment>
            <header> 
                <nav className="flex-nav">
                    <ul class="top-bar">
                        <li onClick={this.toggle} class="nav-item2">JW</li>
                        <li><a target="_blank" className="nav-item" href="https://github.com/jwolfe890">GITHUB</a></li>
                        <li><a target="_blank" className="nav-item" href="https://medium.com/@johnwolfe820">BLOG</a></li>
                        <li><a target="_blank" className="nav-item" href="https://www.linkedin.com/in/johnmwolfe/">LINKEDIN</a></li>
                        <li><a target="_blank" className="nav-item" href="https://twitter.com/johnwolfe820">TWITTER</a></li>
                        <li><a target="_blank" className="nav-item" href="mailto:jwolfe890@gmail.com">CONTACT ME</a></li>
                    </ul>
                </nav>
            </header> 

                        <ul class={this.state.class}>
                            <li><a target="_blank" href="https://github.com/jwolfe890">GITHUB</a></li>
                            <li><a target="_blank" href="https://medium.com/@johnwolfe820">BLOG</a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/johnmwolfe/">LINKEDIN</a></li>
                            <li><a target="_blank" href="https://twitter.com/johnwolfe820">TWITTER</a></li>
                            <li><a target="_blank" href="mailto:jwolfe890@gmail.com">CONTACT ME</a></li>
                        </ul>    

        </Fragment>
        );
    }
}

export default Navbar;






