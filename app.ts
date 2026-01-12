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
