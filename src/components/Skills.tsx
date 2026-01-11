import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLinux } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const labelsFirst = [
    "React",
    "Node.js",
    "ASP.NET Core",
    "ASP.NET Identity",
    "Python",
    "C#",
    "Flask",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Kotlin",
    "Android Studio",
    "SQL",
    "SQLite",
    "Postman"

];

const labelsSecond = [
    "Kali Linux",
    "Wireshark",
    "VMware Workstation",
    "Powershell",
    "Nmap",
    "Metasploit",
    "John the Ripper",
    "Hydra",
    "SQLmap",
    "Netcat",
    "Rspamd",
    "Autopsy"
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built multiple web and mobile applications using modern technologies such as React and Flask, with a strong proficiency in frontend and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLinux} size="3x"/>
                    <h3>Cybersecurity</h3>
                    <p>Through my specialisation and certifications, I have gained strong skills in designing secure system architecture, forensics, as well as penetration testing principles.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;