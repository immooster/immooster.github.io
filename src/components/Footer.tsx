import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/immooster" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/moira-cabuhat-31b08b2b2" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:moiracabuhat@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>© 2026 Moira Cabuhat. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;