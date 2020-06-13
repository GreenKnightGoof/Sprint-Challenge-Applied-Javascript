// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let cardsElement = document.querySelector(".cards-container");

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(function (response) {
    const articleCards = response.data.articles;
    for (const property in articleCards) {
      articleCards[property].map((element) => {
        const cardsComponent = cardsCreator(
          element.headline,
          element.authorPhoto,
          element.authorName,
          element.cardImg,
          element.authorSpan
        );
        cardsElement.appendChild(cardsComponent);
      });
    }
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

function cardsCreator(headlineData, authorPhoto, authorName) {
  let cards = document.createElement("div");
  cards.classList.add("card");

  let headlineElement = document.createElement("div");
  headlineElement.classList.add("headline");
  headlineElement.textContent = headlineData;

  let authorElement = document.createElement("div");
  authorElement.classList.add("author");

  let cardImgElement = document.createElement("div");
  cardImgElement.classList.add("img-container");

  let cardImg = document.createElement("img");
  cardImg.src = authorPhoto;

  let authorSpan = document.createElement("span");
  authorSpan.textContent = authorName;

  cards.appendChild(headlineElement);
  cards.appendChild(authorElement);
  authorElement.appendChild(cardImgElement);
  authorElement.appendChild(authorSpan);
  cardImgElement.appendChild(cardImg);
  return cards;
}

cardsCreator();
