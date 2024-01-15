// var num = 12;

// num = 20;

// let num = 10;

const number = 10;

let name = "user";

var address = "jalandhar";

function outer() {
  var outerData = 10;
  function userData() {
    var a_mobile = 123;
  }
  userData();
}
// userData();

// Uncaught ReferenceError: num is not defined

// Uncaught ReferenceError: Cannot access 'num' before initialization

// Uncaught SyntaxError: Missing initializer in const declaration (at index.js:1:7)

// Uncaught SyntaxError: Identifier 'num' has already been declared (at index.js:5:5)
