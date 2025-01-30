import React from 'react';
import OurStories from './OurStories';
import Services from './Services';
import Faqs from './Faqs';
import AboutUs from './AboutUs';
import "./Stylesheets/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="home" className="image-section">
        <img src="/bride_groom_img.jpg" alt="Bride and Groom" className="background-image" />
        <div className="image-overlay">
          <h2>Christian Matrimony: Trusted Platform for Brides and Grooms</h2>
          <p>
            It all starts with finding the right match, guided by faith, values, and a shared vision for the future.
            Our platform helps you connect with like-minded individuals who are ready to begin a beautiful journey together.
            Join us today and experience a safe, supportive, and spiritually enriching path to marriage.
          </p>
        </div>
      </section>

      {/* Join Community Section */}
      <section id="join-community" className="join-community">
        <h2>Join Our Community</h2>
        <p>Become a part of a faith-driven community dedicated to helping you find your perfect match.</p>
      </section>

      {/* Our Stories Section */}
      <section id="services">
        <Services />
      </section>
      <OurStories />

      {/* FAQs Section */}
      <section id="faqs">
        <Faqs />
      </section>

      {/* About Us Section */}
      <section id="about-us">
        <AboutUs />
      </section>
    </div>
  );
};

export default HomePage;
