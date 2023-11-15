console.clear();

function handleUserLogin(onSuccess) {
  //onSuccess("Jane Doe");
}

// The exercise starts here!
const userOne = 'Jane Doe';

console.log('001: ---------------')
function showWelcomeMessage(userName){
  console.log(`Welcome ${userName}! You are logged in now.`);
}
handleUserLogin(showWelcomeMessage(userOne));


console.log('002: ---------------');

const nameOut = (userName)=>{ 
console.log(`Welcome ${userName}! You are logged in now.`)};

handleUserLogin(nameOut(userOne));