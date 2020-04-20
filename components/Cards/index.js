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

let cards = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(function (response) {
    const articleCards = response.data.articles;
    for (const property in articleCards){
        articleCards[property].map(element => {
            const cardsComponent = cardsMaker(
                element.headline,
                // element.author,
                // element.cardImgContainer,
                element.authorPhoto,
                element.authorName,
                element.cardImg,
                element.authorSpan,
            );
            cards.appendChild(cardsComponent)
            console.log(element.authorSpan)
            console.log(element.headline)
            console.log(element)
        });
        // console.log(articleCards[property])
    }
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
});

function cardsMaker(headlineData, authorPhoto, authorName){
    let card = document.createElement('div')
    card.classList.add('card')

    let headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = headlineData;

    let author = document.createElement('div')
    author.classList.add('author')
    
    let cardImgContainer = document.createElement('div')
    cardImgContainer.classList.add('img-container')

    let cardImg = document.createElement('img')
    cardImg.src = authorPhoto;

    let authorSpan = document.createElement('span')
    authorSpan.textContent = authorName;

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(cardImgContainer)
    author.appendChild(authorSpan)
    cardImgContainer.appendChild(cardImg)
    return card;


}


cardsMaker();

console.log();
