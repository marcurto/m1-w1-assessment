// Write a function that returns the product of 2 numbers
function product(x, y) {
  let multiplication = x*y;
  return multiplication;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2 === 0){
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a > b){
    return a;
  } else if (a < b){
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c){
    return a;
  } else if (b > a && b > c){
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let maxNum = 0;
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > maxNum){
      maxNum = numbers [i];
    }
  }
  return maxNum;
}

// Return the longest string in an array
function longestString(strings) {
  let stringLength = "";
  for (let i = 0; i < strings.length; i++){
    if (strings[i].length > stringLength){
      stringLength = strings[i];
    }
  }
  return stringLength
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (let i = 0; i < wordsArr.length; i++){
    if (wordsArr[i] === word){
      return true;
    } else {
      return false;
    }
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let uniqueWord = [];
  for (let i = 0; i < wordsArr.length; i++){
    let position = uniqueWord.indexOf(wordsArr[i])
    if(position === -1){
      uniqueWord.push(wordsArr[i]);
    }
    if(position != -1){
        uniqueWord.splice(position, 1);
    }
    
  }
  return uniqueWord;
}




// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxNum = 0;
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] > maxNum){
        maxNum = matrix[i][j];
      }
    }
  }
  return maxNum;
}
