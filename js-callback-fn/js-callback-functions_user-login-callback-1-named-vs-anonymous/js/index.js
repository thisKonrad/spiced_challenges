console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. 
  //This will become clear by the fourth challenge! 🤞
  onSuccess()
}

// Call handleUserLogin below!
console.log('Funtion call (function) 01: ----------------');

handleUserLogin(showWelcomeMessage);
function showWelcomeMessage(){
  console.log('Welcome! You are logged in now.')
};

console.log('Funtion call (arrow) 02: ----------------');

handleUserLogin(()=>{console.log('Welcome! You are logged in now.')});

