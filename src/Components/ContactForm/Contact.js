import React from "react";
import "./Contact.css";
import ContactDecoration from "./ContactDecoration";
import ContactSocial from "./ContactSocial";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <section id="contact">
      <ContactDecoration />
      <ContactForm />
      <ContactSocial/>
    </section>
  )
};

export default Contact;