function print (arg){
    console.log(arg);
}
print([1, 2, 3])


function sum (a, b){
    let result = a + b;

    print(result);                   //вложенный метод
}


sum (1,4);                         //5

sum("Test ", "Number");            // Test Number

console.log("*************************************************");

let sum2 = (a, b) =>  a + b; 
console.log(sum2 (2, 5));            //7

function checkEven (num){
    return num % 2 == 0 ? "even" : "odd";
}

console.log("*************************************************");

let arr = [2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++){
console.log(`${arr[i]} - ${checkEven(arr[i])}`);
}

console.log("*************************************************");

function sum (){
    let sum = 0;

    for (let i = 0; i < arguments.length; i++){        //все аргументы в функции
        sum += arguments[i];
    }
    return sum;
}



let arr1 = [10, 20, 30, 40, 50]
let result = sum(...arr1);                      //...spread

console.log(result);

console.log("*************************************************");

const lessArray = [1, 2, 3]
const moarArray = [...lessArray, 4, 5, 6]
console.log(moarArray);                       // result [ 1, 2, 3, 4, 5, 6 ]

console.log("*************************************************");

//Стрелочная функция

const newSumm = (num1, num2) => num1 + num2;       //в случае, когда 1 строка кода - не нужен return и {}
const newPow = num1 => num1 * 2;                  //только когда 1 параметр

console.log(newSumm(10, 20));
console.log(newPow(10));

console.log("*************************************************");
//Задание: найти самое длинное слово в массиве и посчитать кол-во символов

const words = ["spray", "limit123", "test", 15, ['test', 'best', 20, 'kkkjkdfj', 1, 89],  "invorenments"];

function longestArr (arr){

    let longest = arr[0].length;

    for (let i = 0; i <= arr.length - 1; i++){
        if (longest < arr[i].length){
            longest = arr[i].length;
        }
    }

    return longest;

}

console.log(longestArr(words));

console.log("*************************************************");

//Задание: найти в массиве цифры

function findNumbers(arr){

    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) == 'number')

            console.log(arr[i]);

            for (let j = 0; j < arr[i].length; j++){
                if(typeof(arr[i][j]) == 'number')

                    console.log(arr[i][j]);
        }
    } 
}
findNumbers(words);
console.log("*************************************************");

function calcType (a, b, res){

    if (res == a + b){
        return "addition";
    }
    if (res == a - b){
        return "difference";
    }
    if (res == a * b){
        return "multiply";
    }
    if (res == a / b){
        return "devision";
    }
}

console.log((calcType(5, 10, 50)))

console.log("*************************************************");

function loveflow (flower1, flower2){
    if (flower1 % 2 == 0 && flower2 % 2 != 0){
        return true;
    }  
    else if (flower2 % 2 == 0 && flower1 % 2 != 0){
        return true;
    }
    return false; 
} 

console.log(loveflow(5, 10));

console.log("*************************************************");

function isPrime(num){
    if (num > 1){
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            return false;
            }       
        }
        return true;
    }
    return false;
}

/* console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(1));
console.log(isPrime(-4)); */


function haveManyPrime (array){
    let count = 0;

    for (let i = 0; i < array.length; i++ ){
        if (isPrime(array[i])){
            count ++;
        }
    }
    return count;
}

let array = [10, 15, 6, 0, 4, -10, 1, 5, 3];      // 5 and 3 -simple numbers
console.log(haveManyPrime(array));

console.log("*************************************************");


//Calback functions

const calculator = function (num1, num2, callback){
    return callback (num1, num2);
}

const add = function (num1, num2){
    return num1 + num2;
}

const sub = function (num1, num2){
    return num1 - num2;
}

console.log("Решение функции calback: " + calculator(2, 6, add))

console.log("Решение функции calback: " + calculator(12, 6, sub))

console.log("*************************************************");

function countPositiveSumNegative(input){
    let arr = [0, 0];

    if (input != null && input.length != 0){

        for (let i = 0; i < input.length; i++){
            if (input[i] > 0)  {
                arr[0] ++;                   //считаем кол-во элементов положительные числа
            }
            if (input[i] < 0){
              arr[1] += input[i];           //суммируем отрицательные
            }
        }
        return arr;
    }
    return [];
}

console.log(countPositiveSumNegative([1, 2, 3, 4, -5, -6, 0, -9, -1]));
console.log("*************************************************");

const toJadenCase = function(string){
    let strJaden = string.split (" ");

    for(let i = 0; i < strJaden.length; i++){
        strJaden[i] = strJaden[i][0].toUpperCase() + strJaden[i].slice(1);                //slice - метод выризает символы
    }
    return strJaden.join(" ");
}
console.log(toJadenCase("How can mirrows be real...."))

console.log("*************************************************");