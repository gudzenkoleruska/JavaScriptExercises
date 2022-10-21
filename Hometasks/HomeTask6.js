/* Задание:
Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию. */

function printTask(num){

    console.log("Task number: " + num)
    num++
}


printTask(1);

function greet (name){

    return "Hello " + name + ", dear person "
}
console.log(greet("Anna"))

console.log("**********************************")

printTask(2);

/* Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные, две - числовые и 
третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
example:  function calculate(a, b, operator){} */

function canculator (a, b, operator){
    if(operator == "+"){
        return a + b;
    }
    if(operator == "-"){
        return a - b;
    }
    if(operator == "*"){
        return a * b;
    }
    if(operator == "/"){
        if (b == 0){
            return null;
        }else {
            return a /b ;
        }
    }
}
console.log("Результат вычисления: " + canculator(5, 5, "/"));
console.log("**********************************")
