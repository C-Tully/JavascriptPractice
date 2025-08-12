//function expressions

/**
 * function() {}
 * this is an annonymous function expression
 *
 * Q: What are first class functions?
 *
 * first class functions
 * In a language where a function can be treated as a variable,
 * these are called first passed funciton since they can be used maniuplated, returned
 * from those functions, basically anything a variable can do  a function can also do
 * this why we call functions as first class functions
 */
const square = function (num) {
  // return num * num;
};

function displaySquare(fn) {
  console.log("Lorem ipsum" + fn());
}

//Note we are passing the square variable  to a function
displaySquare(square);

/**
 *  Q: What is IIFE
 *
 * Immedietely invoked function expressions
 * Note how the function is invoked immedietly
 */

(function a(b) {
  console.log("IIFE", b);
})(5);

/**
 * Q: IIFE - O/P based question
 *
 * We are passing hte outter function 1,
 * then we are passing the inner 2
 * What is the console loged value?
 *
 * A: 1
 *
 * because x is searched in the inner scope first,
 * then it searches in the parent scope. X exists in the
 * outter scope.
 *
 */

(function (x) {
  return (function (y) {
    console.log(y);
  })(2);
})(1);

/**
 * Q: Function scope
 *
 */

//global scope
const num1 = 20,
  num2 = 3,
  name = "lorem";

function multiply() {
  return num1 * num2;
}

multiply(); //returns 60;

//Nested functions
function getScore() {
  let num1 = 2,
    num2 = 3;

  function add() {
    return name + " ipsum " + (num1 + num2);
  }

  return add();
}

getScore(); //lorem ipsum 5

/**
 * Function Scope - O/P Based Question
 *
 * let as block scope, setting the out put to 1 2 3 4 5
 */
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

/**
 * function hoisting:
 *  Functions can be called before their definition due to hoisting
 * this is the effect of the hoisting
 */

functionName();
console.log(x);
function functionName() {
  console.log("beep");
}

const x = 5;
