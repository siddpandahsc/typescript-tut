"use strict";
// let lname = 'John';
// lname = 10;
let lname;
lname = "Siddheshwar";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 21;
age = 21.8;
let dob = "25";
let result = parseInt(dob);
console.log(result);
let isValid;
// console.log(isValid);
let empList;
empList = ["Siddheshwar", "Sanjana", "Yash"];
// generics
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
console.log(results);
console.log(num);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Blue */;
// testing
let newNum = numList[5];
// tuples to swap two nums
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
let department;
department = "IT";
department = 10;
function add(num1, num2) {
    return num1 + num2;
}
let numsum = add(10, 20);
