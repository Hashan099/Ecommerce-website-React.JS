import React from "react";
import "./Contact.scss";



const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button> Subscribe to NewsLetter</button>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
