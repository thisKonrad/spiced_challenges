console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";



const body = document.querySelector('body');

/* ::::: new teaser :::: */
/* text and title */
const teaserTitle = document.createElement('h1');
teaserTitle.innerText = 'Queen angelfish';

/* image: */
const teaserImage = document.createElement('img');
teaserImage.setAttribute('src', 'https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640');
teaserImage.classList.add('product__image');

const imageDiv = document.createElement('div');
imageDiv.classList.add('product__image-container');
imageDiv.append(teaserImage);

/* description: */
const teaserDescription = document.createElement('p');
teaserDescription.innerText = "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
teaserDescription.classList.add('product__description')

/*categorys: */
const teaserCategoryOne = document.createElement('li');
teaserCategoryOne.innerText = "Freshwater";
teaserCategoryOne.classList.add("product__category")

const teaserCategoryTwo = document.createElement('li');
teaserCategoryTwo.innerText = "Large aquarium";
teaserCategoryTwo.classList.add("product__category")

const teaserCategoryThree = document.createElement('li');
teaserCategoryThree.innerText = "Plankton Diet";
teaserCategoryThree.classList.add("product__category")



const teaserCategorys = document.createElement('ul');
teaserCategorys.classList.add('product__categories');
teaserCategorys.append(teaserCategoryOne);
teaserCategorys.append(teaserCategoryTwo);
teaserCategorys.append(teaserCategoryThree);



/* footer */
const teaserButton = document.createElement('button');
teaserButton.classList.add('product__buy-button');
teaserButton.innerText = 'Buy';

const teaserPrice = document.createElement('span');
teaserPrice.classList.add('product__price');
teaserPrice.innerText = '149,99 €';

const teaserFooter = document.createElement('footer');
teaserFooter.classList.add('product__footer');
teaserFooter.append(teaserButton);
teaserFooter.append(teaserPrice);

teaserButton.addEventListener('click',()=> {
  console.log('Queen angelfish')
  console.log('--------------')
  console.log('Price: 149,99')
});


/* all together: */
const teaserDiv = document.createElement('section');
teaserDiv.classList.add('product');
teaserDiv.append(teaserTitle);
teaserDiv.append(teaserDescription);
teaserDiv.append(imageDiv);
teaserDiv.append(teaserFooter);
teaserDiv.append(teaserCategorys);

body.appendChild(teaserDiv);
