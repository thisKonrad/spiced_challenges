const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!

  const age = Number(input.value);

  if( age < 18 && age >= 12){
    output.innerText = `You are ${age} years old, so you are a teenager!`;
  }
  if( age < 11 && age >= 0){
    output.innerText = `You are ${age} years old, you are a child`;
  }
  if( age >= 18 ){
    output.innerText = `You are ${age} years old, you are a adult person now`;
  };

});

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.