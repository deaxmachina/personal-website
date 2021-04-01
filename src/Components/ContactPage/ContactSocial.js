import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactSocial = () => {
  return (
    <>
      <div id="contact__social-container">
        <div id="contact__social-container-box">
          <a href="https://twitter.com/DeaBankova" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="contact__social-icon-s" id="contact__social-twitter-s" />
          </a>
          <a href="https://www.linkedin.com/in/dbankova/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="contact__social-icon-s" id="contact__social-linkedin-s" />
          </a>
         <a href="https://github.com/deaxmachina" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="contact__social-icon-s" id="contact__social-github-s" />
         </a>
        </div>
      </div>
    </>
  )
};

export default ContactSocial;