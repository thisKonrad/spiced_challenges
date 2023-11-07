console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
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
  console.log("Relation:_ ", pizzaAreaRelation);

};
calculatePizzaGain(400,500)

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
