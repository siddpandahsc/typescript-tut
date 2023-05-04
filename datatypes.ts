// let lname = 'John';

// lname = 10;

let lname: string;
lname = "Siddheshwar";
let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age = 21;
age = 21.8;

let dob = "25";

let result = parseInt(dob);
console.log(result);

let isValid: boolean;

// console.log(isValid);

let empList: string[];
empList = ["Siddheshwar", "Sanjana", "Yash"];

// generics
let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2)
console.log(results);
console.log(num);

let sum = numList.reduce((acc, num) => acc + num);

console.log(sum);

// enum Color {
//     Red,
//     Green,
//     Blue
// }

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

// testing
let newNum = numList[5];

// tuples to swap two nums
let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

console.log(swapNumbs[0]);
console.log(swapNumbs[1]);

let department: any;
department = "IT";
department = 10;

function add(num1: number, num2: number): any {
    return num1 + num2;
}

let numsum = add(10, 20);