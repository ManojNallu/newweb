//program to print the numbers from 1 to 10 using for loop............................................


// for(let i=0; i<=10; i++){
//     console.log(i)
// }

//program to print the numbers from 1 to 10 using while loop...........................................

// let i=0;

// while(i<=10){
//     console.log(i);
//     i++
// }

//program to print numbers from 1 to 100 using for loop and if statement to print only even number.............

// for(let i=0; i<=100; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// program to print first 10 numbers of fibnacci series..................

// function fibonacciSeries(n){
//     let num1 = 0, num2 = 1, nextTerm;

//     console.log('fibonacciSeries :');

//     for(let i = 0; i <= n; i++){
//         console.log(num1);
//         nextTerm = num1 + num2;
//         num1 = num2;
//         num2 = nextTerm;
//     }
// }

// fibonacciSeries(10);

//program that uses for loop to sum of the first 100 numbers......................

// let sum = 0;

// for(let i = 0; i<=100; i++){
//     sum = sum + i;
// }

// console.log(sum);

//GCD of two numbers..........................

// function gcd(a,b){

//     let divisor;

//     for (let i=1; i<=a && i<=b; i++){

//         if(a % i == 0 && b % i == 0){
//             divisor = i;
//         }
//     }
//     return divisor;
// }

// let result = gcd(13, 48);
// console.log(result);

//gcd in while loop-----------------------------------------------------------------
// function gcd(x,y){
//     if ((typeof x !== 'number') || (typeof y !== 'number')){
//         return false;
//     }
//         x = Math.abs(x);
//         y = Math.abs(y);

//         while(y){
//             let t = y;
//             y = x % y;
//             x = t;
//         }
//         return x;
// }
// let result = gcd(15,20)
// //console.log(result);
// //---------------------------to find the LCM of two numbers
// function lcm(a,b){
//     return (a /result) * b;
// }
// console.log(`The lcm of a and b is ${lcm(15,20)}`)

// //

// //................................................................................

// //progrm to print first 100 prime numbers

// function primeNumbers(n){



//     for(let i = 2; i <= n; i++){

//         let isPrime = true;
//         //console.log(isPrime);

//         for(let j = 2; j < i; j++){
//             if(i % j === 0){
//                 isPrime = false;
//                 break;
//             }
//         }

//         if(isPrime){
//             console.log(i);
//         }

//     }
// }

// primeNumbers(20);
///----------------------------------------------------------------

// function factorialOfaNumber(n){
//     if((n === 0)||(n === 1)){
//         return 1;
//     }
//     let result = 1;
//     // for(let i=2; i<=n; i ++){

//     //     result *= i;

//     // }

//     let i = 2;
//     while(i<=n){
//         result *= i;
//         i++
//     }

//     console.log(result);
// }
// //console.log(result);

// factorialOfaNumber(3);

//------------------------------------------------------------------

// function triangularNumber(n){
//     return n * (n+1) / 2;
// }  
//     for (let i = 1 ; i <= 20; i++){
//         console.log(triangularNumber(i));
//     }

//---------------------------------------------------------------------    

// function sumOfSquareOfFirst100Numbers(n){
//     for(let i = 2; i <= n; i++){
//         let result;
//         result = Math.sqrt(i)  
//         if (Number.isInteger(result)){
//             console.log(`the sqauare root of ${i} is ${result}`)
//         }

//     }

// }    
// sumOfSquareOfFirst100Numbers(100);

// let sum =0;

// for(let i = 0; i<=100;i++){
//     sum += i * i;
// }

// console.log(sum).............................................................
//end..................................................................................
// let num = 50; // replace with any positive integer
// let power = 0;
// while (Math.pow(2, power) < num) {
//   power++;
// }
// let greatestPowerOf2 = Math.pow(2, power - 1);
// console.log(`The greatest power of 2 that is less than ${num} is ${greatestPowerOf2}`);
//.....................................................................................................

// let num = 14; // replace with any positive integer
// let reversed = 0;
// while (num > 0) {
//   reversed = reversed * 10 + num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(`The reversed number is ${reversed}`);

//==========================================================================================================
//Write a prog to find max between 2 numbers?

// let num1 = 30;
// let num2 = 10;

// if (num1 > num2) {
//     console.log(`Num1(${num1}) is greater than Num2(${num2})`);
// } else {
//     console.log(`Num2(${num2}) is greater than Num1(${num1})`);
// }

// // write a program to find maximum between 3 numbers?

// let numb1 = 10;
// let numb2 = 20;
// let numb3 = 99;

// if (numb1 > numb2 && numb1 > numb3) {
//     console.log(`Numb1(${numb1}) is grater than Numb2(${numb2}) and Numb3(${numb3})`);
// } else if (numb2 > numb1 && numb2 > numb3) {
//     console.log(`Numb2(${numb2}) is grater than Numb1(${numb1}) and Numb3(${numb3})`);
// } else {
//     console.log(`Numb3(${numb3}) is grater than Numb1(${numb1}) and Numb2(${numb2})`);
// }

// // write a program to check whether a number is positive, negative or Zero?

// let number = 10;

// if (number > 0) {
//     console.log(`Number(${number}) is positive`);
// } else if (number < 0) {
//     console.log(`Number(${number}) is Negative`);
// } else if (number == 0) {
//     console.log(`Number(${number}) is Zero `)
// } else {
//     console.log("Invalid Number");
// }

// // write a program to check whether a number is divisible by 5 and 11 or not?

// let numbr = 55;

// if (numbr % 5 == 0 && numbr % 11 == 0) {
//     console.log(`Number(${numbr}) is divisible by '5' and '11'`);
// } else {
//     console.log(`Number(${numbr}) is not divisible by '5' and '11'`);
// }

// // write a program to check whether a num is even or odd?

// let _num = 10;

// if (_num % 2 == 0) {
//     console.log(`Number(${_num}) is a even number.`);
// } else {
//     console.log(`Number(${_num}) is a odd number.`);
// }
//===========================================================================================

// write a program to check whether a year is a leap year or not

// let year = 2020;

// if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
//     console.log(`${year} is a leap year`);
// }else{
//     console.log(`${year} is not a leap year`);
// }

// //=========================================================================

// // write a program to check whether a charecter is alphabet or not?

// let char = "MS";

// if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
//     console.log(`${char} is a Alphabet`);
// }else{
//     console.log(`${char} is not a Alphabet`);
// }
// //============================================================================\

// // write a program to input any alphabet and check whether it is vowel or consonant

// let charec = "A";

// if((charec == "a" || charec == "e" || charec == "i" || charec == "o" || charec =="u") ||
// (charec == "A" || charec == "E" || charec == "I" || charec == "O" || charec =="U")){
//     console.log(`${charec} is a Vowel`);
// }else{
//     console.log(`${charec} is a Consonant`)

// }
// //===============================================================================

// // write a program to input any alphabet and check whether it is alphabet,digit or special charecter

// let charecter = "@";
// let regexofNumbers = /^[a-zA-Z]+$/;
// let regexofDigits =  /^[0-9]+$/;
// let regexofSpecialChar = /^[@#$%^&+=]+$/

// if (regexofNumbers.test(charecter)){
//     console.log(`${charecter} is alphabet`)

// }else if(regexofDigits.test(charecter)){
//     console.log(`${charecter} is a number`);

// }else if(regexofSpecialChar.test(charecter)){
//     console.log(`${charecter} is a special Charecter`);
// }else{
//     console.log("Invalid Charecter");
// }

//================================================================================

// // write a program to check whether a charecter is uppercase or lowercase.

// let char1 = "m";

// let regexUpCase = /^[A-Z]+$/;
// let regexLowCase = /^[a-z]+$/;

// if(regexUpCase.test(char1)){
//     console.log(`${char1} is a Uppercase Charecter`);
// }else if (regexLowCase.test(char1)){
//     console.log(`${char1} is a Lowercase Charecter`);
// }else{
//     console.log("Invalid Charecter");
// }
//========================================================================================

// write a program to input week number and print week day

let weekNum = 1;

switch(weekNum){

    case  1 :
    console.log ("monday");
    break;
    case  2 :
    console.log ("Tuesday");
    break;
    case  3 :
    console.log ("Wednedday");
    break;
    case  4 :
    console.log ("Thursday");
    break;
    case  5 :
    console.log ("Friday");
    break;
    case  6 :
    console.log ("Saturday");
    break;
    case  7 :
    console.log ("Sunday");
    break;
    default :
    console.log("Invalid Weeknumber");

}
//===========================================================================================
// 31days - Jan(1),Mar(3),May(5),July(7),aug(8),oct(10),Dec(12)
  // 30days - april(4),June(6),Sep(9),Nov(11)
   // 28(or) 29 - Feb(2)    
//write a program to input month number and print no of days in a month?
let monthNum;

function NoofDayinMonth(monthNum){
   
    if(monthNum == 2){

      console.log("28 or 29 Days in a month");

    } else if(monthNum == 4 ||monthNum == 6 ||monthNum == 9 ||monthNum == 11 ){
        console.log("30 Days in a month");

    }else {

        console.log("31 Days in a month");

    }
}

NoofDayinMonth(2);

//write a program to input month number and print no of days in a month?

// same prog by using switch 

let mnthNum = 10;

switch(mnthNum){

    case 1 : 
    case 3 :
    case 5 :  
    case 7 : 
    case 8 :
    case 10 :   
    case 12 :
        
    console.log("31 days in a month");
    break;

    case 4 : 
    case 6 :
    case 9 :  
    case 11 : 

    console.log("30 days in a month");
    break;

    case 2 :

    console.log("28 or 29 days in a month");
    break;

    default :

    console.log("Invalid Month Number");
    break;
}

//====================================================================================================

// write a prog to count No of notes in given Amount?

// function countNotes(amount){

//     let notecount = {
//         2000 : 0,
//         500 :  0,
//         200 :  0,
//         100 :  0,
//         50  :  0,
//         20  :  0,
//         10  :  0,
//         5   :  0,
//         1   :  0,
//     };

//     if(amount >= 2000){
//         notecount[2000] = Math.floor(amount/2000);
//         amount = amount % 2000;
//     }

//     if (amount >= 500){
//         notecount[500] = Math.floor(amount/500);
//         amount = amount % 500;
//     }

//     if (amount >= 200){
//         notecount[200] = Math.floor(amount/200);
//         amount = amount % 200;
//     }

//     if(amount >= 100){
//         notecount[100] = Math.floor(amount/100);
//         amount = amount % 100;
//     }

//     if(amount >= 50){
//         notecount[50] = Math.floor(amount/50);
//         amount = amount % 50;
//     }

//     if(amount >= 20){
//         notecount[20] = Math.floor(amount/20);
//         amount = amount % 20;
//     }

//     if(amount >= 10){
//         notecount[10] = Math.floor(amount/10);
//         amount = amount % 10;
//     }

//     if(amount >= 5){
//         notecount[5] = Math.floor(amount/5);
//         amount = amount % 5;
//     }

//     if(amount >= 2){
//         notecount[2] = Math.floor(amount/2);
//         amount = amount % 2;
//     }

//     if(amount >= 1){
//         notecount[1] = Math.floor(amount/1);
//         amount = amount % 1;
//     }

//     return notecount;
    
// }

// let amount = 5537;

// let notecount = countNotes(amount);

// console.log(notecount);

// or 

// function countnote(amount1){
//     let notes = [2000,500,200,100,50,20,10,5,2,1];
//     let notecount = [];

//     for (let i = 0; i < notes.length; i++){
//         const count = Math.floor(amount1/notes[i]);
//         notecount.push(count);
//         amount1 = amount1 - count * notes[i];
//     }

//     return notecount;
// }

// let amount1 = 5537;

// let notes = countnote(5537);

// console.log(notes);

//====================================================================================

//write a program to input angles of a triangle and check whethr it is a triangle or not?

function isTriangle(a,b,c){

    if ((a + b) > c && (b + c ) > a && (a + c) > b){
        console.log("it is a triangle")
    }else{
        console.log("it is not a triangle");
    }

};

const isATriangle = isTriangle(60,60,160);

//===============================================================================

//write a program to input all sides of a triangle and check whethr it is a triangle or not?

function checkTriangle(a,b,c){
    if ((a + b) > c && (b + c ) > a && (a + c) > b){
       return true;
    }else{
        return false;
    }

}
const side1 = parseInt(prompt("Enter the length of side 1: "));
const side2 = parseInt(prompt("Enter the length of side 2: "));
const side3 = parseInt(prompt("Enter the length of side 3: "));

if (checkTriangle(side1, side2, side3)) {
  console.log("It is a valid triangle.");
} else {
  console.log("It is not a valid triangle.");
}

//================================================================================

//write a program to check whether the triangle is a eqilateral,isosceles,scalene triangle

function checkDiffTriangles(a,b,c){
    if(a === b && b === c && c === a){
        console.log("it is a eqilateral triangle");

    }else if(a == b || b == a || a ==c ){       // two sides of equal length...
        console.log("its a isosceles Triangle");
    } else{
        console.log("It is a scalene triangle");
    }
}

 checkDiffTriangles(5,5,5);

 //(or)........

//  function classifyTriangle(a, b, c) {
//     if (a === b && b === c) {
//       return "Equilateral triangle";
//     } else if (a === b || b === c || c === a) {
//       return "Isosceles triangle";
//     } else {
//       return "Scalene triangle";
//     }
//   }
  
//   // Example usage:
//   const triangleType = classifyTriangle(5, 5, 5); // Equilateral triangle
//   console.log(triangleType);
  
//   const triangleType2 = classifyTriangle(5, 7, 5); // Isosceles triangle
//   console.log(triangleType2);
  
//   const triangleType3 = classifyTriangle(3, 4, 5); // Scalene triangle
//   console.log(triangleType3);
  

  ///=============================================================

  // how to calculate the profit or loss

//   function calculateProfitorLoss(cp,sp){
   
//     if(cp - sp){
//         return true;
//     }else{
//         return false;
//     }
//   }

//   if (calculateProfitorLoss(100,90)){
//     console.log("profit")
//   }else{
//     console.log("Loss")
//   }

// (or)

// function calculateProfitLoss(costprice,sellingprice){
//     let profitOrLoss = costprice - sellingprice;

//     if (profitOrLoss > 0){
//         return "profit :" + profitOrLoss;
//     }else if (profitOrLoss < 0){
//         return "Loss :" + profitOrLoss;
//     }else{
//         return "No Profit No Loss"
//     }
// }
// let costprice = 100;
// let sellingprice = 80;
// console.log(calculateProfitLoss(costprice,sellingprice));

// //================================================================================================

// function calculatepercentageand(physics,chemistry,biology,mathematics,computer){
//     let percentage = ((physics + chemistry + biology + mathematics + computer) / 500) * 100;

//     console.log(percentage);

//     switch(true){
//         case percentage >= 90 :
//             console.log("Grade A");
//             break;
//         case percentage >= 80 :
//             console.log("Grade B");
//             break;  
//          case percentage >= 70 :
//             console.log("Grade c");
//             break;
//          case percentage >= 60 :
//             console.log("Grade D");
//             break;
//         case percentage >= 40 :
//             console.log("Grade E");
//             break;  
//          case percentage < 40 :
//             console.log("Grade F");
//             break;   
//         default :
//             console.log("Invalid Percentage");
//             break;   
//     }
// }
// calculatepercentageand(60,50,09,10,5);

// //================================================================================

// function calHRAandDA(basicsalary){

//     let HRA = 0;
//     let DA = 0;

//     if (basicsalary <= 10000){
//         HRA = 20;
//         DA = 80;

//     }else if (basicsalary <= 20000){
//         HRA = 25;
//          DA = 90;

//     }else if(basicsalary > 20000){
//         HRA = 30;
//         DA = 95;
//     }

//     let HRAamount = (basicsalary * HRA) / 100;
//     let DAamount = (basicsalary * DA) / 100;
//     let totalSalary = basicsalary + HRAamount + DAamount;

//     return { HRA: HRAamount, DA: DAamount, TotalSalary: totalSalary };
// }

// console.log(calHRAandDA(50000));
//========================================================================================

// function factorialOfaNumber(num){

//     console.log(num);
    

//         if (num == 1){
//             return 1;
//         }else{
//             return num * factorialOfaNumber(num -1);
//         }

   
// }

// console.log(factorialOfaNumber(3));

// //-------

// function number(num){
//     console.log(num);

//     if(num > 1){
//         number(num -1);
//     }


// }

// number(3);

//======================================================























    

































// let arry = [
//     {name:"Manoj",marks:70},
//     {name:"siri",marks:80},
//     {name:"monty",marks:90},
// ]

// let newArry = arry.map(ele => {
//     if(ele >= 35){
//         ele.ispassed = true;
//     }else{
//         ele.ispassed = false
//     }
//     return ele

// })

// console.log(newArry);
//------------------------- swap a number with and without a variable---------------
// let x = 10;

// let y = 20;

// y = y - x;

// x = x + y;


// // let z = x;

// // x = y;

// // y = z;

// // if(x == 10){
// //     x = y;
// // }else if (y == 20){
// //     y = x;
// // }


// console.log(x);
// console.log(y);
//-----------------------------------palindraome ptogram-------------------------

//  function checkPalindrome(str){
//     let text = str;

//     let myArray = text.split("");

//     let reversed  = myArray.reverse();

//     let joined = reversed.join("");

//     if(text == joined){
//         console.log("It is palindrome");
//     }else{
//         console.log("It is not a palindrome");
//     }

//  }
// checkPalindrome('madam');

// //or

// let x = "webla";

// let revstring = "";
// for (let i = x.length -1; i >=0; i--){
//     revstring += x.charAt(i);
// }

// if(x == revstring){
//     console.log("It is palindrome");
// }else{
//     console.log("It is not a palindrome");
// }
//--------------------------------------------------------

// *
// *
// *
// *

// function printPattern(num){
//     for(let i = 1; i <= num; i++){
//         for(j = 1; j <= i; j++){
//             document.write("*"); 
//         }
//         document.write("<br>")
//     }
// }

// printPattern(5);

// function pattern(num){
//     for (let i = 0; i < num; i++) {
//         for(let j = 5; j > i; j--){
//             document.write("*"); 
//         }
//         document.write("<br>")
//     }
// }

// pattern(5);

// function pattern(num){
//     for (let i = num; i >= 1; i--) {
//         for(let j = 1; j <= i; j++){
//             document.write("*"); 
//         }
//         document.write("<br>")
//     }
// }

// pattern(5);
// 1 3
// 2 2
// 3 1
// 4 0
//================================ triangle pyramid=====================

// function pyramid(num) {
//     for (let i = 1; i <= num; i++) {

//         for (let j = 1; j <= num - i; j++) {
//             document.write("&nbsp&nbsp");
//         }
//         for(let k = 1; k <= 2 * i -1; k++){
//             document.write('*')
//         }
//         document.write("<br>")
//     }

// }
// pyramid(10);
// =====================================================================

// let str = "I like this program very much";

// str.sort();

// console.log(str);




// function changestring(str) {
//      let text = str;

//   let myArray = text.split(" "); 

//   let reversed = myArray.reverse();

//   let reversedstr = reversed.join(" ");

//   return reversedstr;


//  }

// console.log(changestring("I like this program very much"));
//====================================================================================================
// let arr1 = [1,2,3,4,5];

// let arr2 = [2,3,4,6];

// let newArr = [];

//  arr2.map(ele => {
//     if(!arr1.includes(ele) && !newArr.includes(ele)){
//         return newArr.push(ele);
//     }
// });

// console.log(newArr);


// function myFunction(ele){
//     if(!arr2.includes(ele) && !arr.includes(ele)){
//        return arr.push(ele);
//     }
// }

//console.log(arr);

//==================================================================================
//let arr = [90, 8, 7, 10, 20, 4, 9];

// function sumOfHighest3Numbers(arr) { // sumOfHighest3Numbersin a array

//     arr.sort((a, b) => b - a);

//     let sum = 0;
//     for (let i = 0; i < 3; i++) {
//         if (arr[i]) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// let arr = [90, 8, 7, 10, 20, 4, 9];

// console.log(sumOfHighest3Numbers(arr));

//===============================================================================

//let str = "I am going to make some changes in the world";

// function twoChar(str) {
//     let text = str;

//     let myArray = text.split(" ");
//     let result = [];

//     for (let i = 0; i < myArray.length; i++) {
//         console.log(myArray[i]);

//         if (myArray[i].length == 2) {
//             result.push(myArray[i]);
//         }
//     }
//     return result;
// }

// console.log(twoChar("I am going to make some changes in the world"));

// //=================================================================================

// let studentData = [{
//     Sno: 1,
//     Name: "Manoj",
//     Grade: "A"
// },
// {
//     Sno: 2,
//     Name: "Siri",
//     Grade: "A+"
// },
// {
//     Sno: 3,
//     Name: "Monty",
//     Grade: "A+"
// },

// ];

// function addTableData(data) {
//     let table = document.getElementById("StudentTable");

//     for (let i = 0; i < data.length; i++) {
//         let tr = document.createElement('tr');
//         let td = document.createElement('td');
//         td.innerHTML = data[i].Sno;
//         tr.appendChild(td);

//         let td1 = document.createElement('td');
//         td1.innerHTML = data[i].Name;
//         tr.appendChild(td1);

//         let td2 = document.createElement('td');
//         td2.innerHTML = data[i].Grade;
//         tr.appendChild(td2);

//         table.appendChild(tr);
//     }
// }


// function myFunction() {
//     addTableData(studentData);

// }

// function removeTableRow() {
//     let table = document.getElementById("StudentTable");
//     if (table.rows.length > 1) {
//         table.deleteRow(table.rows.length - 1);
//     }else{
//         console.log("No more rows found");
//     }
//   }
  




// let table = document.getElementById("StudentTable");

// let tr = document.createElement('tr');

// let td = document.createElement('td');

// td.innerHTML = 1;



// tr.appendChild(td);

// table.appendChild(tr);










