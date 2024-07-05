import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <div className="mainpage-container">
      <h2>Quiz</h2>
      <div className="start-button-container">
        <Link to={`/topics`} className="start-link">
          <h1 className="start-button">Start</h1>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
