console.log("Task1\n")

let array = [];
let x = 0;

for (let i = 0; i <= 20; i++){
    if (i % 5 != 0){
    array [x] = i;
    x++;
    } 
    }

console.log (array);

console.log("_______________________________________________________")

console.log("Task2 Сложить 2 массива одинаковой длины:\n")

let array1 = [1, 3, -5, 0, 11, 22, 5];

let array2 = [3, -3, 5, 10, 121, -22, 1];


let summArray1 = 0;
for (let i = 0; i < array1.length; i++ ){
    summArray1 = summArray1 + array1[i]; 
}
console.log ("Сумма 1го массивов: "+ summArray1); 

let summArray2 = 0;

for (let i = 0; i < array2.length; i++ ){
    summArray2 = summArray2 + array2[i]; 
}
console.log ("Сумма 2го массивов: "+ summArray2)  

let summArray = 0;
for (let i = 0; i < array1.length; i++ ){
    summArray = summArray + array1[i] + array2[i]; 
}
console.log ("Сумма 2х массивов: " + summArray);

console.log("_______________________________________________________")

console.log("Task3 Сложить 2 массива разной длины:\n")

let array3 = [1, 2, 10, -5, 7, 25, 100, 98, 15];

let array4 = [25, 56, 1, 25, 7, 78, 98];

let summArray3 = 0;
for (let i = 0; i < array3.length + array4.length; i++ ){    //длины 2х массивов складываем
   if ( i < array3.length){
    summArray3 = summArray3 + array3[i]
   } else {
    summArray3 = summArray3 + array4[i - array3.length];    //отнимаем длину 1го массива
   }
   }
console.log ("Сумма 2х разных массивов: " + summArray3)

console.log("_______________________________________________________")

console.log("Task4 Вывести 5 раз число от 9 до 1:\n")
for (let i = 5; i >= 1; i--) { //отвечает за количество строк
  let str = "";
  for (let j = 9 ; j >= 1 ; j--) { //отвечает за наполнение строки
    str = str + j;
  }
    console.log(str);
}



