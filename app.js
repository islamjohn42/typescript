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
function updatePerson(person) {
    // We can read from 'obj.id'.
    console.log(`prop has the value '${person.id}'.`);
    // But we can't re-assign it.
    // person.id = 12345;
}
//==============================================
//=========OOP=============
// class Person {
//   firstname: string;
//   age: number;
//   constructor(firstname: string, age: number) {
//     this.firstname = firstname;
//     this.age = age;
//   }
//   greet() {
//     return `Hello, ${this.firstname}!`;
//   }
// }
// const person = new Person("Ulugbek", 26);
// console.log(person.greet());
//=========Encapsulation=============
class Person {
    constructor(firstname, age, nationality) {
        this.firstname = firstname;
        this.age = age;
        this.nationality = nationality;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        if (age < 0) {
            this.age = 0;
        }
        else {
            this.age = age;
        }
    }
}
const person = new Person("Ulugbek", 26, "Uzbek");
console.log(person);
person.setAge(10);
// console.log(person.age); // ❌ Runtime error
console.log(person.getAge());
// person.setAge(-10);
console.log(person.getAge());
