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

const ContactDecoration = ({ id }) => {
  const blueColour = "#0D8383" 
  const purpleColour =  "#4E1B34" 
  const lightColour = "#ebebeb"
  const opacity = 0.5;

  return (
    <>
    <svg width="447" height="394" id={id}>
      <filter id="glow-contact">
        <feGaussianBlur stdDeviation="5.0" result='colouredBlur'/>
        <feMerge>
          <feMergeNode in='colouredBlur' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>

      <rect x="104" y="140" width="238" height="125" fill={lightColour} filter="url(#glow-contact)" fill-opacity={opacity} />
      <rect x="172.547" y="51" width="242" height="242" transform="rotate(45.48 172.547 51)" fill={blueColour} fill-opacity={opacity}/>
      <rect x="270.2" width="242" height="242" transform="rotate(43.3754 270.2 0)" fill={purpleColour} fill-opacity={opacity}/>
    </svg>
    </>
  )
};



const Contact = () => {
  return (
    <section id="contact-page">
      <ContactTitle />
      <ContactBox />
      <ContactSocial />
      <ContactDecoration id="contact__decoration-l"/>
      <ContactDecoration id="contact__decoration-r"/>
      <h1>Text</h1>
    </section>
  )
};

export default Contact;