console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const lightBtn = document.querySelector('[data-js="light-mode-button"]');
const darkBtn = document.querySelector('[data-js="dark-mode-button"]');
const toggleBtn = document.querySelector('[data-js="toggle-button"]');


darkBtn.addEventListener('click',()=>{
    bodyElement.classList.add('dark');
});
lightBtn.addEventListener('click',()=>{
    bodyElement.classList.remove('dark');
});
toggleBtn.addEventListener('click',()=>{
    bodyElement.classList.toggle('dark');
});