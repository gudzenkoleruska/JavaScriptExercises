//Hometask1
console.log("_______________________________________________________")

console.log("Task1\n")

let firstname ="John";
let lastname =" Adams ";
console.log(firstname, lastname);
firstname ="Anna";
lastname= " Karenina ";
console.log(firstname,lastname);
var newVariable= 500;       //можно обьявлять переменную одну и ту же много раз с var
var newVariable = 200;
console.log("Variable: ", newVariable);
let admin = firstname+ lastname;
console.log("Admin: ", admin);

console.log("_______________________________________________________")

console.log("Task2\n")

//Task2
/*
   Data: cup, coffe, water, milk, sugar
   Make a coffe with milk myself
  1. Take a cup with size 400 gramm 
  2. Put 1 small spoon coffe to the cup
  3. Add water 250 gramm to the cup
  4. Brew coffee until ready
  5. Add 1 small spoon sugar to the coffe
  6. Add milk 100 gramm to the cup
  */

const coffee_label= "Coffe with milk: ";    //const - неизменяемая переменная
let coffe="black ground coffee";
let cup = 400;
let water= 250;
let milk= 100;
let sugar= true;
let coffe_isReady = true;
console.log(coffee_label, "coffe -", coffe, "\nthe size of cup -",  cup, "\nadd hot water -", water, "\nadd milk-", milk, "\nadd sugar -", sugar, "\nready coffe - ", coffe_isReady);

//console.log(coffee_label, "coffe - ", coffe, ", the size of cup -",  cup, ", add hot water - ", water, ", add milk- ", milk, ", add sugar -", sugar, ", ready coffe -", coffe_isReady);

console.log("_______________________________________________________")

console.log("Task3\n")

let num1 = 5;
let num2 = 8;
let res = num1+num2;
console.log("Результат сложения: "+res);

let Perimetr = 2*(num1+num2);
let Square = num1*num2;
console.log("Периметр: "+ Perimetr, "Площадь: "+ Square);

console.log("_______________________________________________________")

console.log("Task4\n")

let variable_x=10;
let variable_y=20;
let variable_t = variable_x;
variable_x = variable_y;
variable_y = variable_t;
console.log("Значение Х: " + variable_x, "Значение Y: " + variable_y )

// variable_x=variable_x-variable_y;
// variable_y=variable_x+variable_y;
// variable_x=variable_y-variable_x;
// console.log("Значение Х: " + variable_x, "Значение Y: " + variable_y)


