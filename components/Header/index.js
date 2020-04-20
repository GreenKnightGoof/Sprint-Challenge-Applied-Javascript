// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function headerComponent() {
    let header = document.createElement('div')
    header.classList.add('header');

    let span = document.createElement('span')
    span.classList.add('date');
    span.textContent = 'SMARCH 28, 2019'

    let title = document.createElement('h1')
    title.textContent = 'Lambda Times'

    let spanTwo = document.createElement('span')
    spanTwo.classList.add('temp')
    spanTwo.textContent = '98°'

    header.appendChild(span);
    header.appendChild(title);
    header.appendChild(spanTwo);
    
    return header;
}

headerComponent();

let headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(headerComponent())


console.log(headerContainer);