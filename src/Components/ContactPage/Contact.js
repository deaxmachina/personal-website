import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";


const ContactTitle = () => {
  return (
    <>
      <div id="contact__contact-container">
        <div id="contact__contact-text" className="large-text">Contact</div>
      </div>
    </>
  )
}

const ContactBox = () => {
  return (
    <>
      <div id="contact__contact-box">
        <div id="contact__contact-content">
          <div id="contact__text-title" className="body-text-large">Interested in working together?</div>
          <div className="body-text-normal">
            <a href="mailto:toomi.maya@gmail.com" id="contact__contact-email">Drop me an email</a> at 
            hello@deabankova.com or find me on social media. If you have any comments, suggestions or feedback, 
            I'm always happy to chat.
          </div>
        </div>
      </div>
    </>
  )
}

const ContactSocial = () => {
  return (
    <>
      <div id="contact__social-container">
        <div id="contact__social-container-box">
          <FontAwesomeIcon icon={faTwitter} className="contact__social-icon-s" id="contact__social-twitter-s" />
          <FontAwesomeIcon icon={faLinkedin} className="contact__social-icon-s" id="contact__social-linkedin-s" />
          <FontAwesomeIcon icon={faGithub} className="contact__social-icon-s" id="contact__social-github-s" />
        </div>
      </div>
    </>
  )
}



const Contact = () => {
  return (
    <section id="contact-page">
      <ContactTitle />
      <ContactBox />
      <ContactSocial />
      <h1>Text</h1>
    </section>
  )
};

export default Contact;