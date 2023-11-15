console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
<<<<<<< HEAD
  for( let i = 1; i < 6; i++){

    const newStar = document.createElement('img');

    if(i <= filledStars){
      newStar.src= './assets/star-filled.svg';
    }else{
      newStar.src= './assets/star-empty.svg';
    }

    newStar.addEventListener('click',renderStars(i));

    starContainer.append(newStar);

  }
=======
  for( let i = 1; i < 8; i++){

    const newStar = document.createElement('img');
    newStar.src= './assets/star-empty.svg';

    newStar.addEventListener('click',(e)=>{


      newStar.src= './assets/star-filled.svg';

    })

    starContainer.append(newStar);

}
>>>>>>> 54e0111dcd596560e9e9ab2fc8d394db0a35db4f
  //--^-- your code here --^--
}
renderStars(3);
