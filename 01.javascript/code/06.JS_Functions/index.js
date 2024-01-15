// Defining a Function
// Functions are defined using the function keyword followed by a name and parameters.
function greet(name) {
  return "Hello, " + name + "!";
}

// Calling a Function
// Functions are invoked (called) using their name followed by parentheses.
const greeting = greet("Aisha");
console.log(greeting); // Output: Hello, Aisha!

// Function with Parameters
// Functions can take parameters, which are placeholders for values passed during invocation.
function add(a, b) {
  return a + b;
}

const sum = add(5, 3);
console.log(sum); // Output: 8

// Function with Default Parameters
// Parameters can have default values if not provided during the function call.
function multiply(x, y = 2) {
  return x * y;
}

const product1 = multiply(4); // Uses default y = 2
const product2 = multiply(4, 3); // Uses provided y = 3

console.log(product1); // Output: 8
console.log(product2); // Output: 12

const product3 = multiply2(2, undefined); // y takes the default value of 2, x is 2
console.log(product1); // Outputs 4

// Anonymous Functions (Function Expressions)
// Functions can be assigned to variables as anonymous functions or function expressions.
const subtract = function (a, b) {
  return a - b;
};

const result = subtract(10, 5);
console.log(result); // Output: 5

// Arrow Functions
// Arrow functions provide a shorter syntax for defining functions,
// especially useful for simple expressions.
const divide = (x, y) => x / y;

const quotient = divide(15, 3);
console.log(quotient); // Output: 5

// Callback Functions
// Callbacks are functions passed as arguments to another function and executed later.

function square(number, callback) {
  return callback(number * number);
}

function double(num) {
  return num * 2;
}

const squaredValue = square(5, double);
console.log(squaredValue); // Output: 50

// Nested Functions (Closures)
// Nested functions can access variables from their containing (parent) function,
// even after the parent function has completed.
function outer() {
  const message = "Hello from outer function";

  function inner() {
    console.log(message);
  }

  return inner;
}

const innerFunction = outer();
innerFunction(); // Output: Hello from outer function

// Immediately Invoked Function Expressions (IIFE) in JavaScript

// Overview
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is commonly used to create a local scope, helping to avoid polluting the global namespace.

(function () {
  var message = "IIFE!";
  console.log(message);
})();

// In this example, the function is defined and then immediately called. The parentheses around the function turn the function declaration into an expression, and the final () invokes it immediately.

// Complex Example of IIFE
// The following is a more complex example of an IIFE, which demonstrates how to create private variables and functions that are not accessible outside of the function's scope.

(function () {
  var privateVar = "I am private";
  function privateFunction() {
    console.log(privateVar);
  }

  window.publicFunction = function () {
    privateFunction();
  };
})();

// Using the publicly exposed function
window.publicFunction(); // Logs: 'I am private'

// Trying to access private variables and functions will result in errors
console.log(privateVar); // Error: privateVar is not defined
privateFunction(); // Error: privateFunction is not defined

// In this example:

// privateVar and privateFunction are encapsulated within the IIFE.
// publicFunction is exposed to the global scope, allowing controlled access to the private internals.
// Attempts to directly access privateVar or privateFunction outside the IIFE will lead to errors, as these are not visible in the global scope.
