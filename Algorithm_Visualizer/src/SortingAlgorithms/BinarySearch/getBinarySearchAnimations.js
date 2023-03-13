import { render } from "@testing-library/react";
import displayValue from "../../App.js";

const getBinarySearchAnimations = (array) => {
  const animations = []; 


  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let search_idx = randomNumberInRange(0,array.length-1);

  
  let low_idx = 0;
  let high_idx = array.length - 1;
  let mid_idx;


      for(let i=0;i < 11;i++){
                  mid_idx = Math.floor((low_idx+high_idx)/2);
                  animations.push(false,mid_idx,search_idx,array[search_idx],low_idx,high_idx); 

                  if(search_idx == mid_idx){
                    animations.push(true,mid_idx,search_idx,array[search_idx],low_idx,high_idx);
                    break;
                  }
                  else if(search_idx > mid_idx){
                      low_idx = mid_idx + 1;  
                      animations.push(false,mid_idx,search_idx,array[search_idx],low_idx,high_idx); 
                  }else {              
                      high_idx = mid_idx - 1;
                      animations.push(false,mid_idx,search_idx,array[search_idx],low_idx,high_idx);
                  }   
            }

  return animations;
};


export default getBinarySearchAnimations;
