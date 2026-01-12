"use strict";
const userName = "Islam";
console.log(userName);
let a = 5;
if (a === 5) {
    console.log("true");
}
else
    console.log("Not worked");
const numbers = [1, 2, 3];
const anotherNumbers = [1, 2, 3];
const userInfo = {
    fName: "Ali",
    lName: "Smith",
    age: 31,
};
console.log(userInfo.age);
// ---------------------Function---------------------
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 6));
const getGreeting = (fName, lName) => {
    return `Hello ${fName + lName}`;
};
console.log(getGreeting("Ali", "Smith"));
// ---------------------Function overloading---------------------
// Function signature
// Overload signature
// Implementation signature
function sayHelloFunctionSignature(name) {
    return `Hello there, ${name}!`;
}
// Implementation signature
function sayHello(name) {
    if (typeof name === "string") {
        return `Hello there, ${name}!`;
    }
    else if (Array.isArray(name)) {
        return name.map((name) => `Hello, ${name}!`);
    }
    throw new Error("Something went wrong");
}
