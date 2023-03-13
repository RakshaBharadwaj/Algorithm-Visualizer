
import React, { Component } from "react";
import "./ButtonsBar.css";

export default class ButtonsBar extends Component {
  render() {
    return (
      <div className="buttons-bar" id="btn">
        <button onClick={() => this.props.generateNewArray()} id="reset">
          Generate New Array
        </button>
        <button
          id="bubbleSortButton"
          onClick={() => this.props.bubbleSort()}
          className="buttonStyle1"
        >
          Bubble Sort
        </button>
        <button
          id="selectionSortButton"
          onClick={() => this.props.selectionSort()}
          className="buttonStyle2"
        >
          Selection Sort
        </button>
        <button
          id="insertionSortButton"
          onClick={() => this.props.insertionSort()}
          className="buttonStyle1"
        >
          Insertion Sort
        </button>
        <button
          id="linearSearchButton"
          onClick={() => this.props.linearSearch()}
          className="buttonStyle2"
        >
          Linear Search
        </button>

        <button
          id="binarySearchButton"
          onClick={() => this.props.binarySearch()}
          className="buttonStyle1"
        >
          Binary Search
        </button>
      </div>

      
    );
  }
}
