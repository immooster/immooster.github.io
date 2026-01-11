import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Skills.scss';

function About() {
    return (
    <div className="container" id="about">
        <div className="skills-container">
            <h1>About Me</h1>
            <p>
                Hi! I'm Moira, a 3rd-year Diploma in Information Technology student at Nanyang Polytechnic, specialising in Cybersecurity. 
                I have hands-on experience developing full-stack applications and applying cybersecurity principles to real-world projects. 
                I’m passionate about exploring emerging technologies and creating meaningful, secure solutions that make an impact. 
                I aim to further develop my technical expertise in Computer Science and Cybersecurity at university.
            </p>
            <p>
                Fun fact: I'm a digital artist and music creator during my free time.
            </p>
        </div>
    </div>
    );
}

export default About;