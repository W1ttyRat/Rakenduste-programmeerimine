// 1. Variables: const, let, and var
// Declaring, assigning, and reassigning variables.
// When to use const and when to use let.
// Why older code uses var.
// Block scope: how { } affects where variables are available.
const name = "nimi";
let x = 5;
//let x = 10 // ei saa
var y = 10;
var y = 20; // saab

// 2. Data Types, null, and undefined
// Strings, numbers, booleans, objects, and arrays.
// Checking types with typeof.
// The difference between null and undefined.
// The difference between "5" and 5.
// Two quirks: typeof null and typeof [] both return "object".
// Checking whether a value is an array with Array.isArray().

function dataTypes() {
    let str = "Hello";
    let num = 42;
    let bool = true;
    let obj = { key: "value" };
    let arr = [1, 2, 3];
    let n = null;
    let u;

    console.log("Type: ", typeof str);
    console.log("Type: ", typeof num);
    console.log("Type: ", typeof bool);
    console.log("Type: ", typeof obj);
    console.log("Type: ", typeof arr);
    console.log("Is array: ", Array.isArray(arr));
    console.log("Type: ", typeof n);
    console.log("Type: ", typeof u, "\n");
}
dataTypes();

// 3. Operators and Type Conversion
// Arithmetic operators: +, -, *, /, %, and **.
// Updating values with += and ++.
// Converting values with Number() and String().
// Comparing "5" + 2 with Number("5") + 2.
// What NaN means.
function operators() {
    let a = 5;
    let b = 2;

    console.log("Addition: ", a + b);
    console.log("Subtraction: ", a - b);
    console.log("Multiplication: ", a * b);
    console.log("Division: ", a / b);
    console.log("Modulus: ", a % b);
    console.log("Exponentiation: ", a ** b);
    console.log("Increment: ", a++);
    console.log("Decrement: ", b -= 1);

    console.log("Number(): ", Number("5") + 2); // 7
    console.log("String(): ", String(5) + 2); // "52"
    console.log("NaN: ", Number("hello"), "\n"); // NaN
}
operators();


// 4. Strings and Template Literals — Solo Topic
// Creating strings with single quotes, double quotes, and backticks.
// Using .length, .trim(), .toLowerCase(), and .includes().
// Inserting values into strings with ${variable}.
// Example: cleaning up a name and building a greeting.
function strings() {
    let string1 = "mingi jada teksti";

    console.log("Length: ", string1.length);
    console.log("Trimmed: ", string1.trim());
    console.log("Lowercase: ", string1.toLowerCase());
    console.log("Includes 'jada': ", string1.includes("jada"));
    console.log("Template literal: ", `Hello, ${string1}!`, "\n");
}
strings();


// 5. Comparisons, Logical Operators, and Decisions
// Comparison operators: ===, !==, >, <, >=, and <=.
// Why prefer === over ==.
// Logical operators: &&, ||, and !.
// Truthy and falsy values, including "", 0, null, and undefined.
// Using if, else if, and else.
// Using condition ? valueA : valueB for a simple choice.
// Example: checking a user's age and login status to choose a message.
function comparisons() {
    let x = 122;
    let y = "122";

    if (x !== y) {
        console.log("!==: x is not 122");
    }
    
    if (x > 100) {
        console.log("x is greater than 100");
    }
    
    if (x < 100) {
        console.log("x is less than 100");
    } else {
        console.log("x is not less than 100");
    }

    if (x >= 100) {
        console.log("x is greater than or equal to 100");
    } else {
        console.log("x is less than 100");
    }

    if (x <= 100) {
        console.log("x is less than or equal to 100");
    } else {
        console.log("x is greater than 100");
    }

    console.log("------------------");

    if (x === y) {
        console.log("===: x is 122");
    } else {
        console.log("===: x is not 122");
    }

    if (x == y) {
        console.log("==: x is 122");
    } else {
        console.log("==: x is not 122");
    }

    console.log("------------------");

    if (x > 100 && y === "122") {
        console.log("x is greater than 100 and y is '122'");
    }

    if (x > 100 || y === "122") {
        console.log("x is greater than 100 or y is '122'");
    }

    if (!false) {
        console.log("!false is true");
    }

    console.log("------------------");

    let age = 20;

    if (age >= 18) {
        console.log("You are an adult.");
    } else if (age < 18) {
        console.log("You are a minor.");
    } else {
        console.log("You are neither an adult nor a minor.");
    }

    if (age >= 18 ? "You are an adult." : "You are a minor.") {
        console.log("You are an adult.");
    }

    console.log("");

}
comparisons();

// 6. Numbers and the Math Object
// Using Math.round(), Math.floor(), and Math.ceil().
// Finding values with Math.min() and Math.max().
// Understanding the range of Math.random().
// Example: generating a random whole number from 1 to 6.
function numbers() {
    let num = 5.7;

    console.log("Round: ", Math.round(num));
    console.log("Floor: ", Math.floor(num));
    console.log("Ceil: ", Math.ceil(num));
    console.log("Min: ", Math.min(3, 5, 1, 8));
    console.log("Max: ", Math.max(3, 5, 1, 8));

    let randomNum = Math.floor(Math.random() * 6) + 1; // 1 to 6
    console.log("Random number (1-6): ", randomNum, "\n");
}
numbers();

// 7. Arrays and Loops
// Creating arrays and accessing items by index.
// Zero-based indexing and .length.
// Using .includes(), .push(), and .pop().
// Which operations change the original array?
// Iterating over an array with for and for...of.
// Understanding a for loop's counter, condition, and update.
// Using break and avoiding infinite loops.
// Example: creating a list of names, updating it, and printing each name.
function arrays() {
    let names = ["Mari", "Jüri", "Kati", "Martin", "Laura"];

    console.log("Names length: ", names.length);

    console.log("Includes 'Kati': ", names.includes("Kati"));

    names.push("Karl");
    console.log("After push: ", names);

    names.pop();
    console.log("After pop: ", names);

    console.log("-------------");

    console.log("Iterating with for...of:");
    for (let name of names) {
        console.log(name);
    }

    console.log("-------------");

    console.log("Iterating with for loop:");
    for (let i = 0; i < names.length; i++) {
        console.log(`Name at index ${i}: ${names[i]}`);
    }

    console.log("-------------");

    let i = 0;
    while(true) {
        i++;
        console.log("loop :)");

        if (i >= 5) {
            break;
        }
    }

    console.log("");

}
arrays();


// 8. Objects and Handling Missing Data
// Creating an object with properties and values.
// Reading properties with dot and bracket notation.
// Adding and updating properties.
// Accessing nested objects.
// What happens when a property does not exist?
// Reading nested properties safely with optional chaining: ?..
// Providing default values with nullish coalescing: ??.
// Comparing value ?? fallback with value || fallback, including when the value is 0, false, or "".
// Example: displaying a user profile with missing information.
function objects() {
    let user = {
        name: "Mari",
        age: 22,
        email: "mari@example.com"
    };

    console.log("Name: ", user.name);
    console.log("Age: ", user["age"]);

    console.log(user.address = { city: "Tallinn", country: "Estonia" });
    console.log("Age: ", user.age = 23);

    user.address.city = null;
    console.log("City: ", user.address?.city ?? "City not available");

    console.log("City: ", user.address.city || "Tallinn", "\n");
}
objects();

// 9. Functions: Reusable Behavior
// Declaring and calling functions.
// Parameters versus arguments.
// Default parameter values.
// Returning values with return.
// The difference between return and console.log().
// What a function returns without an explicit return.
function functions() {
    function greet(name = "Guest") {
        return `Hello, ${name}!`;
    }

    console.log(greet("Alice"));
    console.log(greet());

    function add(a, b) {
        return a + b;
    }

    console.log("Sum: ", add(5, 3), "\n");
}
functions();

// 10. Arrow Functions and Callbacks
// Function expressions and arrow function syntax.
// Implicit returns versus explicit return.
// Comparing x => x * 2 with x => { return x * 2; }.
// Callbacks: passing a function to another function.
// Example: using a callback with .forEach().
function arrowFunctions() {
    const arrowFunction = (x) => x * 2;
    console.log("Arrow function result: ", arrowFunction(5));

    const arrowFunction2 = (x) => { return x * 2; };
    console.log("Arrow function with explicit return result: ", arrowFunction2(5));

    const callbackExample = (arr, callback) => {
        arr.forEach(callback);
    };

    callbackExample([1, 2, 3], (item) => console.log(item));
}
arrowFunctions();

// 11. Array Methods: map, filter, and find
// Transforming items with .map().
// Selecting matching items with .filter().
// Getting the first matching item with .find().
// What each method returns, including when nothing matches.
// Example: transforming and searching a list of products.
function arrayMethods() {
    const products = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Tablet", price: 300 }
    ];

    const productNames = products.map(product => product.name);
    console.log("Product names: ", productNames);

    const expensiveProducts = products.filter(product => product.price > 400);
    console.log("Expensive products: ", expensiveProducts);

    const laptop = products.find(product => product.name === "Laptop");
    console.log("Laptop: ", laptop);

    console.log("Non-existent product: ", products.find(product => product.name === "Camera"), "\n");
}
arrayMethods();

// 12. Destructuring and Spread Syntax
// Extracting values with object and array destructuring.
// Copying arrays and objects with ....
// Creating a new array with an additional item.
// Creating a new object with an updated property.
// Why a const object can still be modified.
// Why spread creates a shallow copy.
function destructuringAndSpread() {
    const user = { name: "Mari", age: 22, email: "mari@example.com" };

    let { name, age } = user;
    console.log("Destructured name and age: ", name, age);

    let newUser = { ...user, age: 23 };
    console.log("New user with updated age: ", newUser);

    console.log("Shallow copy of user: ", { ...user });

    console.log("Original user object: ", user, "\n");
}
destructuringAndSpread();


// 13. Modules: import and export
// Splitting code into multiple files.
// Named exports and imports.
// Default exports and imports.
// Matching import syntax to the export.
// Example: exporting a helper function and importing it in another file.

import { square } from './helper.js';
function modules() {
    console.log("Square of 5: ", square(5), "\n");
}
export { modules };
modules();

// 14. Asynchronous JavaScript: Promises and async/await
// Why some operations finish later.
// What a promise represents.
// Promise states: pending, fulfilled, and rejected.
// Using async and await.
// Why an async function always returns a promise.
// Example: awaiting a provided promise and using its result.
async function asyncAwaitExample() {
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved!");
        }, 2000);
    });

    const result = await promise;
    console.log(result);
}
asyncAwaitExample();


// 15. Fetching Data, JSON, and Error Handling
// Requesting data with fetch().
// Checking response.ok.
// Reading JSON with await response.json().
// The difference between JSON and a JavaScript object.
// Handling errors with try and catch.
// Why an HTTP error such as 404 requires an explicit check.
function fetchDataExample() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data: ", data);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
}
fetchDataExample();