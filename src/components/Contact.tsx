import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>I'm always open to discussing new opportunities or collaborating with like-minded individuals. Feel free to reach out via my socials!</p>
          
          <div className="social_icons">
            <a href="https://github.com/immooster" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/moira-cabuhat-31b08b2b2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:moiracabuhat@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;