export default function analyzeArray(myArray) {
  const length = myArray.length;

  const min = myArray.reduce((smallestNum, currentNum) => {
    if (currentNum < smallestNum) {
      return currentNum;
    } else {
      return smallestNum;
    }
  });

  const max = myArray.reduce((maxNum, currNum) => {
    if (maxNum < currNum) {
      return currNum;
    } else {
      return maxNum;
    }
  });

  const average = myArray.reduce((sumNum, currNum) => {
    return sumNum += currNum; 
  }) / length;

  return { average, min, max, length };
}