let count = 5;
console.log(count);


let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}
