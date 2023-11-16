const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

// ['Crepes', ...]
const onlyTitles = recipes.map((elem)=> {return elem.title}); 
console.log("001 ", onlyTitles);


// ['Crepes (60min)', ...]
const titlesWithDuration = recipes.map((elem)=> {
  return elem.title + " (" + elem.duration + ")min."}); 
console.log("002 ", titlesWithDuration);

// [20, 10, 432, 12]
const timePerServing = recipes.map((elem)=>{
  return elem.duration / elem.servings;
}); 
console.log("003 ", timePerServing);


// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');
 // 'Crepes, Scrambled Eggs, ...'


const allTitlesInOneString = recipes.map((elem)=> {
  return elem.title; }).join(', ')
console.log("Extra: ",allTitlesInOneString);

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter((elem)=>
elem.duration <= 60);
console.log("60min or less: ", recipesThatOnlyTake60minutesOrLess);

const allRecipesWithMoreThan2Servings = recipes.filter((elem)=>
elem.servings > 2);
console.log("More than 2 servings: ", allRecipesWithMoreThan2Servings);

const allRecipesWithTitlesLongerThan12Characters = recipes.filter((elem)=>
elem.title.length > 12);
console.log("title length over 12: ",allRecipesWithTitlesLongerThan12Characters )


export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
