import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactSocial = () => {
  return (
    <>
      <div className="contact__social-container">
        <div className="contact__social-background"></div>
        <FontAwesomeIcon icon={faTwitter} className="contact__social-icon" id="contact__social-twitter" />
        <FontAwesomeIcon icon={faLinkedin} className="contact__social-icon" id="contact__social-linkedin" />
        <FontAwesomeIcon icon={faGithub} className="contact__social-icon" id="contact__social-github" />
      </div>

      <svg width="0" height="0">
        <filter id='static-noise'>
          <feTurbulence type="fractalNoise" baseFrequency='3' result='noisy' numOctaves="100"/>
          <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
          <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
        </filter>
      </svg>
    </>
  )
};

export default ContactSocial;