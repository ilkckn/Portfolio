import React from "react";
import './Contact.css'

function Contact() {
  return (
    <div className="contactContainer" id="contact">
      <h1>Hello,</h1>
      <p className="getInTouch">
        Need a beautiful, well-structured website that you can own and maintain
        yourself? Get in touch.
      </p>
      <div className="email">
        <p>Email:</p>
        <a href="cekcen14@gmail.com">cekcen14@gmail.com</a>
      </div>
      <div className="onTheInternet">
        <p>On the internet:</p>
        <div className="links">
          <a href="https://www.linkedin.com/in/musacekcen-webdeveloper/">LinkedIn</a>
          <a href="https://github.com/ilkckn?tab=overview&from=2024-05-01&to=2024-05-23">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
