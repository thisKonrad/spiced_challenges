console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}


// The exercise starts here!


function showWelcomeMessage(userName,userRole){  
  console.log(`Welcome ${userName}! 
  You are logged in now as ${userRole}`)
};


function showErrorMessage(errorMessage){
  console.log(`Login error: ${errorMessage}`);
}

console.log("function howMessage: -----------------------")
handleUserLogin(showWelcomeMessage,showErrorMessage, 'Jane Doe');

console.log("function error -----------------------")
handleUserLogin(showWelcomeMessage,showErrorMessage, 'John Doe');