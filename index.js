console.log("hello JS");
const a = 12;
const b = 3453443;
let total = a + b;
console.log(total);

//Block scope can be accessed from outside the block in var variable
var car = 5;
{
  var car2 = 24;
}
var car3 = car + car2;
console.log(car3);

//Block scope cannot be accessed from outside the block in let variable
/*
let x = 5;
{
  let y = 24;
}
let z = x + y;
console.log(z);
*/

//Block scope can be accessed from inside the block in let and const variable
{
  let x = 5;
  let y = 24;
  let z = x + y;
  console.log(z);
}

//let cannot be redeclared
/*
let h = "Jhine Doe";
let h = 24;
let h3 = h;
console.log(h3);*/

//var can be redeclared
var d = "Jhone Doe";
var d = 24;
var d3 = d;
console.log(d3);

//let are also hoisted to the top of the block but not initialized
/*
carName = "rejina";
let carName = "tina";
console.log(carName);
*/

//var are also hoisted to the top and can be initialized at any time
carName = "rejina";
var carName;
console.log(carName);

//constant arrays
const cars = ["saab", "Volvo", "BMW"];
cars[0] = "Alto"; //you can change an element
cars.push("Audi"); //you can add an element
console.log(cars);
