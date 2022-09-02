// let count = 5;
// console.log(count);

// let saveEl = document.getElementById("save-el");
//let countEl = document.getElementById("count-el");

// function increment() {
//   count += 1;
//   countEl.textContent = count;
//   console.log(count);
// }

//project
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el"); //pass argument

console.log("countEl" + countEl);

let count = 0;

function increment() {
  console.log("The button was clicked");
  count = count + 1;
  countEl.innerText = count; // for write in browser
  console.log(count);
}

// Create a function, save(), which logs out the count it's called

function save() {
  console.log(count);
}
