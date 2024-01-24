/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function multiplyNumbers(b,c) {
//     // multiply b and c
//     return(b*c);
// }
// console.log(multiplyNumbers(5,3));

// Arrow Function With Parameters
// const multiplyNumbers = (b,c) => {
//     // Multiply numbers
//     return(b*c);
// }
// console.log(multiplyNumbers(5,3));


// Single Line Arrow Function With Parameters
const multiplyNumbers = (a,b) => a*b;
console.log(multiplyNumbers(5,3))

// Implicit Returns
const sayWhat = message => console.log(message);
sayWhat('hello');

const sayHi = () => console.log('Hi');
sayHi();

// Returning Multiple Lines
const returnMultiLine = () => { return(
    `Hi
this
is
me`
)}
console.log(returnMultiLine());

const returnOneLine = () => (console.log('Hi There'))
returnOneLine();