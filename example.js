//1. Create a variable, myAge, and set its value to your age
let myAge = 33;
//2. Log the myAge variable to the console
console.log(myAge);

// document.getElementById("count").innerText = 5

//cmd + k + c;
let firstBatch = 5;
let secondBatch = 7;
let countFinal = firstBatch + secondBatch;
console.log(countFinal);

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

let my_age = 33;
let humanDogRatio = 7;

let myDogAge = my_age * humanDogRatio;

console.log(myDogAge);

//counter + 1

let counter = 5;

counter = counter + 2;
counter = counter + 10;
counter = counter - 2;

console.log(counter); //15

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and than finally increase it to 70
// Console.log the value after each step

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

//example countdown
function countdown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}

countdown();

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
function myLogger() {
  console.log(42);
}

myLogger();

//Create a function that logs of the sum of all the lap times
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function logLapTime() {
  let totalTime = lap1 + lap2 + lap3;
  console.log(totalTime);
}

// console.log(totalTime); totalTime is not defined
logLapTime();

//Create a function that increments the lapsCompleted variable with one
// Run it three times

let lapsCompleted = 0;

function incrementLap() {
  lapsCompleted = lapsCompleted + 1;
}

incrementLap();
incrementLap();
incrementLap();

console.log(lapsCompleted);

// Create a variable, message, that stores the string: "You have tree new notifications"
let username = "Peter";

let message = "You have tree new notifications";

console.log(message + ", " + username + "!");
