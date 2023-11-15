console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for( let i = 1; i < 8; i++){

    const newStar = document.createElement('img');
    newStar.src= './assets/star-empty.svg';

    newStar.addEventListener('click',(e)=>{


      newStar.src= './assets/star-filled.svg';

    })

    starContainer.append(newStar);

}
  //--^-- your code here --^--
}

renderStars();
