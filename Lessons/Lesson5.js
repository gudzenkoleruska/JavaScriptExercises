let i = 0;
while (i < 3){
    console.log(i);
    i++
}
console.log("_______________________________________________________")
let j = 7;
while (j != 0){
    console.log (j);
j--
}
console.log("_______________________________________________________")

const fruits = ['apple', 'banana', 'pears', 'plums']
let index = 0;

while (index <= fruits.length){
    console.log(fruits[index])
    index++
}

console.log("_______________________________________________________")
let k = 0;

do {
    console.log(k);
    k++;
}while (i > 3);

console.log("_______________________________________________________")

for (let i = 0; i <= 10; i++){
    if (i == 7)
    break;
    console.log(i);
} 
console.log("_______________________________________________________")

for (let i = 0; i <= 10; i++){
    if (i % 2 == 0)
    continue;
    console.log(i);
} 
console.log("_______________________________________________________")

let a = 7;
(a > 5) ? console.log (a) : console.log ("Not a");

console.log("_______________________________________________________")
/*1
  12
  123
  1234
  12345 */

let row = 5; 
for (let line = 1; line <= row; line++){                            //отвечает за количество строк;
    let str = " ";
    for (let numberline = 1; numberline <= line; numberline++){   //отвечает за наполняемость строки;
        str += numberline;
    }
    console.log(str);
} 


console.log("_______________________________________________________")

/* 12345
   1234
   123
   12
   1 */

for (let line1 = 5; line1 >= 1; line1--){                            //отвечает за количество строк;
    let str = " ";                                                  //записываем в строку
    for (let numberline = 1; numberline <= line1; numberline++){   //отвечает за наполняемость строки;
        str = str + numberline;
    }
    console.log(str);
}
console.log("_______________________________________________________")

/* Задачка посложнее* 
 Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему */

/*  let str = "Hello, world! My name is Alice";

 let result = [];
 let result2 = " ";

 for (let i = 0; i <= str.length; i++){
    result[i] = str[i].charCodeAt();

 }
 console.log(result);
 for (let i = 0; i < result.length; i++){
    result2 += String.fromCharCode(result[i]);
 }
 console.log(result2);

 console.log("_______________________________________________________") */

 //Отсортировать массив

 const array_new = [10, 2, 3, 6, 7, 1, 9, 8, 2, 4];

 for (let i = 0; i < array_new.length- 1; i++){
    for (let j = i + 1; j <array_new.length; j++){
        if (array_new[i] > array_new[j]){
            let temp = array_new[i];
            array_new[i] = array_new[j];
            array_new[j] = temp;
        }
    }

 } console.log(array_new)


 console.log("_______________________________________________________") 

 //Максимальное число в массиве

console.log (array_new[array_new.length-1])      //array_new.at(-1)
console.log (array_new[array_new.length-2])      //array_new.at(-2)

console.log("_______________________________________________________") 

let n = 10; 
let str = "";

for(let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
        str += j;
    }
    str += '\n';
}
console.log(str);

console.log("_______________________________________________________") 

let m = 10; 
let str1 = "";

for(let i = 1; i <= m; i++){
    for (let j = m + 1 - i; j >= i; j--){
        str1 += j;
    }
    str1 += '\n';
}
console.log(str1);

console.log("_______________________________________________________") 

let p = 10; 
let str2 = "";

for(let i = 1; i <= p; i++){
    str2 += " ".repeat(p - i);
    for (let j = 1; j <= i; j++){
        str2 += j;
    }
    str2 += '\n';
}
console.log(str2);

console.log("_______________________________________________________") 

let s = 5; 
let str3 = "";

for(let i = 1; i <= s; i++){
    str3 += " ".repeat(s - i);
    for (let j = 1; j <= i; j++){
        str3 += j;
    }
    for(let j = i - 1; j >= i; j--){
        str3 += j;
    }
    str3 += '\n';
}
console.log(str3);

console.log("_______________________________________________________") 


let q = 10; 
let str4 = "";

for(let i = 1; i <= q; i++){
    for (let j = q + 1 -i; j >= i; j--){
        str4 += j;
    }
    str4 += '\n';
}
console.log(str4);

console.log("_______________________________________________________") 

let arr = ['mama', 'my', [1, 2, null, undefined, true, 'c'], 'papac', 'abc'];

for(let i = 0; i <= arr.length; i++){              //mama
    for (j = 0; j < arr[i].length; j++){          //m               a           m              a
        if (arr[i][j] == 'c'){                   // arr [0][0], arr [0][1]    arr [0][3]      arr [0][4]
            console.log(arr[i]);
        }
    }
}
console.log("_______________________________________________________") 

/* let e, o, b;

switch (o){
    case "+":
      e + b;
    case "-": 
      e - b;
    case "*":
    e * b;
    case "/":
    return b == 0 ? null : e / b;
    default:
        return null; 
} */

console.log("_______________________________________________________") 

// Рисунок Ёлочка

let height = 10;
for (let i = 0; i < height; i++){
    let str = "";

 for ( let j = 0; j < height - i; j++){
    str += ' ';
}
for (let star = 0; star < i; star++){
    str += '*';
}
str += '*';
for(let rStar = 0; rStar < i; rStar++){
    str += '*';  
}
console.log(str);
}

