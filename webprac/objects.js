const person = {
    firstName: 'Manoj',
    lastName: 'n',
    age: 23,
    eyeColor: 'black',
}
person.fullName = function () {
    return (this.firstName + " " + this.lastName).toLocaleLowerCase();
}

console.log(person.fullName());

// console.log(`The person Name is ${person.firstName} ${person.lastName}`);

// console.log(person['firstName'] + person.lastName);

// const x = person;

// console.log(x);



const person1 = {
    firstName: 'siri',
    lastName: 'D',
    age: 24,
    eyeColor: 'black',
    cars: [
        { name: "mahendra", models: ["thar", "xuv700", "scorpio"] },
        { name: "Jeep", models: ["Wrangeler", "Jeep", "Compass"] },
        { name: "BMW", models: ["320", "X3", "X5"] }
    ]
}

let text = "";
for (let i in person1.cars) {
    text += person1.cars[i].name;
    for (let j in person1.cars[i].models) {
        text += person1.cars[i].models[j];
    }
}
console.log(text);


//console.log(person1);





const obj = { a: 1, b: 2, c: 3 };

Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
})

Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
})



//xconsole.log(Object.keys(obj));
//for .. in loop.....
// for(let key in obj){
//     console.log(key, obj[key]);
// }
//---------

// checking the object property exist in the object

const cars = {
    brand: "Thar",
    year: 2023,
    color: "red",
    model: "petrol"
}

let CheckObjProp = "model";

if (CheckObjProp in cars) {
    console.log(`The property "${CheckObjProp}" exists in the object Cars`)
} else {
    console.log(`The property "${CheckObjProp}" not exists in the object Cars`)
}
//=============

//Counting the number of properties in an object:
const car = {
    brand: "Thar",
    year: 2023,
    color: "red",
    model: "petrol"
}

let count = 0;

for (let key in car) {
    count++
}

console.log(`the number of properties count in the car object is "${count}"`);

//===================================

//sum all numeric values in an object

const objct = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: "manoj"
}

let sum = 0;

for (let key in objct) {
    if (!isNaN(objct[key])) {
        sum = sum + objct[key];
    }
}
console.log(sum);

//==============

//Copy all properties of one object to another:

const sourceObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: "manoj"
}

const targetObj = {};

for (let prop in sourceObj) {
    targetObj[prop] = sourceObj[prop];
}

console.log(targetObj)

//=====================\
//Convert an object to an array of key-value pairs

const oldObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: "manoj"
}

const newArry = [];

for (let prop in oldObj) {
    newArry.push([prop, oldObj[prop]]);
}
console.log(newArry);

//===============

// Care Race  checkAnagram

function checkAnagram(str1, str2) {
    const obj1 = {};
    const obj2 = {};
    // const obj1Count = 0;
    // const obj2Count = 0;

    for (let i = str1.length - 1; i >= 0; i--) {
        if (obj1[str1[i]]) {
            obj1[str1[i]]++;
        } else {
            obj1[str1[i]] = 1;
        }
    }

    for (let i = str2.length - 1; i >= 0; i--) {
        if (obj2[str2[i]]) {
            obj2[str2[i]]++;
        } else {
            obj2[str2[i]] = 1;
        }
    }
    console.log(obj1, obj2)
    const values1 = (Object.values(obj1));
    const values2 = (Object.values(obj2));

    if (isEqual(values1, values2)) {
        console.log("it is an anagram");
    } else {
        console.log("it is not a anagram");
    }

    function isEqual(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key in keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    }

}

checkAnagram("race", "care");

// //========

// function add(){
//     let sum = 10 + 20;
//     print(sum);
// }

// function print(input){
//     console.log(input);  
// }

// add();

function add(callback) {
    let sum = 10 + 20;
    callback(sum);
}

add(function (input) {
    console.log(input);
})


add(input => {
    console.log(input);
});


function teamA(callback)