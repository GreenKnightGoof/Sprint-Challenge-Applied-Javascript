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

function Header() {
  let headerElement = document.createElement("div");
  headerElement.classList.add("header");

  let spanElement = document.createElement("span");
  spanElement.classList.add("date");
  spanElement.textContent = "SMARCH 28, 2019";

  let titleElement = document.createElement("h1");
  titleElement.classList.add("title");
  titleElement.textContent = "Lambda Times";

  let spanTwoElement = document.createElement("span");
  spanTwoElement.classList.add("temp");
  spanTwoElement.textContent = "98°";

  headerElement.appendChild(spanElement);
  headerElement.appendChild(titleElement);
  headerElement.appendChild(spanTwoElement);

  return headerElement;
}

Header();

let headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
