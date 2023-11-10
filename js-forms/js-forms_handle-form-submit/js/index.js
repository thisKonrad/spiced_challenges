console.clear();

const form = document.querySelector('[data-js="form"]');
const firstName = document.querySelector('#first-name');

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    
    e.target.reset();
    firstName.focus();
    
});