import React, { Component } from "react";

// .. COMPONENTS .. //
import ButtonsBar from './components/ButtonsBar/ButtonsBar.jsx';
import ArrayBar from './components/ArrayBar/ArrayBar.jsx';
import RangeSlider from './components/RangeSliders/RangeSlider.jsx';
// .. HELPER FUNCTIONS .. //
import { randomIntFromInterval, playAudio,getInputValue } from './HelperFunctions.js';
// .. ALGORITHMS .. //
import BubbleSort from './SortingAlgorithms/BubbleSort/BubbleSort.js';
import SelectionSort from './SortingAlgorithms/SelectionSort/SelectionSort.js';
import InsertionSort from './SortingAlgorithms/InsertionSort/InsertionSort.js';
import LinearSearch from './SortingAlgorithms/LinearSearch/LinearSearch.js';
import BinarySearch from './SortingAlgorithms/BinarySearch/BinarySearch.js';
// .. STYLE .. //
import './SortingVisualizer.css';
// .. SOUNDS .. //
import ResetEffect from './sounds/ResetEffect.mp3';



import { Footer, Blog,Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';
import Features1 from "./containers/features/Features1.jsx";

let value = "Hi";
let num = 0;


export default class App extends Component{



constructor (props) {

  super(props);
  this.state = {
 
    array: [],
    animationSpeed: 50,
    numberOfArrayBars: 10,
  };

  this.generateNewArray = this.generateNewArray.bind(this);
  this.bubbleSort = this.bubbleSort.bind(this);
  this.selectionSort = this.selectionSort.bind(this);
  this.insertionSort = this.insertionSort.bind(this);
  this.linearSearch = this.linearSearch.bind(this);
  this.binarySearch = this.binarySearch.bind(this);

  this.onChangeArrayBarRangeSlider = this.onChangeArrayBarRangeSlider.bind(
    this
  );
  this.onChangeAnimationSpeedRangeSlider = this.onChangeAnimationSpeedRangeSlider.bind(
    this
  );
}


componentDidMount() {
  this.generateNewArray();
}

generateNewArray() {
  const front_color_bar = document.getElementsByClassName("front-color-bar");
  const array = [];
  for (let i = 0; i < this.state.numberOfArrayBars; i++) {
    // ## Generates an element between 5 and 70, and pushes it into the array. ## //
    array.push(randomIntFromInterval(5, 70));
   
  }
  playAudio(ResetEffect);
  this.setState({ array: array });
}

// ******************************************************************************* //


onChangeArrayBarRangeSlider = (event, value) => {
  this.setState({ numberOfArrayBars: value });
  this.generateNewArray();
};



// ## Handles if the "Animation Speed" slider is changed. ## //
onChangeAnimationSpeedRangeSlider = (event, value) => {
  this.setState({ animationSpeed: value });
};

// ******************************************************************************* //

// ## Calls the BubbleSort component/function. ## //

  

bubbleSort = () => {
  BubbleSort(this.state.array, this.state.animationSpeed);
};

// ## Calls the SelectionSort component/function. ## //
selectionSort = () => {
  SelectionSort(this.state.array, this.state.animationSpeed);
};

// ## Calls the InsertionSort component/function. ## //
insertionSort = () => {
  InsertionSort(this.state.array, this.state.animationSpeed);
};



binarySearch = () => {
  BinarySearch(this.state.array, this.state.animationSpeed);
};



// ******************************************************************************* //

render() {
  return (
    
    <div className="main-container">
      {/* --------------------- HEADER : 8% Height --------------------- */}
      
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
   
    <WhatGPT3 />
    <Features />
    <CTA /> 
    <Features1/>
    <Blog />
    
  </div>

  <div className="gpt3__blog-heading1">
      <h1 className="gradient__text">The Visualizer.</h1>
    </div>
  
   
   
      {/* --------------------- BUTTONS : 10% Height --------------------- */}
      <ButtonsBar
        generateNewArray={this.generateNewArray}
        bubbleSort={this.bubbleSort}
        selectionSort={this.selectionSort}
        insertionSort={this.insertionSort}
        linearSearch={this.linearSearch}
        binarySearch={this.binarySearch}
      />
      
      <h3> Maximum value of the array element = 70 </h3>
      <h3>Sort the array elements before binary search !</h3>
      <div className="SearchValue"><h3></h3></div>



      {}
      <ArrayBar array={this.state.array} />
      {}
      <RangeSlider
        numberOfArrayBars={this.state.numberOfArrayBars}
        animationSpeed={this.state.animationSpeed}
        onChangeArrayBarRangeSlider={this.onChangeArrayBarRangeSlider}
        onChangeAnimationSpeedRangeSlider={
          this.onChangeAnimationSpeedRangeSlider
        }
      />

        

       <Footer />
    </div>


  );

  
  
}

linearSearch = () => {
  LinearSearch(this.state.array, this.state.animationSpeed , document.getElementsByClassName("SearchInput").value);
};


}

