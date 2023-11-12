console.clear();


const form = document.querySelector('[data-js="form"]');
const age = document.querySelector('#age').value;
const badness = document.querySelector('#badness').value;
const firstName = document.querySelector('#first-name');

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    let ageBadness = age + badness;

    let message = `The age-badness-sum of "${firstName.value}" is "${ageBadness}"`;

    console.log(message);

    e.target.reset();
    firstName.focus();

});

