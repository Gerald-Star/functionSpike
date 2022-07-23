/* FUNCTIONS IN JAVASCRIPT
Write Reusable JavaScript with Functions

In JavaScript, we can divide up our code into reusable parts 
called functions.

Here's an example of a function:
*/
function functionName() { // function without a parameter
    console.log("Hello World");
  }
  /*You can call or invoke this function by using its name
   followed by parentheses, like this: functionName(); 
   Each time the function is called it will print out the 
   message Hello World on the dev console
  
  */
  
  functionName(); // calling a function without an argument
  
  /* Example 2
  Create a function called reusableFunction which 
  prints the string Hi World to the dev console.
  
  Call the function.
  */
  function reusableFunction() {  // without parameters
      console.log("Hi World");
    }
    
    // call the function without an argument
    reusableFunction();



    /* 2. Passing Functions with Arguments

    Passing Values to Functions with Arguments

Parameters are variables that act as placeholders for the values 
that are to be input to a function when it is called.

When a function is defined along with
 one or more parameters. The actual values that are input 
 (or "passed") into a function when it is called are known
  as arguments.

Here is a function with two parameters, param1 and param2:
Example
*/

function testFun(param1, param2) {
  console.log(param1, param2);
}
//we call the function testFun and pass two strings arguments

 testFun("Hello", "bro!"); 
 /*We have passed two string arguments, Hello and World. 
 Inside the function, param1 will equal the string Hello 
 and param2 will equal the string World.
 
 Note that you could call testFun again with different arguments
 several times.*/

 testFun("How are you", "babe?");


    
//Example 2

/*
Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.
*/

function functionWithArgs(a, b) {
    console.log(a + b);
  }
  
  functionWithArgs(2, 2);


  /* How To use return statement in function 
  When values are passed into a function with arguments. 
  You can use a return statement to send a value back out 
  of a function.

Example */

function plusThree(num) {
  return num + 3;
  
}

const answer = plusThree(5);
const sumUp = plusThree(7);

console.log(answer);
console.log(sumUp);

//answer has the value 8 and sumUp value of 10

/* plusThree takes an argument for num and returns a 
value equal to num + 3.*/

/* Example 4

Create a function timesFive that accepts one argument, 
multiplies it by 5, and returns the new value.*/

function timesFive(multiply) {
    return multiply * 5; 
  }
  
  const times = timesFive(3);
  const multiplies = timesFive(5);

  console.log(times);
  console.log(multiplies); 
//eíther you use console or call the function

  