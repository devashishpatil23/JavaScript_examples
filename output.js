a(); // output - a
function a() {
  console.log("a");
}

b(); //output- error -->Uncaught TypeError: b is not a function
var b = function () {
  console.log("b");
};

/*Function declarations are hoisted to the top of their scope, meaning the function a is fully available throughout the scope, even before it is declared.
When the code executes a();, the function a is already defined and callable, so it prints "a" to the console.*/

/*Variables declared with var are also hoisted, but only their declarations, not their assignments.
Before the assignment (b = function() { ... }), the variable b is initialized to undefined.
When b(); is called, it tries to execute undefined as a function, which causes a TypeError.*/

/*-----------------------------------------------*/
greeting();
var greeting = function () {
  console.log("Good morning");
};
greeting();

function greeting() {
  console.log("Good evening");
}
greeting();

// Output: Good evening, Good morning, Good morning

/*Function Declarations Have Higher Priority During Hoisting:
The function greeting declaration is hoisted first, overriding the var greeting declaration initially.*/

/*When a variable or function declaration has the same name, the latest assignment (or declaration) determines its behavior at runtime.*/
