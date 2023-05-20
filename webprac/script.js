// // programs on Conditionsl statements..

// // write a program to find maximum btn two numbers and three numbers..

// let a = 2;

// let b = 5;

// let z = 6;

// if (z > a && z > b) {
//     console.log('z is bigger');
// } else {
//     console.log('z is smaller');
// }

// // program to check whether a number is negative positive or zero..
// // logic is....1) num > 0 -> positive
// //             2) num < 0 -> Negative
// //             3) num = 0 -> zero

// let num = 0;

// if (num > 0) {
//     console.log('number is positive');
// } else if (num < 0) {
//     console.log("number is negative");
// } else {
//     console.log("number is Zero");
// }
// // end...

// // prog to check whether a number is divisible by 5 and 11 or not

// let num1 = 11;

// if (num1 % 5 == 0) {
//     console.log("num1 is divisible by 5");
// } else if (num1 % 11 == 0) {
//     console.log("num1 is divisible by 11");
// } else {
//     console.log('num1 is not divisible by 5 and 11')
// }

// // or 
// let num2 = 55;

// if (num2 % 5 == 0 && num2 % 11 == 0) {
//     console.log("number is divisible by 5 and 11");
// } else {
//     console.log('number is not divisible by 5 and 11')
// }
// // end

// // program to check a num is even or odd.

// let num3 = 5;

// if (num3 % 2 == 0) {
//     console.log(" number is  even number ");
// } else {
//     console.log("number is odd number");
// }
// // end ..

// // program to check whether a year is leap year or not

// let year = 2020;

// if (year * 4 == 0 && year * 4 == 0 || year * 100 != 0) {
//     console.log("year is a leap year")
// } else {
//     console.log("year is not a leap year");
// }

// // end..,

// const charec = 'a';

// if ((charec >= 'a' && charec <= 'z') || (charec >= 'A' && charec <= 'Z')) {
//     console.log(charec + " is an alphbaet");
// } else {
//     console.log(charec + " is not a alphabet");
// }

// //end

// const ch = "9";

// if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {

//     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//         console.log(ch + " is an vowel");
//     } else if ((ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')) {
//         console.log(ch + " is a vowel");
//     }
// } else {
//     console.log(ch + " is an consonant");
// }

// // end

// let char = "Z";

// if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//     console.log(char + " is a alphabet");
// } else if (char >= '0' && char <= '9') {
//     console.log(char + " is a number");
// } else {
//     console.log(char + " is a special charecter");
// }
// // end

// let char1 = "s";

// if (char1 >= "a" && char1 <= "z") {
//     console.log(char1 + " is  lower case Alphabet");

// } else if (char1 >= "A" && char1 <= "Z") {
//     console.log(char1 + " is Upper case Alphabet");
// }
// // end.

// //enter input week number .. print week day

// let x = 'drinkbeer';
// let y = 'nobeer';
// const weekNum = 7;

// switch (weekNum) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         // let age = prompt("how old are you?", " ");
//         // let accessAllowed = (age > 18) ? x : y;
//         // console.log(accessAllowed);
//         break;
//     default:
//         console.log("Invalid week Number")
// }
// // end

// let month = prompt("enter the month number(1-12)", " ");

// if (month == 2) {
//     console.log("28 or 29 days");
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log("30days")
// } else {
//     console.log("31 days");
// }
// // end..

// const country = "India";
// const continent = "Asia";
// let population = 40;

// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// const language = "telugu";

// console.log(typeof isIsland);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof language);



// let halfPopulation = population/2;
// console.log(halfPopulation);

// population++;
// console.log(population);

// let country2 = "finland";
// let finlandPop = 6;

// console.log(population > finlandPop);

// console.log(population < 33);

// // let description = country + " isin " + continent + " and its " + population + "million people speak " + language;

// // console.log(description);

// let description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
// console.log(description);

// if (population > 33 ){
//     console.log(`${country}'s population is above average`);
// }else {
//     console.log(`${country}'s population is below average`);
// }
// let x = "19"
// let y = "13";
// let z = x - y;
// console.log(`${z} and ${typeof z}`);

// console.log("123" < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// // '9' - '5';
// // '19' - '13' + '17';
// // '19' - '13' + 17; 
// // '123' < 57;
// // 5 + 6 + '4' + 9 - 4 - 2;

// let numNeighbours = '1';

// let num = Number(numNeighbours);

// if (num === 1){
//     console.log("only 1 border!");
// }else if (num > 1){
//     console.log("More than 1 border");
// }else {
//     console.log("no borders");
// }



// if (language == 'English' && population <= 50 && isIsland != true ){
//     console.log(`sarah You should live in ${country}`)
// }else{
//     console.log(`you shuold not live in ${country}`);
// }

// switch(language) {
//     case 'chinese' || 'mandarin' : 
//     console.log('MOST number of native speakers!');

//     // case 'mandarin' :
//     //     console.log('MOST number of native speakers!');
//         break;

//     case 'spanish' :
//         console.log('2nd place in number of native speakers');
//         break;

//     case 'English' :
//         console.log('3rd place');
//         break;

//     case 'hindi' :
//         console.log('number 4');
//         break;

//     case 'arabic' :
//         console.log("number 5");
//         break;

//     default :
//         console.log("gerat langauge too");
// }
// //

// console.log((population > 33) ? 'india population is above average' : 'india population is below average');

// //or 

// let result = `${country}'s population is ${population > 33 ? 'above' : 'below'} average`;

// console.log(result);


// // ..

// let marksWeight = 78;
// let marksHeight = 1.69;

// let johnWeight = 92;
// let johnHeight = 1.95;

// let marksBmi = marksWeight / marksHeight ** 2;

// let johnBmi = johnWeight / johnWeight ** 2;



// let markHigherBMI = `${marksBmi > johnBmi ? 'Mark has higher BMI than John' : 'John has higher BMI than Mark'}`;

// console.log(markHigherBMI);

// console.log(`mark (${marksBmi})has higher BMI than John (${johnBmi})`);


// // let markHigherBMI = marksBmi > johnBmi;

// // console.log(marksBmi, johnBmi, markHigherBMI);

// // if(markHigherBMI == true)
// // {
// //     console.log("Mark has higher BMI than John");
// // }else{
// //     console.log("John has higher BMI than Mark");
// // }

// let team1 = 'dolphins';
// let team2 = 'koala'

// let dolphinScore1 = 97;
// let dolphinScore2 = 112;
// let dolphinScore3 = 101;


// let koalasScore1 = 109;
// let koalasScore2 = 95;
// let koalasScore3 = 106;


// let dolphinAvg = dolphinScore1 + dolphinScore2 + dolphinScore3 / 3;

// let koalaAvg = koalasScore1 + koalasScore2 + koalasScore3 / 3;

// console.log(dolphinAvg);
// console.log(koalaAvg);

// if (dolphinAvg > koalaAvg && dolphinAvg > 100)
// {
//     console.log(`${team1} has the highest avegrage (${dolphinAvg})`);

// }else if(koalaAvg > dolphinAvg && koalaAvg > 100){

//     console.log(`${team2} has the highest average (${koalaAvg})`);

// }else if(dolphinAvg == koalaAvg && dolphinAvg >=100 && koalaAvg >=100){
//     console.log("match draw");
// }else{
//     console.log("no team won");
// }
// //  

// let bill =300 ;


// // if(billValue >=50 && billValue <=300){
// //     console.log(`tip value will be 15%`); 
// // }else{
// //     console.log(`tip value will be 20%`)
// // }

// let tipBill = (bill >=50 && bill <=300) ? (15/100) * bill : bill * (20/100);
// console.log(tipBill);

// console.log(`The bill was ${bill} and the tip was ${tipBill} and the total value is ${bill + tipBill}`);


// function describeCountry(country, population,capitalcity){
//         console.log(`${country} has ${population} million peolple and capitalcity is ${capitalcity} `);
// }

// describeCountry('india','140','delhi');
// describeCountry('finland','6','helsinki');
// describeCountry('usa','10','washington');

// // let country;
// function percentageOfWorld1(population,country){
//    let  percentage = ( population /7900 * 100);
//    console.log(`${country} has ${population} million people so it's about ${percentage} ofthe world population`);
// }

// percentageOfWorld1('1500','india');
// percentageOfWorld1('1441', 'china');
// percentageOfWorld1('1441','paris');

// let a= 9;

// if (a % 3 ==0){
//     console.log(a + 'is divsible by 3');
// }else if(a % 5 ==0){
//     console.log(a + 'is divsible by 5');
// }


// let sum = 0;
// for(let i=0; i<=1000; i++){
//     if((i % 3) ==0 || (i % 5)==0){
//         console.log(i);
//         sum = sum +i 
//     }

// }
// console.log(sum);
//....

// function fibonacciSeries(n) {
//     let num1 = 0, num2 = 1, nextTerm;

//     let sum = 0;

//     console.log("Fibonacci Series:");

//     for (let i = 1; i <= n; i++) {
//         console.log(num1);

//         if (num1 % 2 == 0) {

//             sum = sum + num1;
//         }

//         nextTerm = num1 + num2;
//         num1 = num2;
//         num2 = nextTerm;
//     }
//      console.log(`sum of even numbers in  fibnocci series is ${sum}`);

// }

// fibonacciSeries(10); // Replace 10 with the desired number of terms



// function describeCountry(country, population,capitalcity){
//         console.log(`${country} has ${population} million peolple and capitalcity is ${capitalcity} `);
// }

// describeCountry('india','140','delhi');
// describeCountry('finland','6','helsinki');
// describeCountry('usa','10','washington');


// function percentageOfWorld1(population){

//     return (population/7900) * 100;
//     //console.log(`India has 1441 million people, so its about  ${population}% of world population`)
// }
// //percentageOfWorld1(1440);

// function describePopulation(country,population){
//     const percentage = percentageOfWorld1(population);
//     const description = (`${country} has ${population}million people which is about ${percentage}of the world`);
//     console.log(description);
// }

// describePopulation("india",1440);

// let country = "india"
// const percentageOfWorld2 = function(population) {
//     return population / 7900 * 100; 
// };

// const percPortugal1 = percentageOfWorld2(10);
// const percChina1 = percentageOfWorld2(1441);
// const percUSA1 = percentageOfWorld2(332);

// // console.log(percPortugal1,percChina1.percUSA1);

// console.log(`${country} has 1441 million people , so its about ${percUSA1} of world population`);


//.............................................................................................................
// const percentageOfWorld3 = (population,country) =>   population = population / 7900 * 100 ;
// const percPortugal1 = percentageOfWorld3(1441);
// console.log(`portugal has 1441 million people , so its about ${percPortugal1} of world population`);

// // 


// function describePopulation(country,population){
//         (population / 7900) * 100;
//         console.log(`${country}`)
// }
// describePopulation('india',1400)

// const percentageOfWorld1 = function(describePopulation) {
//     population = (population/7900) * 100;
// }

// 
//-------------------------------------------------------------------------------------

//  let fruits = ['apple', 'grapes', 'oranges', 'watermelon'];

//  console.log(fruits);

//  let removed = fruits.splice(2,2,'mango','straberry');

//  console.log(fruits);

// console.log(removed);

// const myfunction = x => console.log(`hello ${x}`);

// myfunction('monty');

// const points = [40, 100, 1, 5, 25, 10];

// // points.forEach( n=> 
// //     console.log(n));

// let newArray = points.filter((n) => n > 18);

// console.log(newArray);

// let points2 = points.map(myFunction);

// console.log(points2);

// function myFunction(value){
//     return `${value * 2}`
// }



// console.log(fruits[1]);

// fruits[4] = 'muskmelon';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// let fruit = [];
// fruit[123] = "Apple";

// alert(fruit.length); // 124



//    const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   console.log(person['firstName']);
//length of an array..

//    console.log(fruits.length);

//    console.log(fruits[-1]);

//    console.log(fruits[fruits.length-2]);
//    // get last elemenst with "at"//
//    console.log(fruits.at(1));


// function sumInput(){

//     let numbers = [];

//     while(true){

//         let value = prompt("enter a Number please", 0);

//         if(value === "" || value === null||  !isFinite(value)) break;

//         numbers.push(+value);
//     }

//     let sum = 0;

//     for (let number of numbers){
//         sum = sum + number;
//     }

//     return sum;
// }

// alert(sumInput());


// //percentageOfWorld1(1440);


// let populations = [1440, 1441, 1442, 1443];

// if (populations.length == 4) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// let percentages = populations.map(percentageOfWorld1);

// console.log(percentages);

// function percentageOfWorld1(population) {

//     return (population / 7900) * 100;
//     //console.log(`India has 1441 million people, so its about  ${population}% of world population`);
//   }
// //   Create an array containing all the neighbouring countries of a country of your
// // choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// // into a variable called 'neighbours'


//   let neighbouringCountries = ["pakistan","afghanistan","bangladesh","srilanka"];


//   let neighbours = neighbouringCountries;
// console.log(neighbours.indexOf('bangladesh'));

// neighbours[neighbours.indexOf('bangladesh')] = 'bangla'



// //   neighbours.push('Utopia');
// //   neighbours.pop('Utopia');

// //   if(!neighbours.includes("germany")){
// //     console.log('Probably not a central European country :D');
// //   }

// //  neighbours[neighbours.indexOf('bangladesh')] = 'bangla';

// //   for (let i =0; i < neighbouringCountries.length; i++){

// //     if(neighbouringCountries[i] != "germany"){
// //         console.log('Probably not a central European country :D');

// //     }
// //   }

// //   for (let i =0; i < neighbours.length; i++){

// //     if(neighbours[i] == "bangladesh"){
// //         console.log(neighbours[i]="Bangla");

// //     }
// //   }

// // //  
//   console.log(neighbours);
//--------------------------------------------------------------------------------------------------------------

// ARRAY PROGRAMS.......................



// function originalArray(fruits) {

//     let reversedArray = [];

//     for (let i = fruits.length - 1; i >= 0; i--) {
//         reversedArray.push(fruits[i]);
//     }
//     return reversedArray;
// }

// let fruits = ['apple', 'banana', 'grapes', 'mango'];

// console.log(originalArray(fruits));


// //-----------------------------------------------------------

// let numbers = [20, 30, 55, 12, 1, 2, 0];

// numbers.sort(function (a, b) { return a - b });

// console.log(numbers);

// //------------------------------------------------------

// function findLongestString(arr) {
//     let longest = '';

//     for (let i = 0; i < arr.length; i++){
//         if(arr[i].length > longest.length){
//             longest = arr[i];
//         }

//     }
//     return longest;
// }

// let arr = ['apple', 'bananas', 'grapes', 'mango'];

// console.log(findLongestString(arr));
//----------------------------------------------------------------------------
//program to find the sum of elements in an array..

// function sumOfElememts(arr) {
//     let sum = 0;

//     for(let i=0 ; i < arr.length; i++){
//         sum += arr[i];
//     }

//     return sum;
    
// }

// let arr = [1,2,3,4,5];
// console.log(sumOfElememts(arr));

// let arry = [1,2,3,4,5];

// let sum = arry.reduce(myFunction);

// function myFunction(value,total){
//    return total + value;
// }

// console.log(sum);
//------------------------------------------------------------------

// function maxElementOfArray(arr){
//     let max = arr[0]
//     for(let i = 1; i < arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let arr= [20,55,70,12,33,44,59];
// console.log(maxElement(arr));

//---------------------------------------------------------------------
//  let fruits = ['apple','banana','mango','grapes','orange'];

// // let position = fruits.indexOf('mango');

// // console.log(position);

// function findIndexOf(fruits,element){
//     for(let i =0; i < fruits.length; i++){
//         if(fruits[i] === element){
//             return i;
//         }
//     }
//     return -1
// }

// console.log(findIndexOf(fruits,'banana'));

// function removeDuplicates(arr) {
//  let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (result.indexOf(arr[i]) === -1) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
  
//   let arr = [1, 2, 3, 2, 1, 4, 5, 4];
  
//   console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
  
// function removeDuplicates(arr){
//     let result = [];

// for (let i = 0; i < arr.length; i++){
//     if(!result.includes(arr[i])){
//         result.push(arr[i]);
//     }
// }
// return result;
// }
// let arr = [1,1,2,2,3,3,4,4,5,5];

//console.log(removeDuplicates(arr));
//------------------------------------------------------------------

// function intersectionOfNumbers(arr1,arr2){
//     let output = [];
//     for(let i = 0; i < arr1.length; i++){
//         if(arr2.includes(arr1[i]) && !output.includes(arr1[i])){
//             output.push(arr1[i]);
//         }
//     }
//     return output;
// }

// let arr1 = [1,2,3,4,5,6];
// let arr2 = [2,3,4];

// console.log(intersectionOfNumbers(arr1,arr2));
//-----------------------------------------------------------------------

//for each programs....

// let arr = [1,2,3,4,5];
// let newArr = [];
// arr.forEach( ele =>{
//     newArr.push(ele * 2);
// });
// console.log(newArr);

// let sum = 0;
// arr.forEach((ele) => {
//    // console.log(ele);
//     sum += ele;
// })

// //or 
// //let sum = 0;
// // arr.forEach(myFunction);

// // function myFunction(value){
// //     sum += value;
// // }
// console.log(sum);

//----------------------------------------------

// let fahrenheitTemps = [99,98,101,102,100];

// let celsiusTemps = fahrenheitTemps.map(temp => {
//     return (temp - 32) * 5 / 9;
// });

// // function myFunction(temp){
// //     return (temp - 32) * 5 / 9;
// // }

// console.log(celsiusTemps);
//--------------------------------------------------------

// let numbers = [2,4,6,8,9];

// let squareOfNumbers = numbers.map(num => {
//     return num * num;
// })

// console.log(squareOfNumbers);

//------------------------------------------------------------

// let num = [1,2,3,4,5,,6,7,8,9,10];



// let evenNumbers = num.filter( ele => {
//    return ele % 2 == 0;
// });
// console.log(evenNumbers);

let num = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

let uniqueValue = num.filter((value,index,arr) =>{
    return arr.indexOf(value) === index;
})
console.log(uniqueValue);
                                                                                                                                                                        
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;// 20//50
        largest = arr[i];//50//90
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }

  let arr = [20,50,90,40,60];
console.log(findSecondLargest(arr));  







