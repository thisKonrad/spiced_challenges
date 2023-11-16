console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
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
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = 
cards.map((elem)=>{
  return elem.answer.toLowerCase();
}); 
// ['as often as you like.', ...]
console.log("oo1 ",lowerCaseAnswers);


const questionsAndAnswersTogether = 
cards.map((elem)=>{
  return "Question + Answer: ",elem.question + elem.answer;
}); 
// ["How often can I use <header>? - As often as you like.", ...]
console.log("oo2 ",questionsAndAnswersTogether);




const questionAndAnswer = 
cards.map((elem,index,array)=>{
  const newObj = {
    question:array[index].question, 
    answer:array[index].answer };
  return  newObj;
});  
// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
console.log("oo2 ",questionAndAnswer);


export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
