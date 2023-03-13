import getBinarySearchAnimations from "./getBinarySearchAnimations";

import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  displaySearchValue,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";
import { render } from "@testing-library/react";
import App, { showValue } from "../../App";



const BinarySearch = (array, animationSpeed) => {
  
  disableButtons();

  const animations = getBinarySearchAnimations(array);


  for (let i = 0; i < animations.length; i += 6) {
    const isMidElement = animations[i],
    midElement = animations[i+1],
    searchIndex = animations[i+2],
    searchElement = animations[i+3],
    lowElement = animations[i+4],
    highElement = animations[i+5];

    changeBackgroundColor(searchIndex,"rgba(255, 182, 193, 1)");
   
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        
       
        if (isMidElement === true) {
          changeBackgroundColor(midElement,"rgba(0, 164, 86, 0.6)");
          changeBoxShadow(midElement,"5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
          resolve();
        }else{
            changeBackgroundColor(midElement,"rgba(255,165,0, 0.9)");
          }
      }, (i) * animationSpeed);
    });


    Promise.all([promise1])
      .then(playCompletedSoundEffect)
      .then(enableButtons);

  }

  resetBarStyleDefault(array, (animations.length + 3) * animationSpeed);
};

export default BinarySearch;
