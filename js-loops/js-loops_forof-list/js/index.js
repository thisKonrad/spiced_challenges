console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for(const text of programmingLanguages){

    const liItem = document.createElement('li');
    liItem.innerText = `${text}`;
    ol.append(liItem)

}
// --^-- write/change code here --^--
