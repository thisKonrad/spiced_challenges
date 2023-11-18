import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');


// Part 1 - start here
const filteredNews = news.filter((news) => {
  news.categories.includes("politics")
});
console.log("filtered News: ", filteredNews)


// Part 2 - start here
const sortedNews = filteredNews.sort((a,b)=> a.body.length -= b.body.length);
console.log("sorted News: ",sortedNews)

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});


// Check your filter and sorting order here:
checkFilteredNews(filteredNews);
checkSortedNews(sortedNews);
