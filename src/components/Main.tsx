import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        
        <div className="content">
          
          <h1>Hi, I'm Moira!</h1>
          <p>
            IT student at Nanyang Polytechnic with 
            hands-on experience in Software Development and Cybersecurity.
          </p>

          <div className="social_icons">
            <a href="https://github.com/immooster" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/moira-cabuhat-31b08b2b2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:moiracabuhat@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/immooster" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/moira-cabuhat-31b08b2b2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:moiracabuhat@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;