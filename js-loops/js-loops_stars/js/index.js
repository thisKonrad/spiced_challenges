console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(starcount = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
for( let i = 1; i < 6; i++){
  
  const newStar = document.createElement('img');
  newStar.src= './assets/star-empty.svg';
  starContainer.append(newStar);

}
  //--^-- your code here --^--
}

renderStars();
