console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');


tosCheckbox.addEventListener('input',(e)=>{
  console.log(e.target);
  if(e.target.checked){
    hideTosError()
    return;
  }
  else 
  {
    showTosError();
  }
});

function hideTosError(){
  tosError.setAttribute("hidden","");
}; 

function showTosError(){
  tosError.removeAttribute("hidden");
};

function hideSuccess(){successMessage.setAttribute("hidden", "")}; 
hideSuccess();

function showSuccess(){successMessage.removeAttribute("hidden")};


form.addEventListener("submit", (e) => {

  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  if(tosCheckbox.checked) {
    showSuccess();
    alert("form submittet");
  };



  e.target.reset(); 

});
