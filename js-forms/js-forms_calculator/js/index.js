console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numberA = document.querySelector('#number-a');
const numberB = document.querySelector('#number-b');

/*values:*/
numA = numberA.value;
numB = numberB.value;

/* operators: */
const addOP = document.querySelector('#addition');
const subsOp = document.querySelector('#subtraction');
const multOp = document.querySelector('#multiplication');
const divOP = document.querySelector('#division');


function calculate(a,b){

  let result;


  if(addOP.checked){
    /* why *1? = because it cncatenates elswise...*/
    result = (a*1) + (b*1);
    resultOutput.textContent = result;
  }
  if(subsOp.checked){
    result = a -= b;
    resultOutput.textContent = result;
  }
  if(multOp.checked){
    result = a *= b;
    resultOutput.textContent = result;
  }
  if(divOP.checked){
    result = a / b;
    resultOutput.textContent = result;
  }
}


form.addEventListener("submit", (event) => {

  event.preventDefault();

  numA = numberA.value;
  numB = numberB.value;

  calculate(numA,numB);

});
