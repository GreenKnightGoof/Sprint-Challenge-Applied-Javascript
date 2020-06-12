// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});

function Tabs(topicData) {
  let tabs = document.createElement("div");
  tabs.classList.add("tab");
  tabs.textContent = topicData;

  return tabs;
}

let tabTopics = document.querySelector(".topics");

let topicArray = ["javascript", "bootstrap", "technology", "jquery", "node.js"];

topicArray.forEach((item) => {
  let tabMaker = Tabs(item);
  tabTopics.appendChild(tabMaker);
});
