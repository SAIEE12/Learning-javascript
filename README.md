 JavaScript Cheatsheet

1. Variables & Data Types

let a = 10, arr = [1, 2], obj = { key: "value" };
const PI = 3.14;        // Immutable
var globalVar = "Hi";   // Function-scoped
let undef, n = null;    // Undefined, Null


2. Functions

function add(a, b) { return a + b; } // Declaration
const sub = (a, b) => a - b;         // Arrow Function
setTimeout(() => console.log("Hi"), 1000); // Callback


3. DOM Manipulation

const el = document.querySelector("#id");
el.textContent = "New Text";
el.style.color = "red";
el.addEventListener("click", () => console.log("Clicked!"));


 4. Arrays & Objects
javascript
let nums = [1, 2, 3];
nums.push(4);                      // [1, 2, 3, 4]
nums.map(x => x * 2);              // [2, 4, 6]
const [first, second] = nums;      // Destructuring
let person = { name: "John", age: 30 };
let { name, age } = person;        // Destructuring


 5. ES6+ Features
javascript
// Template Literals
let msg = `Hello, ${name}!`;

// Spread/Rest Operator
let copy = [...nums];              // Clone array
function sum(...args) { return args.reduce((a, b) => a + b); }

// Default Parameters
function greet(name = "Guest") { console.log(`Hello, ${name}`); }


6. Promises & Async/Await
javascript
// Promise
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}


7. Error Handling
javascript
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.error(err.message);
} finally {
  console.log("Cleanup");
}


8. Classes
javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() { console.log(`Hi, I’m ${this.name}`); }
}
const john = new Person("John", 30);
john.greet();


9. Modules
javascript
// Export (export.js)
export const PI = 3.14;
export function add(a, b) { return a + b; }

// Import (main.js)
import { PI, add } from "./export.js";
console.log(add(2, 3));


10. Shortcuts
javascript
// Ternary Operator
const isAdult = age >= 18 ? "Yes" : "No";

// Optional Chaining
console.log(user?.address?.city);

// Nullish Coalescing
const value = userInput ?? "Default";
