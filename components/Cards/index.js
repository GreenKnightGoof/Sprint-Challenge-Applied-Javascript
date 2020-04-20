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

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

function cardsMaker(headlineData, authorData){
    let card = document.createElement('div')
    card.classList.add('card')

    let headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = headlineData;

    let author = document.createElement('div')
    author.classList.add('author')

    let cardImg = document.createElement('div')
    cardImg.classList.add('img-container')
    cardImg.setAttribute('src', ``)

    let authorSpan = document.createElement('span')
    authorSpan.textContent = authorData;

    card.appendChild(headline)
    headline.appendChild(author)
    author.appendChild(cardImg)
    author.appendChild(authorSpan)

    return card;

}

cardsMaker();
