console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};



const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

for(const opt in languages){
  
  console.log("option: ",opt, " ",languages[opt]);

  const optionElem = document.createElement("option");

  optionElem.append(languages[opt])

  select.append(optionElem);

};
// --^-- write/change code here --^--



// Part 2: Creating a Navigation Bar






// --v-- write/change code here --v--
const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
navElement.append(ul);
main.append(navElement);


for( const key in nav){

  console.log("n: ", nav[key].href);

  const hrefNav = nav[key].href;
  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("href", hrefNav);

  const liItem = document.createElement("li");
  const textNav = nav[key].text;
  liItem.setAttribute("text", textNav);


  ul.append(anchorTag)
  ul.append(liItem)
};
// --^-- write/change code here --^--
