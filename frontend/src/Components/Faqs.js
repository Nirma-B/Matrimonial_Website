import React, { useState } from 'react';
import './Stylesheets/Faqs.css'; 

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does it take to find a match?",
      answer: "The timeline can vary depending on your preferences and the matches available. Our focus is on quality over quantity, so while some clients find a match quickly, others may take more time as we work to ensure compatibility."
    },
    {
      question: "Is there a guarantee I will find a partner?",
      answer: "While we cannot guarantee a match, we are committed to doing everything possible to connect you with individuals who meet your criteria. Our goal is to provide you with meaningful opportunities to build a lasting relationship."
    },
    {
      question: "Do you offer dating or relationship coaching?",
      answer: "No, we do not offer dating or relationship coaching. Our focus is solely on providing personalized matchmaking services to connect you with compatible partners. However, we’re happy to provide basic advice or resources to help you make the most of your introductions"
    },
  ];

  return (
    <div className="faq-container">
      <h1>Faqs</h1>
      {faqData.map((faq, index) => (
        <div key={index}>
          <h2
            className={`faq-question ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggle(index)}
          >
            {faq.question}
          </h2>
          <p className={`faq-answer ${openIndex === index ? 'active' : ''}`}>
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
