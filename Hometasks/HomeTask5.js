/* 1
   12
   123
   1234
   12345 */

/* let row = 5; 
let str = ""; */

/* for (let i = 1; i <= row; i++){                            //отвечает за количество строк;

    for (let j = 1; j <= i; j++){   //отвечает за наполняемость строки;
        str += j % 10;

    }
    str += "\n";                                                //перенос на следующую строку
} 
console.log(str);


console.log("_______________________________________________________") */

/*    1
      12
      123
      1234
      12345 */

 /*      let row = 5; 
      let str = ""; */

/* for (let i = 1; i <= row; i++){                            //отвечает за количество строк;
str += " ".repeat(row - i);                                        //добавление пробелов
    for (let j = 1; j <= i; j++){                           //отвечает за наполняемость строки;
        str += j % 10;
    }
    str += "\n";                                                //перенос на следующую строку
} 
console.log(str);

console.log("_______________________________________________________") */
/*  11
   1221
  123321
 12344321
1234554321 */

/* let row = 15; 
let str = "";

for (let i = 1; i <= row; i++){                           
    str += " ".repeat(row - i);                                       
        for (let j = 1; j <= i; j++){                          
            str += j % 10;
        }
        for (let k = i-1; k >= 1; k--){
            str += k % 10;
        }
        str += "\n";                                              
    } 
    console.log(str); */

   /*  console.log("_______________________________________________________")  */

   //Нарисовать ромб

    let row = 9; 
    let str = "";

for (let i = 1; i <= row; i++){                                   //кол-во строк   
    str += " ".repeat(row - i);                                   //пробелы перед циклом методом repeat                      
        for (let j = 1; j <= i; j++){                             //наполнение строк             
            str += j % 10;                                        //деление на 10, чтобы после 9 не добавлялись числа на 2 знака
        }
        for (let k = i-1; k >= 1; k--){                          //новый цикл
            str += k % 10;
        }
        str += "\n";                                             //перенос строки после 2го цикла, кот при наполнении строк                                       
    } //нижняя часть
  for (let i = row - 1; i >= 1; i--){                            // row -1 чтобы убрать задвоенние строки посредине
    str += " ".repeat(row - i);    
    for (let j = 1; j <= i; j++){                          
        str += j % 10;
    }
    for (let k = i-1; k >= 1; k--){
        str += k % 10;
    }
    str += "\n";
  }
  console.log(str);
  console.log("_______________________________________________________") 

  //Нарисовать ёлочку

/*  *
   ***
  *****
 *******
********* */

let row1 = 5;
let str1 = "";
for (let i = 0; i < row1; i++){
    for (let j = i; j < row1 - 1; j++){            //цикл наполнения пробелами
        str1 += " ";                     
    }
    for (let k = 0; k < 2 * i + 1; k++){
        str1 += "*"; 
    } str1 += "\n";

} console.log(str1);
console.log("_______________________________________________________") 

/* Нарисуйте пирамидку
1 
2 6 
3 7 10 
4 8 11 13 
5 9 12 14 15 */

let rows = 9;    //5 строк
let str2 = "";

for (let i = 1; i <= rows; i++){
    let num = i;
    for (j = 1; j <= i; j++ ){
        str2 += num + " ";
        num = num + (row - j);            
    }
    str2 += "\n";
}
console.log(str2);

