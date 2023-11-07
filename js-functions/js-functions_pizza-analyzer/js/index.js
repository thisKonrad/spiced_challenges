console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');


let pizzaSize1 = pizzaInput1.value;
let pizzaSize2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {

  pizzaSize1 = pizzaInput1.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1,pizzaSize1);

  updateOutputColor(pizzaSize1, pizzaSize2);

});
console.log("size1: ", pizzaSize1);

pizzaInput2.addEventListener("input", () => {

  pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2,pizzaSize2);

  updateOutputColor(pizzaSize1, pizzaSize2);

});
 

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2){

  const pizzaOneRadius = diameter1 / 2;
  const pizzaTwoRadius = diameter2 / 2;

  function pizzaArea(r){ 

    let area = Math.PI * r;

    return area;

  };

  const pizzaArea1 = pizzaArea(pizzaOneRadius);
  const pizzaArea2 = pizzaArea(pizzaTwoRadius);

  // (area2 - area1) / area1 * 100;
  let pizzaAreaRelation = Math.round(( pizzaArea2 - pizzaArea1) / pizzaArea1 * 100 );


  output.innerText = `${pizzaAreaRelation}`;

};


// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement,newSize){

  let newDisplaySize = newSize / 24 * 100;

  pizzaElement.style.width = `${newDisplaySize}px`;

};

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2){

  if(size2 < size1 ){
    outputSection.style.backgroundColor = "var(--red)";
  }
  if(size2 > size1){
    outputSection.style.backgroundColor = "var(--green)";
  }

};
