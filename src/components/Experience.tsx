import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

function Experience() {
    return (
    <div className="container" id="experience">
        <div className="skills-container">
            <h1>My Journey</h1>
                <div className="experience">
                    <h2>1. Work Experience</h2>
                    <hr/>
                    <h3>Automation Tool Scripting & Development Intern - Synapxe (Sep 2025 - Feb 2026)</h3>
                    <ul>
                        <li>
                            Analysed operational workflows in the Medical Device & Operational Technology (MDOT) domain to identify automation and optimisation opportunities.
                        </li>
                        <li>
                            Developed automation prototypes with Excel VBA and Power Automate to reduce manual and recurring tasks.
                        </li>
                        <li>
                            Assisted in managing medical device vulnerability alerts (CVEs), gaining exposure to healthcare cybersecurity workflows.
                        </li>
                        <li>
                            Supported MDOT inventory data collection, validation, and reporting.
                        </li>
                        <li>
                            Designed dashboards for bi-monthly risk committee updates, consolidating device approval data and validating figures for accuracy.
                        </li>
                    </ul>
                </div>
                <div className="experience">
                    <h2>2. Education</h2>
                    <hr/>
                    <h3>Nanyang Polytechnic, Diploma in Information Technology (2023 - 2026)</h3>
                    <ul>
                        <li>
                            Specialisation in Cybersecurity
                        </li>
                        <li>
                            Director's List Award: Y1S1, Y1S2, Y2S1
                        </li>
                    </ul>
                </div>
                <div className="experience">
                    <h2>3. Certifications</h2>
                    <hr/>
                    <ul>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/specialization/Z8YAJBPUZZ5Q" target="_blank" rel="noreferrer">
                                Feb 2024: Google Cybersecurity Certificate Coursera
                            </a>
                        </li>
                    </ul>
                        
                </div>
        </div>
    </div>
    );
}

export default Experience;