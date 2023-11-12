console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const body = document.querySelector('body');

// Exercise:
// Use document.createElement() and append another social media post to the body.

const socialMediaSection = document.createElement("section");
socialMediaSection.classList.add('post');

const socialMediaTitle = document.createElement("h1");
socialMediaTitle.setAttribute("color", "white");

const socialMediaText = document.createElement("p");
socialMediaText.classList.add('post__content');
socialMediaText.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';


const socialMediaFooter = document.createElement("footer");
socialMediaFooter.classList.add('post__footer');

const socialMediaUserName = document.createElement("span");
socialMediaUserName.classList.add('post__username');
socialMediaUserName.innerText='@username';

const socialMediaButton = document.createElement("button");
socialMediaButton.innerText = '♥ Like';
socialMediaButton.classList.add('post__button');
socialMediaButton.addEventListener("click", handleLikeButtonClick);


socialMediaSection.append(socialMediaTitle);
socialMediaSection.append(socialMediaText);
socialMediaSection.append(socialMediaFooter);
socialMediaFooter.append(socialMediaUserName);
socialMediaFooter.append(socialMediaButton);


body.appendChild(socialMediaSection);