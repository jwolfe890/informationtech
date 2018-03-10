import React from 'react';
import './About.css';

const About = () => {
    return (
        <div class="aboutCont">
            <h2 class="about1"></h2>
            <br/>
                <br/>
            <div className="about">
                <div className="things">
                    <img className="john" src="http://res.cloudinary.com/dszmqm6le/image/upload/v1519519186/john.jpg" />
                </div>
                <div className="things2">
                    <span>Hello, I'm John! I'm a fullstack web developer with experience in JavaScript, React, Ruby on Rails, CSS, and Responsive Design. I bring strong skills in research, project management, and complex problems solving that helps innovative companies attract users and drive growth.</span> 
                        <br/>
                        <br/>
                    <span>I work hard to stay on the cutting edge of software development, and I have a passion for learning new information. Check out some of my projects below and don't hesitate to <a class="abt" href="mailto:jwolfe890@gmail.com?">contact me</a> for your next project!</span>
                </div>
            </div>
        </div>
    );
};

export default About;






