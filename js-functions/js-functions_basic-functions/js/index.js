console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/


// --v-- write your code here --v--
const bookTitle = "The End Of Ooz";
const bookAuthor = "Patrica Letterman";
const bookRating = 504;
const bookNumberSales = 12900;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
/**console.log("book Title: ", bookTitle);
* console.log("Author: ", bookAuthor);
* console.log("Rating: ", bookRating);
* console.log("Number of sales: ", bookNumberSales);*/

lockBoookData(bookTitle, bookAuthor, bookRating, bookNumberSales);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function lockBoookData(title, author, rating, sales) {

    sales++;

    console.log("Number of sales: ", sales);


    sales++;

    console.log("Number of sales: ", sales);

    console.log(`Book Title: ${title},
    Author: ${author}, Rating: ${rating}, Number of sales: ${sales}`);

};


// --^-- write your code here --^--
