// --- compare with strings


// let string = "abcde";
// console.log(string[2]);

//  string[2] = 'l';      // cann't change the element
//  console.log(string);

// const array = ['a', 'b', 'c', 'd', 'e'];
// console.log(array[2]);

// array[2] = 'M';      // can change
// console.log(array);

// ========= split(); join(); ========

//=== split(); делит строку по указанному разделителю, возвращает массив
// split("");  => возвращает массив _всех_ символов

// let string = "Hello World";
// console.log(string);

// console.log(string.split(" "));
//let stringNew = string.split(" ")
//console.log(stringNew);

// let newArrayFromString = string.split(" ")
// console.log(newArrayFromString);


// === join(); конвертирует массив в строку, по умолчанию 
// разделяет символы запятой , but do not changeit
 
// let array = ['a', 'b', 'c', 1, 2, 3];
// console.log(array);

// console.log(array.join());
// console.log(array);

// let newStringFromArray = array.join("")
// console.log(newStringFromArray)

// ========== Методы pop/push, shift/unshift ======

// push  ->  добавляет элемент(ы) в конец.
// pop ->  удаляет последний элемент (и возвращает этот элемент!)

// const letters = ['a', 'b', 'c', 'd', 'e'];
// //console.log(letters);
// letters.push('f', 's', 1, 5);
// letters.push(88)
// let c = letters.push('g');  //return quantity of elements

// console.log(letters);
// console.log(c);

// //
// let a = letters.pop();                // return deleted element 
// console.log(letters);
// console.log(a);


// unshift -> Добавляет элемент(ы) в начало массива
// shift удаляет элемент в начале, сдвигая очередь, так 
// что второй элемент становится первым (и возвращает этот элемент!)

// const bigLetters = ['A', 'B', 'C', 'D', 'E'];

// bigLetters.unshift('Z');
// let d = bigLetters.unshift('X', 'Y');   //return quantity of elements
// console.log(bigLetters);
// console.log(d)

// bigLetters.shift();
// bigLetters.shift();
// console.log(bigLetters);
//console.log(b)


// ------- объединение массивов
//  concatenation - не используется!

// const letters = ['a', 'b', 'c', 'd', 'e'];
// const bigLetters = ['A', 'B', 'C', 'D', 'E'];
// //console.log(letters + " " + bigLetters);   // строка!!!
// console.log(String(7));        // convert to string
// let num = String(7)
// let num2 = 5
// console.log(num + num2)
// // push()    

//  const arr1 = [1, 2, 3];
//  const arr2 = ['a', 'b', 'c'];
//arr1.push(arr2, 5)
//console.log(arr1);

// push() + spread operator ...

// arr1.push(...arr2);   // (...arr2) ==> ('a', 'b', 'c')
// console.log(arr1);

// //через третий массив

// const arr3 = [...arr1, ...arr2];
// const arr4 = [1, 2, 3, 'a', 'b', 'c']
// console.log(arr3 );
// console.log(arr4)
// 

// ------ spread operator (...)

//  const numbers = [4, 8, 99, 9, 7, 777, 54];
// // // console.log(numbers);
// // // console.log(...numbers);

// // //console.log(Math.max(4, 8, 99, 9));

// // console.log(Math.max(...numbers));
// // console.log(Math.min(...numbers));
//  console.log(Math.max(...numbers))

// //----------- ==; === -------- compare arrays

// const arr = [1, 2];
// const arr1 = ["a", "b"]
//const arr1 = arr;

// console.log(arr !== arr1); 
// console.log(arr > arr1);
// console.log(arr < arr1);

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// const str = 'a';
// const strObj = new String('a');

// const a1 = [1, 2, 7];
// const b1 = [1, 2, 3];
//  let a2 = a1.join()
//  let b2 = b1.join()

// console.log(JSON.stringify(a1) == JSON.stringify(b1)) // compare string

// =========================

// let arr = [1, 2, 3];
// let emptyArr = []
// //emptyArr.push(1, 5, 7)
// emptyArr.push(1, 3, 5, "f")
// emptyArr[0] = "A"
// console.log(emptyArr)
// console.log(String(arr), String(emptyArr));
// console.log(Number(arr), Number(emptyArr));
// console.log(Boolean(arr), Boolean(emptyArr));

//===================String methods===========
// ===.length

// let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = txt.length;
// console.log(txt.length)

// === .slice()
//Slice out a portion of a string from position 7 to position 13(13 not included):

// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7, 13);
// console.log(part)

//=== replace()
//The replace() method replaces a specified value with another value in a string:

// let message = "Please 5 visit Microsoft!";
// let newText = message.replaceAll("5", "9");
// console.log(newText)


// == charAt()
//Get the first character in a string:

// let text = "HELLO WORLD";
// let letter = text.charAt(0);
// console.log(letter, text[0])

//== repeat()
//Create copies of a text:
// let a = "Hi!"
// console.log(a.repeat(4))

// Create copies of a text:

// let text = "Hello world!";
// let result = text.repeat(2);

// == trim()
//Remove spaces with trim():

// let text = "Hello World!";
// let result = text.trim();
// console.log(text.toUpperCase())
// console.log(result)

console.log(arr(arr.length -1));                
console.log(arr.at(-1));               //равнаценная запись с тем, что написано выше


const arr = [2, 3, 6, 8, 10];
console.log(arr.find(el => el % 2 != 0));

const arr1 = [2, 3, 6, 8, 10, 'test', true, NaN, [1,2,3,4]];
const newArr1 = arr1.filter(el => typeof el == "number");
console.log(newArr1);
console.log(typeof(newArr1));



const arr3 = [-2, -3, -6, -8, -10];

const changeSign = function(el) {
    console.log(-el)
}
/* changeSign(arr3[0]); */


/* arr3.forEach(changeSign); */
arr3.forEach(el => console.log(el **3));



const arr4 = ["Java", "JavaScript", "Python", "SQL"];
console.log(arr4.map((el, i, arr) => i == 0 || i == (arr.length - 1) ? `**${el}**` : el));

/* распечатать массив от 10 до 25 */

let start = 10;
let finish = 25;

const arr5 = Array.from(Array(finish - start + 1).fill(start)).map((el, i) => el + i);    //создание массива
console.log(arr5);

console.log([...Array(11).keys()]);    //создание массива
    
