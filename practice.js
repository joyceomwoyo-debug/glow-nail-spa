// Pathfinder: Web Cr
// Day 1: this already works on your site. Day 4: you read it line by line and change it.

// 1. Find the button and the box in the page. The page the browser built is called the DOM.
const toggleButton = document.querySelector("#toggle-button");
const details = document.querySelector("#details");

// 2. Remember whether the box is open. This is the page's "state".
let isOpen = false;

// 3. When the button is clicked, run this function.
// Only run this on a page that has the button.
if (toggleButton) {
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
  });
}

// Day 4, Block 2: first add the list section to index.html (the page gives you the HTML),
// then delete the slash-star line below and the star-slash line at the end to switch this on.

const items = ["Clean tools", "Clear prices before we start", "A friendly welcome", "Walk in, no booking needed"];
const list = document.querySelector("#item-list");

// Only run this on a page that has the list.
if (list) {
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
  console.log("Items shown:", items.length);
}

const services = [
  { name: "Quick Hand Tidy",      category: "Manicure", priceKsh: 600,  minutes: 25 },
  { name: "Classic Manicure",     category: "Manicure", priceKsh: 900,  minutes: 40 },
  { name: "Gel Manicure",         category: "Manicure", priceKsh: 1500, minutes: 60 },
  { name: "Classic Pedicure",     category: "Pedicure", priceKsh: 1200, minutes: 50 },
  { name: "Gel Pedicure",         category: "Pedicure", priceKsh: 1800, minutes: 65 },
  { name: "Spa Pedicure",         category: "Pedicure", priceKsh: 2200, minutes: 80 },
  { name: "Two Accent Nails",     category: "Nail art", priceKsh: 500,  minutes: 20 },
  { name: "Stripes and Dots",     category: "Nail art", priceKsh: 900,  minutes: 40 },
  { name: "Full Set Design",      category: "Nail art", priceKsh: 1600, minutes: 75 },
  { name: "Cuticle Care",         category: "Care",     priceKsh: 500,  minutes: 20 },
  { name: "Hand and Arm Massage", category: "Care",     priceKsh: 700,  minutes: 30 },
  { name: "Gel Removal",          category: "Care",     priceKsh: 500,  minutes: 30 }
];
