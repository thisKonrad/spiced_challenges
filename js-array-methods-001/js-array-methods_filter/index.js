console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((elem)=> elem.id === "2");
console.log("001: ",onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((elem)=> elem.tags.length === 3);
console.log("002: ",allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((elem)=> elem.isBookmarked === false);
console.log("003: ",allCardsWith3Tags);


const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((elem)=> 
elem.isBookmarked === true && elem.tags.at(0) === "html" ||
elem.isBookmarked === true && elem.tags.at(0) === "js");
console.log("004: ",allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
