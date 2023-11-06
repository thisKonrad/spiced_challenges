console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

console.log('hello')

const socialMediaTitle = "Social Media";
const socialMediaText = "Welcome all you people";

let numbersOfLike = 2000;

const socialMediaUser = {
	
	name: "Peter Socialiser",
	age: 46,
	hobbys: "watching television",
	registerd: true,

};

const isReported = true;


// --^-- write your code here --^--

/*
2. Log all variables to the console. 
Increase the likes by one and log the amount of likes again. 
Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

numbersOfLike++ 

console.log(
"Social Media: ", socialMediaTitle, " ",
socialMediaText, " ", 
"numbers of likes: ", numbersOfLike, " ", 
"user: ", socialMediaUser," ",
"is reported: ", isReported);

// --^-- write your code here --^--

