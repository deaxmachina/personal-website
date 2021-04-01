import React from "react";
import "./Contact.css";
import ContactTitle from "./ContactTitle";
import ContactBox from "./ContactBox";
import ContactSocial from "./ContactSocial";
import ContactDecoration from "./ContactDecoration";


const Contact = () => {
  return (
    <section id="contact-page">
      <ContactTitle />
      <ContactBox />
      <ContactSocial />
      <ContactDecoration id="contact__decoration-l"/>
      {/*<ContactDecoration id="contact__decoration-r"/>*/}
    </section>
  )
};

export default Contact;