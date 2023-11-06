console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. 
  // Log the variable's value to the console.
      let addResult = operand1 + operand2;
      console.log("Adding Result: ", addResult);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. 
  //Log the variable's value to the console.
      let subResult = operand1 - operand2;
      console.log("Substract Result: ", subResult);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. 
  //Log the variable's value to the console.
      let multiplyResult = operand1 * operand2;
      console.log("Multiply Result: ", multiplyResult);

});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. 
  //Log the variable's value to the console.
  let divideResult = operand1 / operand2;
  console.log("Divide Result: ", divideResult);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. 
  // Log the variable's value to the console.
    let powerResult = Math.pow( operand1, operand2);
    console.log("Power Result: ", powerResult);
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" 
  //and store the result in a variable. Log the variable's value to the console.
    let remainderResult = operand1 % operand2;
    console.log("Remainder Result: ", remainderResult);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]');

increaseByOneButton.addEventListener('click', ()=>{

    let increaseByOne = operand1 +=1 ;
    console.log("Increase by One: ",increaseByOne);

});


const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]');

increaseByFiveButton.addEventListener('click', ()=>{

  let increaseByFive = operand1 += 5;
  console.log("Increase by Five: ",increaseByFive);

});


const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]');

decreaseByOneButton.addEventListener('click', ()=>{

  let decreaseByOne = operand1 -=1 ;
  console.log("Decrease by One: ",decreaseByOne);

});


const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]');

decreaseByFiveButton.addEventListener('click', ()=>{

  let decreaseByFive = operand1 -= 5;
  console.log("Decrease by Five: ", decreaseByFive);

});


const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]');

multiplyByTwoButton.addEventListener('click', ()=>{

  let multiplyByTwo = operand1 * 2;
  console.log("Multiply by Two: ",  multiplyByTwo);

});

const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');
divideByTwoButton.addEventListener('click', ()=>{

  let divideByTwo = operand1 / 2;
  console.log("Divide by Two: ",  divideByTwo);

});
