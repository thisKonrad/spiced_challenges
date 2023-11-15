console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!
console.log("function 001 ---------------------------")

function showWelcomeMessage(userName,userRole){
  const message = `Welcome ${userName}! You are logged in now as ${userRole}.`;
  console.log(message);
}

handleUserLogin(showWelcomeMessage);

console.log("function 002 ---------------------------")

handleUserLogin((userName, userRole)=>{
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`)});