import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Bubble sort',
    text: ' The method works by examining each set of adjacent elements in the string, from left to right, switching their positions if they are out of order.Worst case complexity is O(n^2).',
  },
  {
    title: 'Insertion sort',
    text: 'Insertion sort is a sorting algorithm in which the elements are transferred one at a time to the right position. In other words, an insertion sort helps in building the final sorted list, one item at a time, with the movement of higher-ranked elements.Worst case complexity is O(n^2).',
  },
  {
    title: 'Selection sort',
    text: 'Selection sort works by taking the smallest element in an unsorted array and bringing it to the front. You will go through each item (from left to right) until you find the smallest one. The first item in the array is now sorted, while the rest of the array is unsorted.Worst case complexity is O(n^2).',
  },
  {
    title: 'Linear search',
    text: 'A linear search is the simplest approach employed to search for an element in a data set. It examines each element until it finds a match, starting at the beginning of the data set, until the end. The search is finished and terminated once the target element is located.Worst case complexity is O(n).',
  },
  {
    title: 'Binary search',
    text: 'Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you have narrowed down the possible locations to just one.Worst case complexity is O(log n).',
  },
];

const Features1 = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text"> Searching and Sorting algorithms </h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features1;
