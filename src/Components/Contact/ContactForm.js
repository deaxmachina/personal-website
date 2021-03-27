import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <>
      <div className="contact__title-container">
        <div className="contact__title-background"></div>
        <h1 className="contact__title-text">Contact</h1>
      </div>
      
      <div id="contact__contact-form-container">
        <form id="contact__contact-form">      
          <label className="contact__label" for="name">Name</label><br />
          <input name="name" type="text" id="contact__name" name="name" className="contact__input" placeholder="Your name or what you'd like to be called" />  

          <label className="contact__label" for="email">Email</label><br />
          <input name="email" type="text" id="contact__email" name="email" className="contact__input" placeholder="Email that I can reach you at" />

          <label className="contact__label" for="message">Message</label><br />
          <textarea name="text" id="contact__message" name="message" className="contact__input" placeholder=""></textarea>
          
          <input type="submit" id="contact__submit-btn" value="SUBMIT"/>
        </form>
      </div>
    </>
  )
};

export default ContactForm; 
