import getLinearSearchAnimations from "./getLinearSearchAnimations";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";

const LinearSearch = (array, animationSpeed) => {
  
  disableButtons();

  const animations = getLinearSearchAnimations(array);

  for (let i = 0; i < animations.length; i += 4) {
    const comparingElement = animations[i],
      finalElement = animations[i+1],
      isFinalElement = animations[i+2],
      searchElement = animations[i+3];



      changeBackgroundColor(searchElement,"rgba(255, 182, 193, 1)");
      
   
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
       
       
        changeBackgroundColor(comparingElement, "rgba(255,165,0, 0.9)");

        
      }, i * animationSpeed);

    
      resolve();
    });

   
    const promise2 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (isFinalElement == true) {
          changeBackgroundColor(finalElement, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(
            finalElement,
            "5px 5px 50px 5px rgba(0, 164, 86, 0.2)"
          );

          resolve();

        } else {
          changeBackgroundColor(comparingElement, "rgba(225, 0, 120, 0.6)");
        }

        
      }, (i + 6) * animationSpeed);
    });

    Promise.all([promise1, promise2])
      .then(playCompletedSoundEffect)
     
      .then(enableButtons);
  }

  resetBarStyleDefault(array, (animations.length + 6) * animationSpeed);
};

export default LinearSearch;
