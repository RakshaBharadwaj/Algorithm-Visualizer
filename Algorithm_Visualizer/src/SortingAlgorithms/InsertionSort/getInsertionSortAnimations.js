const getInsertionSortAnimations = (array) => {
  const animations = []; // { comparingELement1, comparingElement2, doSwap, sortedTill }


  animations.push(0, 0, false, 0);

  for (let i = 1; i < array.length; i++) {
    let key = array[i],
      j = i - 1;

    
    animations.push(i, j, false, i - 1);
    while (j >= 0 && array[j] > key) {
      
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
      
      animations.push(j, j + 1, false, i);
      
      animations.push(j, j + 1, true, i);
      j--;
    }
  }

  
  animations.push(array.length - 1, array.length - 1, false, array.length - 1);
  return animations;
};

export default getInsertionSortAnimations;
