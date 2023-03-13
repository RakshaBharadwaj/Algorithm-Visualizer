import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Algorithm" text="Algorithm is a step-by-step procedure, which defines a set of instructions to be executed in a certain order to get the desired output." />
    </div>

    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">What is an Algorithm ?</h1>
      
    
    </div>
    
    <p>Some of its key features are, </p>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Finiteness" text="terminates after a finite number of steps." />
      <Feature title="Definiteness" text="rigorously and unambiguously specified." />
      <Feature title="Input" text="valid inputs are clearly specified." />
      <Feature title="Output" text="can be proved to produce the correct output given a valid input." />
      <Feature title="Effectiveness" text="steps are sufficiently simple and basic." />
    </div>
  </div>
);

export default WhatGPT3;
