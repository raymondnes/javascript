/*
console.log(typeof(false));
console.log(typeof(100));
console.log(typeof("Raymond"));
*/

// (fat arrows) function
//squareNumbers mapping solution 1
/*
let numbers = [1, 2, 3, 4, 5, 6];
let squareNumbers = numbers.map(num => num * num);
console.log(squareNumbers);
*/
//squareNumbers mapping solution 2
/*
function squareNum(sqr){
  let output = [];
  for (let i = 0; i < sqr.length; i++){
    output.push(sqr[i] *= sqr[i]);
  }
  return output;
}
let result = squareNum([1, 2, 3, 4, 5, 6]);
console.log(result);
*/
// Addition mapping
/*
let add = (a, b) => a + b;
console.log(add(1, 2));
*/

// Declaring Variables
// let myname = "Raymond";
// let Winter = false;
// let country = "Ghana"

// console.log(myname, "is from", country, Winter);

// Undefined and Null 
// var n;
// var g = null;

// console.log(n, g);

// //typeof operator finds the data types of *undefined, null*
// typeof undefined;
// typeof null;

// console.log(null);

// var a = null + 1;
// console.log(a);

// strict equality with ===
/*  
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b);
*/

//Level 1 - Exercise 4
//              Solution
/*
let greeting = "Hello my name is";

let myname = "Raymond";
myname += " Nesiama";

let str = "And I have";

let apples = 5;
apples *= 4;

let end = "apples";

console.log(greeting, myname, str, apples, end);
*/

/*
// if and else statement
let myName = "Raymond";
if(myName === "John"){
  console.log("Hi ", myName)
}
else{
  console.log("Hi", myName)
}
*/

/*
// Programme that greets with the time
let time = 24;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);
*/

/*
// Prints the exact day of the week
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day);
*/
/*
let number = [1, 2, 3, 4, 5, 6];
let squaredNumber = number.map(num => (num *= num));
console.log(squaredNumber);
*/
// Prints a text when the case is neither sunday nor saturday
/*
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);
*/

// print the text that matches.
/*
switch (new Date().getDay()) {
  case 4:
    text = "TGIF";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);
*/


// Code to determine the sex of a baby
/*
let sex = "male";
if(sex =! "male"){
  console.log("You are expecting a ", sex, "child");
}
else{
  console.log("You are expecting a female child");
}
*/


// child allowance and shopping conditions
/*
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance);
*/


//The example used to explain the strict equality concept on gather
/*
let myapples = 0; 

if(myapples === 0){
  myapples++
  console.log("Now you have", myapples, "apple")
} else{
  myapples = 0;
  console.log("I'm sorry, you now have", myapples, "apples")
}
*/


// Exercise 2 (1st part)
// Create a variable X that has a value of 32
// Create an if statement, that states if X equals 9, print true, otherwise print false
/*
let X = 32; 

if(X == 9){
  console.log("True")
} else {
  console.log("False")
}
*/

// Exercise 2 (2nd part)
//test Green and Blue scenarios alternatively
// Create an if statement that detects if Y equals to blue
/*
let Y = "Red";

if(Y == "Blue"){
  console.log("Blue detected!")
} else if(Y == "Green"){
  console.log("Green detected!")
} else{
  console.log("No Green or Blue detected!")
}
*/


// Numbers Comparison
//Using meal pricing as a case study
/*
let mealPrice = 100;

if (mealPrice < 40){
  console.log("The meal is very affordable")
} else if(mealPrice == 40){
  console.log("The meal is affordable")
} else{
  console.log("The meal is too expensive")
}
*/

/*
Comparison Operators list
==	      equal to
===	      equal value and equal type
!=        not equal
!==	      not equal value or not equal type
>	        greater than
<         less than
>=	      greater than or equal to
<=	      less than or equal to
*/

//Voters eligibility test
/*
let age = 108;

if(age < 18){
  console.log("Too young to vote")
} else if(age >= 18 && age <= 89){
  console.log("You are eligible to vote")
} else {
  console.log("You should be dead, why are you still tryna vote!!!")
}
*/


// Exercise 3 level 2
// change n to 46 and above but less than 65
//the value of n doesn't print because it is not within the conditions assigned by the if statement
/*
let n = 47; 

if(n > 45 && n < 65){
  console.log(n)
} 
*/

//While loop statements
// A program that counts staff meeting attendance from the 6th person till the 15th person.
/*
let staffAttendance = 5;

while (staffAttendance < 15){
  staffAttendance ++
  console.log(staffAttendance)
}
*/


// Exercise 4 level 2
// Create a while loop that loops from 2 to 9
// Number of pen increasing from 2 to 9
/*
let pen = 1;
while(pen < 9){
  pen ++
  console.log(pen)
}
*/

//Exercise 5 level 2
// Create a for loop that counts from 7 to 12
/*
for(a = 7; a < 13; a ++){
  console.log(a)
}
*/

// Increment is always executed at the end of the code block.
// For loop
/*
for(i = 0; i < 10; i++){
  console.log(i)
}
*/

// Array
// to print Orange
/*
let arr = ["Apple", "Orange", "Potatoes", 8, 11];
console.log(arr[1]);
*/

/*
if(condition){
  execute the code
} else {
  execute another code
}
*/

// Exercise 6 level 2
// print the fourth number (11) in the array
/*
let arr = [8, 9, 10, 11, 12, 13, 14];
console.log(arr[3]);
console.log(arr);
*/


// Exercise 7 level 2
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// first angle for exercise 7 level 2
let len = arr.length;
for(i = 0; i < len; i++){
  if(arr[i] > 4)
    console.log(arr[i]);
  }
  
// another angle for exercise 7 level 2
for (let i = 0; i < arr.length; i++){
  if (arr[i] > 4){
    console.log(arr[i]);
  }
}
*/


// Setup
//Count down with while loop
/*
const myArray = [];
let i = 20;
while(i >= 0){
  myArray.push(i);
  i--;
}
console.log(myArray);
*/

/*
//Count down with while loop
// const myArray = [];
// let i = 15;
// while(i >= 0){
//   console.log(i);
//   i--;
// }
*/

/*
for loop description
For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where 
a is the initialization statement, 
b is the condition statement, and 
c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
*/

// look through an array from left to right
/*
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
*/
// look through an array from right to left
/*
const arr = [10, 9, 8, 7, 6];

for (let i = arr.length; i >= 0; i--) {
   console.log(arr[i]);
}
*/


// for loop countdown
/*
for(i = 10; i >= 0; i--){
  console.log(i);
}
*/


// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
/*
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++){
  total += myArr[i];
}
console.log(total);
*/


// For Loop
// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

/*
const arr = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
*/


// for loop
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/*
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
    for (let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++)
      product *= arr[i][j];
    }
  // Only change code above this line
  console.log(product);
}
*/


// count down 10 to 0 (decrement by 1)
/*
for (let i = 10; i >= 0; i--){
  console.log(i);
}
*/


// count up 0 to 10 (Increment by 1)
/*
for (let i = 0; i <= 10; i++){
  console.log(i);
}
*/


//count up to 20 (Increment by 2)
/*
for (let i = 0; i <= 20; i += 2){
  console.log(i);
}
*/

//Exercise 1 level 3
// create a for loop that counts backward in steps of 3 from 102 to 27
/*
for (let i = 102; i >= 27; i -= 3){
  console.log(i);
}
*/


// Level 3 : Exercise 2
// create an empty array, write a for loop that increments from the number 3 to 12. push the array and use console.log to print the value
/*
let arr = [];
for (let i = 3; i <= 12; i++){
  arr.push(i);
}console.log(arr);
*/


// freecode camp 
// Using the and (&&) operator, look through an array and select a group of numbers
/*
let arr = [3, 10, 9, 5, 2, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8];

for (let i = 0; i < arr.length; i++) {
  if (i >= 3 && i <= 7){
    console.log(i); 
   }
}
*/


// Exercise 4 level 3
// console values less outside the range of 3 to 7
/*
let arr = [3, 10, 9, 5, 2, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8];

for (let i = 1; i < arr.length; i++) {
  if (i < 3 || i > 7){
    console.log(arr[i]); 
  }
}
*/


// Strings truncation
// You can alter a string with the substring method in Js
// function is console.log(variablename.substring(first letter postition, last letter position))

// let Job = "Northway";

// console.log(Job.substring(5)); //from the 5th letter to the end

// Exercise 5 level 3
/*
Make a variable called "Microverse"
Use the console.log to print the first 5 letters of the string
use the console.log to print the last 5 letters of the string
let tutor = "Microverse";

console.log(tutor.substring(0, 5)); //first 5
console.log(tutor.substring(5)); // last 5
*/


// .include methods
// Used to find out if an array includes a specific value.

// A program that lets you into the operations department if your name is on the staff list and denies you access if your name is not on it.
/*
let staff = ["Henry", "Areeb", "Aparna", "Riya"];

let user = "Safa";

if (staff.includes(user) === true){
  console.log("Welcome", user, "," ,"Can I get you a cup of coffee?");
}else{
  console.log("Sorry, Access Denied !!!. Only authorized persons are allowed beyond this point");
}
*/


// A program that determines if a number is included in the array and prints included, ortherwise prints invalid selection
/*
let arr = [6, 3, 5 , 2 ,9];

let find = 9;

if (arr.includes(find) === false){
  console.log("Invalid Number Selected");
}else{
  console.log("Yes", find, "is included in the array");
}
*/


// Exercise 6 level 3
// create an array with numbers from 1 to 10
// write an if statement that shows "Found it" if it finds 13 in the array, and "Not found", if it's not in the array.

/*
let arr = [];

let missingNum = 13;

for(i = 1; i <= 19; i++){
  arr.push(i);
}console.log(arr);

if(arr.includes(missingNum) === true){
  console.log(missingNum, "Found it!");
}else{
  console.log(missingNum, "Not found");
}
*/



// Exercise 7
// Create an array with numbers from 1 to 10
// Create a filter that pushes the numbers from 4 to 9 to a new array

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

let newArr = [];

for (let i = 0; i <= arr.length; i++){
    if (arr[i] >= 4 && arr[i] <= 9){
      newArr.push(arr[i]);
    }
}
console.log(newArr);
*/


// Practice
// Print a staff attendance list with a count from 15 to 0

/*
let staffAttendance = 15;

while (staffAttendance > 0) {
  console.log(staffAttendance);
    staffAttendance --;
}
*/

// Print the content of the array that is above 4

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < arr.length; i++) {
  if(arr[i] > 4){
    console.log(arr[i]);
  }
}
*/



// Pushing values into an array using the .push function

/*
const myArray = [];

myArray.push("Kezah");
myArray.push(23);
myArray.push("Rwanda");
myArray.push(28);
myArray.push("Nigeria");

console.log(myArray[3]);
*/

// ------------------------------------------------

// Replacing a value in an array with another value 

/*
const myArray = [50, 60, 70];
myArray[1] = 30;

console.log(myArray);
*/

// Populating an array with a while loop

/*
const ourArray = [];
let i = 0;
while (i <= 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);
*/


// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

/*
const arr = []; 
let i = 5;
 while (i >= 0){
  console.log(i);
    i--;  
 }
*/

// populating an array with an addition of 30
/*
const arr = []; // line 1
for (let i = 0; i <= 300; i += 30){
  console.log(i);
}
*/


// initialization statement {let i = 5;}
// consitional statement {i >= 0;}
// execution statement i-= 2

// populating an array with multiples of 2
/*
const myArray = [];

for (let i = 2; i <= 1024; i *= 2){
  myArray.push(i);
}  console.log(myArray);
*/


// Voters Eligibility

/*
let age = 54;

if (age < 18){
  console.log("Too young to vote");
} else if(age >= 18 && age <= 90){
  console.log("Kindly cast your vote");
} else{
  console.log("You should be dead by now")
}
*/

// Summing the vaues in an array 
/*
const myArr = [2, 3, 4, 5, 6,];
let total = 0;

  for (let i = 0; i < myArr.length; i++){
    total += myArr[i];
  }
  console.log(total);
*/

// pushing values into an empty array

/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = [];

  for (let i = 0; i <= arr.length; i++){
    if (arr[i] >= 4 && arr[i] <= 9) {
      newArr.push(arr[i]);
    }
  }
  console.log(arr);
  console.log(newArr);
*/

// ----------------------------------------------------

// Nested Sub Arrays in Big Arrays
/*
let bigArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < bigArr.length; i++){
  console.log(bigArr[i]);
  for (let j = 0; j < bigArr[i].length; j++){
    console.log(bigArr[i][j]);
  }
  }

  */


// level 3 Exercise 8 
// Reversing Sub Arrays in Value populated Big Arrays

/*
let arr = [[1,2,3],[4,5,6],[7,8,9]];

for(let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
        console.log(arr[i][j]);
    }
}
*/


// level 3 Exercise 8 {Solution 2}
// Reversing Sub Arrays in Big Arrays

/*
let arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

let result = arr.reduce((prev, current) => {
    return [...prev, ...current];
  }, [])
  .reduce((prev, current) => {
    return [current, ...prev];
  }, []);

console.log(result);
*/


// Creating a nested loop subarray in a big array
// Create an empty big array
// external counter initialized
// Create a loop for the bigArray
// create an empty little array
// create a loop for the little array
// push the ext ctr into the littleArr   
// increment the ext ctr stored
// push the littleArr into the bigArr
// print the value of the bigArr

/*
let bigArr = []; 
let extctr = 1; 
for (let i = 0; i < 3; i++){
  let littleArr = []; 
  for (let j = 0; j < 3; j++){
    littleArr.push(extctr);
    extctr++
  } 
  bigArr.push(littleArr);
} 
console.log(bigArr);
*/

// Level 3 Exercise 9
// generate a pattern that looks like this [ [ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1 ] ]

/*
let bigArr = [];

let extctr = 9
for (let i = 0; i < 3; i++){
  let smallArr = [];
  for (let j = 0; j < 3; j++){
    smallArr.push(extctr);
    extctr--;
  }
  bigArr.push(smallArr);
}
console.log(bigArr);
*/

// ------------------------------------------------------

// Javascript Functions
/*
function sum(){
  let x = 7;
  let y = 13;
  console.log(x + y);
}

sum();
*/
/*
function sum(x, y){
  console.log(x + y);
}
sum(7, 9);
*/
/*
function juice(firstIngredient, secondIngredient){
  console.log("Please enjoy your", firstIngredient, "and", secondIngredient, "juice")
}
juice("Cucumber", "Carrot");
*/

// Exercise 10 Level 3
// Write a function that multiplies 2 numbers
/*
function multiply(a, b){
  console.log(a * b);
}
multiply(2, 4);
*/

//Exercise 10 B Level 3
// Write a functiont that generates the message Hello <Name>!
/*
function greet(name){
  console.log("Hello", name,"!");
}

greet("Oscar");
*/

// Using "Return" for function output
/*
function sum(arr){
  let output = [];
  for (let i = 0; i < arr.length; i++){
    output.push(arr[i] + 1);
  }
  return output;
}
let result = sum([1, 2, 3, 4, 5]);

console.log(result);
*/

// Exercise 11 Level 3
// Use the code from the previous example but multiply by 5 into a new array
/*
function sum(arr){
  let output = [];
  for (let i = 0; i < arr.length; i++){
    output.push(arr[i] * 5);
  }
  return output;
}
let result = sum([1, 2, 3, 4, 5]);

console.log(result);
*/

// Reversing and Translating array in functions
/*
function reverse(arr){
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--){
    output.push(arr[i]);
  }
  return output;
}

let result = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(result);
*/

// Translating the array values 
/*
function binary(arr){
  let output = [];
  for (let i = 0; i < arr.length ; i++){
    if (arr[i] === 0){
      output.push("zero");
    }
    if (arr[i] === 1){
      output.push("One");
    }
  }
    return output;
}
let result = binary([1, 0, 0, 1, 0, 1]);

console.log(result);
*/

// Exercise 12 Level 3
// Create a function that loops in reverse and translates the array

/*
function reversebinary(arr){
  let output = [];
  
  for (let i = arr.length - 1; i >= 0; i--){
   // output.push(arr[i]);
    if (arr[i] === 4){
      output.push("four")
    }
        if (arr[i] === 3){
      output.push("three")
    }
        if (arr[i] === 2){
      output.push("two")
    }
        if (arr[i] === 1){
      output.push("one")
    }
    
   }
  return output;
  }
   
let result = reversebinary([1, 2, 1, 2]);

console.log(result);
*/

// Level 4 Coding Challenge

/*                  Exercise 1
           Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/
//                  Solution
/*
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

let result =  convertCtoF(30);

console.log(result);
*/

//                 Exercise 2
//              Reverse a String
/*
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/
//                 Solution
/*
function reverseString(str) {
  let output = "";

  for (let i = str.length - 1; i >= 0; i--){
    output += str[i]
  }
  return output;
}
let result = reverseString("Raymond");
console.log(result);
*/

//                   Exercise 3

/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/
//                  Solution

/*
function factorialize(num) {
  let output = 1;
  for (let i = 2; i <= num; i++){
    output *= i; 
  }
  return output;
}

let result = factorialize(20);

console.log(result);
*/

//                Exercise 4
/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

//                Solution 1
/*
function findLongestWordLength(str) {
let longestLength = 0;
let currentLength = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    currentLength = 0;
  } else {
    currentLength++;
  }
}
if (currentLength > longestLength) {
  longestLength = currentLength;
}

return longestLength;
}

let result = findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(result);
*/

//                Solution 2
/*
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
let result = findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(result);
*/

//                  Solution 3
/*
function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}

let result = findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(result);
*/

//                   Solution 4
/*
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
let result = findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(result);
*/


//                   Exercise 5
/*
                  Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
//                   Solution
/*
function getIndexToIns(arr, num) {

  let belong = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] < num){
      belong++;
    }
  }

  return belong;
}

let belong = getIndexToIns([10, 20, 30, 40, 50], 35);

console.log(belong);
*/

//                     Chunky Monkey
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

//                      Solution 1
/*
function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

let monkey = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(monkey);
*/

//                    Solution 2
/*
function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/
/* 
                Code Explanation for Solution 2
Firstly, we create two variables. newArr is an empty array which we will push to. We also have the i variable set to zero, for use in our while loop.

Our while loop loops until i is equal to or more than the length of the array in our test.

Inside our loop, we push to the newArr array using arr.slice(i, i+size). For the first time it loops, it will look something like:

newArr.push(arr.slice(1, 1+2))

After we push to newArr, we add the variable of size onto i.

Finally, we return the value of newArr.
*/

/*               Solution 3

function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
*/
/*             Code Explanation 

Firstly, we create a variable. newArr is an empty array which we will push to.
Our while loop loops until the length of the array in our test is not 0.
Inside our loop, we push to the newArr array using arr.splice(0, size).
For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
Finally, we return the value of newArr.
*/


//                  Exercise 7
/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
//                 Solution 1
/*
function sumAll(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);
*/
/*
                  Code Explanation
                  
Creating a variable sum to store the sum of the elements.
Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.
*/

//                Solution 2
/*
const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
*/

/*
                    Code Explanation
The formula for calculating the sum of a continuous range is “(startNum + endNum) * numCount / 2”.
arr[0] and arr[1] can either be startNum or endNum, order doesn’t matter.
We can get the count of numbers in range by “Math.abs(arr[0] - arr[1]) + 1”.
Applying the formula by plugging in the numbers.
*/

/*                  Exercise 8
                    Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

//                      Solution
/*
function destroyer(arr) {
let shortArr = [];
let extarr = arguments[0];
for (let i = 1; i < arguments.length; i++){
shortArr.push(arguments[i])
}
 // console.log(shortArr);
let finalNum = extarr.filter(value => shortArr.includes(value)=== false);

// console.log(finalNum);
return finalNum;
//                                0                   1  2  
} let result = destroyer([1, 2, 3, 1, 2, 3, 4, 5], 2, 3, 5); 
console.log(result);
*/


//                       Exercise 9
/*
                          Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
/*
function translatePigLatin(str) {
  let firstLetter = str[0];
  let vowels = "aeiou";
  // First loop
  if (vowels.includes(firstLetter) === true){
    return str + "way";
  }
  //  second loop
  let i = 0;
  let cluster = "";
  while (vowels.includes(str[i]) === false && i < str.length){
    cluster += str[i];
    i++;
  }
 // console.log(cluster);

  return str.substring(i) + cluster + "ay";
}

let result = translatePigLatin("rhythm");
console.log(result);
*/

//                          Solution 2

// function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }

// // test here
// let result = translatePigLatin("consonant");
// console.log(result);
// 

//                       Code Explanation
/*
Use replace() on the string, using a regular expression to check if the first letter is a consonant and adding way at the end in this case. If the first letter is a consonant nothing will happen at this point.
Use replace() again to check for consonants at the beginning of the word and to move it or them to the end of the word and add ay at the end.
*/

//                        Excercise 10 
/*
                          DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
//                       Solution
/*
function pairElement(str) {
  let output = [];
  for (let i = 0; i < str.length; i++){ 
  if (str[i] === "A"){
    output.push(["A", "T"]);
  }
  if (str[i] === "T"){
    output.push(["T", "A"]);
  }
  if (str[i] === "C"){
    output.push(["C", "G"]);
  }
  if (str[i] === "G"){
    output.push(["G", "C"]);
  }
  }
  return output;
}

let result = pairElement("ATCGA");
console.log(result);
*/
//                     Solution 2
/*
unction pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}

// test here
pairElement("GCG");
*/ 
//                 Solution Explanation
/*
Inside of the matchWithBasePair function, a switch is used to cover all four possible characters. Using if statements is another option.
Create an empty array and use the matchWithBasePair function to push the right values to the array and return them.
*/

//                    solution 3
/*
function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}

// test here
pairElement("GCG");
*/
//                   Code Explanation                      
/*
First define an object with all pair possibilities, this allows us to easily find by key or value.
Split str into a characters array so we can use each letter to find its pair.
Use the map function to map each character in the array of individual characters to an array with the character and its matching pair, creating a 2D array.
*/









// Make each number in the array a square.
/*
function squareNumber(sqr){
  
  let output = [];
  
  for (let i = 0; i < sqr.length; i++){
    output.push(sqr[i] * sqr[i])
  }
  return output;
}


let result = squareNumber([1, 2, 3, 4, 5, 6]);
console.log(result);
*/


//                         Level 5 
//                        Excerise 1
/*
                      Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
//                        Solution
/*
function convertHTML(str) {

  let conv = str.split("");
  

  for (let i = 0; i < conv.length; i++){
    if (conv[i] === "&"){
       conv[i] = "&amp;"; 
    }
    else if (conv[i] === "<"){
       conv[i] = "&lt;"; 
    }
    else if (conv[i] === ">"){
       conv[i] = "&gt;"; 
    }
    else if (conv[i] === ">"){
       conv[i] = "&gt;"; 
    }
    else if (conv[i] === "'"){
       conv[i] = "&apos;"; 
    }
    else if (conv[i] === "”"){
       conv[i] = "&quot;"; 
    }

    else if(str[i] === "\"") {
      conv[i] ="&quot;";
  }
    
  }
    let temp = conv.join("")
    return temp;
}


let result = convertHTML('Stuff in "quotation marks"');

console.log(result);
*/
