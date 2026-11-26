// Pathfinder: Web Cr
// Day 1: this already works on your site. Day 4: you read it line by line and change it.

// 1. Find the button and the box in the page. The page the browser built is called the DOM.
const toggleButton = document.querySelector("#toggle-button");
const details = document.querySelector("#details");

// 2. Remember whether the box is open. This is the page's "state".
let isOpen = false;

// 3. When the button is clicked, run this function.
// Only run this on a page that has the button.
if (toggleButton) 
  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      details.hidden = true;
      toggleButton.textContent = "Show opening hours ";
      isOpen = false;
    } else {
      details.hidden = false;
      toggleButton.textContent = "hide opening";
      isOpen = true;
    }
    console.log("Box open:", isOpen);
  })

// Day 6, Block 1: show every service from data.js on the Services page
const dataList = document.querySelector("#data-list");

// Only run this on a page that has the data list.
if (dataList) {
  for (const service of services) {
    const li = document.createElement("li");

    // Over an hour is a long appointment. Otherwise it is a quick visit.
    let visit = "";
    if (service.minutes > 60) {
      visit = "Long appointment";
    } else {
      visit = "Quick visit";
    }

    li.textContent = service.name + " (" + service.category + "): KSh " + service.priceKsh + ", " + service.minutes + " minutes. " + visit;
    dataList.appendChild(li);
  }
  console.log("Services shown:", services.length);
}