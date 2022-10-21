//Calculator
// let num1 = 5;
// let num2 = 0;
// let result;

// let operator = "/";

// if (operator == "+") {
//   result = num1 + num2;
//   console.log("Your sum: " + result);
// } else if (operator == "-") {
//   result = num1 - num2;
//   console.log("Your difference: " + result);
// } else if (operator == "/") {
//   if (num2 == 0) {
//   console.log("Please enter another number, 'Zero' is not allowed !")
//   } else {
//     result = num1 / num2;
//   console.log("Your devision: " + result);
//   }}

//Пусть а,b,c - числа и им присваиваются какие-то значения. Нужно вывести на экран максимальное значение

// let a = 100;
// let b = 15;
// let c = 25;

// if (a > b && a > c) {
//    console.log("Max number is a = " + a)
// } else if (b > a && b > c){
//    console.log("Max number is b = " + b)
// } else {
//   console.log("Max number is c = " + c)
// }
let season;
let month = 1;

switch (month){
  case 12:
  case 1:
  case 2:
    season = "Winter"
  break;
  case 3:
  case 4:
  case 5:
    season = "Sping"
  break;
  case 6:
  case 7:
  case 8:
    season = "Summer"
  break;
  case 9:
  case 10:
  case 11:
    season = "Autumn"
    break;
    
    default:
     console.log("Try another value")
  }
 console.log(season);