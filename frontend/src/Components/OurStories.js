import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Stylesheets/OurStories.css';

const OurStories = () => {
  const [stories, setStories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/stories')
      .then(response => {
        setStories(response.data);
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
      });
  }, []);

  const visibleStories = stories.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < stories.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div className="our-stories">
      <h2>Success Stories</h2>
      <p>Our success stories speak volumes about the power of personalized matchmaking. Through our careful approach and attention to detail, we’ve helped many individuals find their perfect match, turning dreams of lasting love into beautiful realities.</p>
      <div className="carousel-container">
        <button className="nav-button left" onClick={handlePrev} disabled={startIndex === 0}>&#9665;</button>
        <div className="stories-container">
          {visibleStories.map((story) => (
            <div key={story.id} className="story-card">
              <img src={story.image} alt={story.name} className="story-image" />
              <div className="story-content">
                <h3>{story.name}</h3>
                <p>{story.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={handleNext} disabled={startIndex + 3 >= stories.length}>&#9655;</button>
      </div>
    </div>
  );
};

export default OurStories;
