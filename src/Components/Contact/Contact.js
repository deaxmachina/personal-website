import React, { useState } from "react";
import "./Contact.css";

const ContactDecoration = () => {
  return (
    <>
    <svg width="447" height="394" id="contact__decoration">
        <rect x="104" y="140" width="238" height="174" fill="#F0F0F0" fill-opacity="0.5"/>
        <rect x="172.547" y="51" width="242" height="242" transform="rotate(45.48 172.547 51)" fill="#0D8383" fill-opacity="0.5"/>
        <rect x="270.2" width="242" height="242" transform="rotate(43.3754 270.2 0)" fill="#4E1B34" fill-opacity="0.5"/>
      </svg>
    </>
  )
}


const Contact = () => {
  return (
    <>
    <section id="contact">
  <ContactDecoration />


      <div className="contact__title-container">
        <div className="contact__title-background"></div>
        <h1 className="contact__title-text">Contact</h1>
      </div>
      

    <div id="contact__contact-form-container">
      <form id="contact__contact-form">      
        <label className="contact__label" for="name">Name:</label><br />
        <input name="name" type="text" id="contact__name" name="name" className="contact__input" placeholder="Name" />  

        <label className="contact__label" for="email">Email:</label><br />
        <input name="email" type="text" id="contact__email" name="email" className="contact__input" placeholder="Email" />

        <label className="contact__label" for="message">Message:</label><br />
        <textarea name="text" id="contact__message" name="message" className="contact__input" placeholder="Message"></textarea>
        
        <input type="submit" id="contact__submit-btn" value="SUBMIT"/>
      </form>
    </div>



      <div className="contact__social-container">
        <div className="contact__social-background"></div>
        <h1 className="contact__social-text"></h1>
      </div>

      <svg width="0" height="0">
        <filter id='static-noise'>
          <feTurbulence type="fractalNoise" baseFrequency='3' result='noisy' numOctaves="100"/>
          <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
          <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
        </filter>
      </svg>



    </section>
    </>
  )
};

export default Contact;