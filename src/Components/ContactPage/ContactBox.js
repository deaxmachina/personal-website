import React from "react";


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
};

export default ContactBox;