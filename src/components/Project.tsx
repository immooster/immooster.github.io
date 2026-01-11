import React from "react";
import project1 from '../assets/images/project-ecohaven.png';
import project2 from '../assets/images/project-cybersecurity-architechture.png';
import project3 from '../assets/images/project-market-research.png';
import project4 from '../assets/images/project-storywriting.png';
import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.figma.com/design/TewqV7xRFJeVXfBGl8vju5/Storywriting-Tool-App?node-id=0-1&p=f" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/TewqV7xRFJeVXfBGl8vju5/Storywriting-Tool-App?node-id=0-1&p=f" target="_blank" rel="noreferrer"><h2>Story-Writing Tool App</h2></a>
                <div className="flex-chips">
                    <Chip className='chip' label="Ongoing" />
                </div>
                <p>
                    A mobile app I'm currently solo-developing to help writers organise and manage story ideas efficiently.
                    Developed with Flutter and Dart.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/Ecohaven/ECO-OFFICAL-HAVEN" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Ecohaven/ECO-OFFICAL-HAVEN" target="_blank" rel="noreferrer"><h2>Ecohaven - E-commerce Event Booking Platform</h2></a>
                <div className="flex-chips">
                    <Chip className='chip' label="Apr - Aug 2024" />
                </div>
                <p>
                    Web app connecting local clubs and organisers for eco-friendly events. 
                </p>
                <p>
                    Role: Developed account management system including secure registration/login, password reset, and role-based access control.  
                </p>
                <p>
                    Features: Node.js backend, React frontend, MySQL database, JWT authentication, 2FA email verification, secure password hashing, and user role management.
                </p>
            </div>

            <div className="project">
                <a href="https://drive.google.com/drive/folders/12pNVbWfjXh_IKqh10nwau7GiQhj32HS5?usp=sharing" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/drive/folders/12pNVbWfjXh_IKqh10nwau7GiQhj32HS5?usp=sharing" target="_blank" rel="noreferrer"><h2>Cybersecurity Architecture Project</h2></a>
                <div className="flex-chips">
                    <Chip className='chip' label="Apr - Aug 2025" />
                </div>
                <p>
                    Designed a cybersecurity system to protect healthcare data from ransomware, phishing, and network attacks.
                </p>
                <p>
                    Role: Team lead; focused on phishing attack mitigation using Rspamd with its Neural Module and Quad9 for DNS security. 
                </p>
                <p>
                    Features: Email filtering algorithms, machine learning for spam detection, designed system architecture for layered security.  
                </p>
            </div>

            <div className="project">
                <a href="https://drive.google.com/drive/folders/1fn6gZfLB7zYnq2LKgmjF1m-JIQm8F-Im?usp=sharing" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/drive/folders/1fn6gZfLB7zYnq2LKgmjF1m-JIQm8F-Im?usp=sharing" target="_blank" rel="noreferrer"><h2>Market Research Report: Global Deforestation Monitoring System</h2></a>
                <div className="flex-chips">
                    <Chip className='chip' label="Oct 2024 - Jan 2025" />
                </div>
                <p>
                    This report proposes a Global Deforestation Monitoring System (GDMS) to tackle Climate Change using emerging technologies such as
                    Trust Technologies, AI and satellite data.
                </p>
                <p>
                    Role: Team lead; focused on researching the use of Trust Technologies (Blockchain) in the GDMS.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;