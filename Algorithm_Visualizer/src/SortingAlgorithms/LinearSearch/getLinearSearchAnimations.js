const getLinearSearchAnimations = (array) => {
  const animations = []; // { currElement, comparingElement, minIndex, doSwap, isFinalElement, finalElement }

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let search_idx = randomNumberInRange(0,array.length+3);
  console.log("The value to be searched is : ");
  console.log(array[search_idx]);

  if(search_idx > array.length-1){
    console.log("Array element is not found !!");
  }
  
  
  let min_idx;
  for (let i = 0; i < array.length; i++) {
    animations.push(i,-1,false,search_idx);
    
    if(array[i]==array[search_idx]){
      animations.push(i,i,true,search_idx);
      break;
    }
        
  
  }

  return animations;
};

export default getLinearSearchAnimations;
