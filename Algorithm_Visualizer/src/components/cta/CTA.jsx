import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>How to get Started ?</h3>
      <ul>
        <li>Select the required Array size.</li>
        <li>Set the Animation Speed.</li>
        <li>Generate a new Array.</li>
        <li>Click on your favourite algorithm.</li>
        <li>Experience Visual learning !</li>

    </ul>
    </div>
    <div className="gpt3__cta-btn">
    <a href="#btn"><button type="button">Get Started</button></a>
    </div>
  </div>
);

export default CTA;
