import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div class="wrapper">
            <div class="wrapper2 top">
                <div class="item">CONTACT</div>
                <div class="social2 item2">Email me at: <a class="em" href="mailto:jwolfe890@gmail.com?">jwolfe890@gmail.com</a></div>
            </div>
            <div class="wrapper2 bottom">
                <div class="item">FOLLOW</div>
                <div class="social2 item2">Check me out on <a href="https://github.com/jwolfe890">Github</a>, <a href="https://www.linkedin.com/in/johnmwolfe/">Linkedin</a>, <a href="https://twitter.com/johnwolfe820">Twitter</a>, and <a  href="https://medium.com/@johnwolfe820">Medium.</a></div>
            </div>
        </div>
    );
};

export default Footer;