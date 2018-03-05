import React from 'react';
import './About.css';

const About = () => {
    return (
        <div class="aboutCont">
            <h2 class="about1">ABOUT ME</h2>
            <br/>
                <br/>
            <div className="about">
                <div className="things">
                    <img className="john" src="http://res.cloudinary.com/dszmqm6le/image/upload/v1519519186/john.jpg" />
                </div>
                <div className="things2">
                    <span>Hello, I'm John! I'm a full stack web developer with experience in JavaScript and Ruby on Rails. I bring strong skills in research, project management, and solving complex problems that help innovative companies attract users and drive growth.</span> 
                        <br/>
                        <br/>
                    <span>I work relentlessly to stay on the cutting edge of software development, and have a talent for learning new technologies efficiently and effectively.</span>
                </div>
            </div>
        </div>
    );
};

export default About;






