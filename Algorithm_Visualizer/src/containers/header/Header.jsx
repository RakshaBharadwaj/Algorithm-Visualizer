import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Learn Something amazing with Algorithm Visualizer.</h1>
      <p>
      Say bye-bye to the old fashioned learning.
      Explore the art of visual learning experience with our beautiful animated visuals helps to understand 
      and grasp tough and important concepts like algorithms. 
  

      </p>

      <div className="gpt3__header-content__input">
       
        <button type="button"><a href="#btn"> Get Started !</a></button>
        
      </div>

    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
