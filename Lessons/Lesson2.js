//Lesson2

 let num1 = 10;
 let num2 = 5.5; 
 let summ = num1+num2;
 let minus = num1-num2;
 let multiple = num1*num2;
 let dev = num1/num2;
 let reminder = num1%num2;
 console.log ("Summa: "+summ+ "\nMinus: "+ minus + "\nMultiple: "+multiple+ "\nDivision: "+dev+"\nReminder: "+ reminder)

// //Инкремент и Декремент
// let myVariable =10;
// document.write("<br> <br> Simple variable: ", myVariable, "<br>");
// document.write("Инкремент firstly: ", ++myVariable, "<br>"); //сначала увеличивает, потом выводит на экран
// document.write("Инкремент after: ", myVariable++, "<br>"); // сначала выводит, потом прибавляет
// document.write ("Simple variable: "+myVariable+ "<br> <br>")
// document.write("Декремент firstly: ", --myVariable, "<br>"); //сначала отнимает, потом выводит
// document.write("Декремент after: ", myVariable--, "<br>"); 
// document.write ("Simple variable: "+myVariable+ "<br> <br>")

// let num = 2;
// let degree = num**4;          //возведение в степень
// document.write ("<br>", "Exponentiation: ", degree, "<br>");

// let a;
// let myDivision =24/a;
// document.write ("<br> Number/letter= ", myDivision, "<br>");

// let infinity = 24/0;
// document.write ("<br> Number/0= ", infinity, "<br>");

// let bool1 =(5<0);
// let bool2 = (10>=10);

// document.write("<br> false value: "+bool1 + `<br>true value: ${bool2}`)

// let a2 = "5";
// let b = -10;
// let c = "c";
// let C = "C";
// let d = 0;

// console.log(5 === a2);    //строгое сравнение
// console.log(5 == a2);    //нестрогое сравнение
// console.log(b != "-10");  //заменяет 1 =
// console.log(b !== "-10");
// console.log(C == "c");

// console.log(b > d);

// || -ИЛИ, && -И, ! - НЕРАВНО. Приоритет оператора И больше,чем ИЛИ

//Tasks
// 1. 1. Найти максимальное число из трех: 
// Пусть a, b, c – переменные, которым присваиваются некоторые числа. Нужно вывести на экран максимальное число.

// let a3 = 2;
// let b3 = 5;
// let c3 = 10;

// if (a3>b3 && a3>c3){
//   document.write ("Maximum value is :" +a3)}
//     else if (b3>a3 && b3>c3){
//   document.write ("Maximum value is :" +b3)
//   } else{
//   document.write ("Maximum value is  :" +c3)
//   }

// 2. Определить существование треугольника и его тип
// Даны длины трех отрезков (AB, BC, AC). Нужно определить возможность существования треугольника, составленного из этих отрезков. Если такой треугольник существует, то нужно определить тип треугольника (определить, разносторонний, равнобедренный или равносторонний)

// let AB = 5; 
// let BC = 8; 
// let AC = 15; 

// if (AB + BC <= AC || AB + AC <= AB || BC + AC <= AB){ 
//  document.write("This is a triagle.")
// }
//   if (AB == BC && BC == AC){
//   document.write ("<br> It is equilateral triangle.")
//  }
//    else if (AB == BC && BC!=AC){
//   document.write("<br> It is isosceles triangle.")
//     }
//   else if (AB!= BC && BC !=AC && AC !=AB){
//       document.write("<br>It is scalene triangle.")
//     } 
//   else {
//       document.write("This is not triagle.")}

// 3. Определить високосный год или нет
// Високосные года делятся нацело на 4. Однако из этого правила есть исключение: столетия, которые не делятся нацело на 400, високосными не являются.

// let year = 396;

//  if (year % 100 == 0 && year % 400 == 0){
//    document.write("Это высокосный год")
//  }
//    else if (year % 4 == 0 && year % 100 > 0){
//     document.write ("Это высокосный год")
//    }
//   else { 
//    document.write("Это невысокосный год")}
 
let number1 = "-6";
let number2 = 5;

console.log (number1 +number2+ "\n");  //выполняется конкатенация, если добавим унарный + к number1, то математическое сложение

// let num11= "5";
// let num12 = 5;
// document.write ("<br>", num11 == num12); //сравниваем только значения
// document.write ("<br>", num11 === num12); //сравниваем сначала тип, потом значение

// let str11= "Hello, World";
// let str12 = "Hello, World";
// document.write ("<br>", str11 == str12); //сравниваем только значения
// document.write ("<br>", str11 === str12); //сравниваем сначала тип, потом значение

//Задача по экзамену: 
let exam = 90;
let projects = 3;
let finalGrade;

if (exam > 90 || projects>10) {
  finalGrade = 100;
}
else if (exam > 75 && projects >= 5){
  finalGrade = 90;
}
else if (exam > 50 && projects >= 2){
  finalGrade = 75;
}
else {finalGrade = 0}
console.log("Final grade is: "+finalGrade)

  