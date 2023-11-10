console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"}');



tosCheckbox.addEventListener('change',()=>{
  hideTosError()
});

function hideTosError() {

  if(tosCheckbox.checked) {
    tosError.style.visibility = "hidden";
  }
  else {
    tosError.style.visibility = "visible";
  }

};


form.addEventListener("submit", (e) => {

  e.preventDefault();
  // --v-- write your code here --v--

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);

    alert("Form submitted");

  e.target.reset();

});
