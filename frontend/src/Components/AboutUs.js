import React from "react";
import "./Stylesheets/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-section">
        <h3>ABOUT US</h3>
        <p>
          Welcome to this exclusive portal known for its par excellence.
          Christian Matrimonial services. A number of Christian bride & 
          groom profiles are enlisted here. Join Free & Add your Christian 
          Matrimonial Profile Search for your dream Christian Brides & 
          Christian Grooms. Register Your Christian Matrimony Profile for FREE!
        </p>
      </div>
    
      <div className="trusted-section">
        <h3>Head Office</h3>
        <address>
          YT Matrimony and Events Management LLP<br />
          232, 5th Cross, 3rd Block, HRBR Layout,<br />
          Bangalore - 560043, Karnataka, India<br /><br/>
          
          <h3>Contact us</h3>
          Contact Us: +91 9206426692<br />
          Email: support@ytmatrimony.com
        </address>
      </div>
      <div className="follow-us-section">
        <h3>Follow Us</h3>
        <ul>
          <li>&gt; Facebook</li>
          <li>&gt; Instagram</li>
          <li>&gt; Youtube</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
