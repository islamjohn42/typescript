const userName: string = "Islam";
console.log(userName);

let a: number = 5;
if (a === 5) {
  console.log("true");
} else console.log("Not worked");

const numbers: number[] = [1, 2, 3];
const anotherNumbers: Array<number> = [1, 2, 3];

const userInfo: { fName: string; lName: string; age: number } = {
  fName: "Ali",
  lName: "Smith",
  age: 31,
};
console.log(userInfo.age);

// ---------------------Function---------------------
const add = (a: number, b: number) => {
  return a + b;
};
console.log(add(5, 6));

const getGreeting = (fName: string, lName: string): string => {
  return `Hello ${fName + lName}`;
};
console.log(getGreeting("Ali", "Smith"));

// ---------------------Function overloading---------------------
// Function signature
// Overload signature
// Implementation signature
function sayHelloFunctionSignature(name: string): string {
  return `Hello there, ${name}!`;
}

// Overload signature
function sayHello(name: string): string;
function sayHello(name: string[]): string[];

// Implementation signature
function sayHello(name: unknown): unknown {
  if (typeof name === "string") {
    return `Hello there, ${name}!`;
  } else if (Array.isArray(name)) {
    return name.map((name) => `Hello, ${name}!`);
  }

  throw new Error("Something went wrong");
}

// // Interface
// interface Person {
//   name: string;
//   age: number;
//   // Optional property
//   telegramUser?: string;
// }

// function greetPeople(person: Person) {
//   return `Hello ${person.name} your age is ${person.age}`;
// }
// const person = {
//   name: "Ali",
//   age: 25,
// };
// console.log(greetPeople(person));

interface Person {
  firstname: string;
  // age: number;
  telegramUsername?: string;
  readonly id: number;
}
function updatePerson(person: Person) {
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
  public firstname: string;
  protected nationality: string;
  private age: number;

  constructor(firstname: string, age: number, nationality: string) {
    this.firstname = firstname;
    this.age = age;
    this.nationality = nationality;
  }
  public getAge(): number {
    return this.age;
  }
  public setAge(age: number): void {
    if (age < 0) {
      this.age = 0;
    } else {
      this.age = age;
    }
  }
}
const person = new Person("Ulugbek", 26, "Uzbek");
// console.log(person);
person.setAge(10);
// console.log(person.age); // ❌ Runtime error
// console.log(person.getAge());
// person.setAge(-10);
// console.log(person.getAge());

//=========Inheritance=============
class Engineer extends Person {
  public technologies: string[] = [];

  constructor(firstname: string, age: number, nationality: string) {
    super(firstname, age, nationality);
  }
}
const engineer = new Engineer("Ulugbek", 26, "Uzbek");
engineer.technologies = ["Javascript", "Typescript"];
console.log(engineer);
