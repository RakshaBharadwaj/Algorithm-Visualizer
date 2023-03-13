import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Sorting Algorithm',
    text: ' Arranging a group of data in a particular manner according to the requirement. Generally sorting algorithms are used to sort groups of data in an increasing or decreasing manner.',
  },
  {
    title: 'Searching Algorithm',
    text: 'Used for searching elements or groups of elements from a particular data structure. They can be of different types based on their approach or the data structure in which the element should be found.',
  },
 
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text"> Types of Algorithms </h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
