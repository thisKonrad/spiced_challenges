console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a
 different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a 
different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {

  let currentHour = new Date().getHours();

  console.log(currentHour);

  if( currentHour >= 6 &&
    currentHour <= 12) {
      return "Good Morning";
    }
  if( currentHour >= 13 &&
      currentHour <= 18) {
      return "Good Afternoon";
    }
  if( currentHour >= 19 &&
      currentHour <= 22) {
      return "Good Evening";
    }
  if( currentHour >= 23 &&
      currentHour <= 5) {
      return "Good Night";
    };
};


function getDayColor() {

  const body = document.querySelector('body');
  
  let currentDay = new Date().getDay();
  console.log("Day: ",currentDay);


    if(currentDay ===  0 ){
      body.style.backgroundColor = "red";
    } 
    if(currentDay ===  1 ){
      body.style.backgroundColor = "yellow";
    }
    if(currentDay ===  2 ){
      body.style.backgroundColor = "seagreen";
    }
    if(currentDay ===  3 ){
      body.style.backgroundColor = "violet";
    }
    if(currentDay ===  4 ){
      body.style.backgroundColor = "hotpink";
    } 
    if(currentDay ===  5 ){
      body.style.backgroundColor = "gainsboro";
    }
    if(currentDay ===  6 ){
      body.style.backgroundColor = "lightblue";
    }

}
getDayColor();

display.textContent = getGreeting();


/* 
display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor(); */
