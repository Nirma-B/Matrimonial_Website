import React from 'react';
import './Stylesheets/Services.css'; 


const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h2>Why Choose us?</h2>
        <h1>We Provide Best Elite Christian Matchmaking Service</h1>
        <p>Elite matchmaking crafted to connect you with exceptional partners who truly align with you.</p>
      </div>
      <div className="services-cards">
        <div className="service-card">
          <h3>1</h3>
          <h4>Personalized Consultation</h4>
          <p>Begin with a detailed one-on-one consultation to understand your preferences, values, lifestyle, and expectations.</p>
        </div>
        <div className="service-card">
          <h3>2</h3>
          <h4>Profile Curation and Verification</h4>
          <p>Our expert matchmakers handpick matches based on compatibility, shared values, and long-term goals.</p>
        </div>
        <div className="service-card">
          <h3>3</h3>
          <h4>Tailored Match Selection</h4>
          <p>Provide continuous support, gather feedback, and fine-tune suggestions to ensure a seamless and fulfilling experience.</p>
        </div>
        <div className="service-card">
          <h3>4</h3>
          <h4>Ongoing Support and Feedback</h4>
          <p>Dedicated assistance with regular updates, personalized feedback, and continuous support throughout your journey.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
