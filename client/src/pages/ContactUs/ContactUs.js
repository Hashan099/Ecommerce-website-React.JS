import React, { useState } from "react";
import "./ContactUs.scss";
import Contact from "../../components/Contact/Contact";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const recipientEmail = "CeleneClothing@gmail.com";
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="contact-us">
        <div className="contact-header">
          <h1>Drop Us a Line</h1>
          <p>Feel free to get in touch with us. We'd love to hear from you!</p>
        </div>

        <div className="contact-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={10} 
              cols={50}
            ></textarea>
          </div>
          <button class ="btn" type="button" onClick={handleSendEmail}>
            Send Message
          </button>
        </div>

        <div className="contact-info">
        
        </div>

        <div className="newsletter-signup"></div>
      </div>

      <Contact />
    </>
  );
};

export default ContactUs;
