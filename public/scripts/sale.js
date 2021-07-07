let qtyOfCups = 48;
const pricePerCup = 5.49;
let total = 0;
let itemSelected = "";
let flagShowItemSelected = false;

const qty = document.getElementById("cups-qty");
qty.addEventListener("change", (event) => {
  qtyOfCups = parseFloat(event.target.value);
  total = qtyOfCups * pricePerCup;

  console.log("Total", total);
});

const fruitBox = document.getElementById("fruit-box");
const bestBox = document.getElementById("best-box");
const fitBox = document.getElementById("fit-box");
const itemIncluded1 = document.getElementById("item-selection-1");
const itemIncluded2 = document.getElementById("item-selection-2");
const itemIncluded3 = document.getElementById("item-selection-3");
const body = document.querySelector("body");
// const br1 = document.getElementById("br-selection-1");
// const br2 = document.getElementById("br-selection-2");
// const br3 = document.getElementById("br-selection-3");

const itemSelection = (event) => {
  itemSelected = event.currentTarget.id;
  console.log("Item Selected", itemSelected);
};

fruitBox.addEventListener("click", (event) => {
  itemSelection(event);
  if (!flagShowItemSelected) {
    itemIncluded1.classList.add("show1");
    flagShowItemSelected = true;
  } else {
    itemIncluded1.classList.remove("show1");
    flagShowItemSelected = false;
  }

  // br1.classList.add("show1");
});

bestBox.addEventListener("click", (event) => {
  itemSelection(event);
  if (!flagShowItemSelected) {
    itemIncluded2.classList.add("show1");
    flagShowItemSelected = true;
  } else {
    itemIncluded2.classList.remove("show1");
    flagShowItemSelected = false;
  }
  // br2.classList.add("show1");
});

fitBox.addEventListener("click", (event) => {
  itemSelection(event);
  if (!flagShowItemSelected) {
    itemIncluded3.classList.add("show1");
    flagShowItemSelected = true;
  } else {
    itemIncluded3.classList.remove("show1");
    flagShowItemSelected = false;
  }
  // br3.classList.add("show1");
});
