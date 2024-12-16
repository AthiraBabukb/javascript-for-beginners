// find wheather the number is even or odd

let num=5;
if(num % 2 ===0)
    console.log("The number is an even number");
else
    console.log("The number is an odd number");

//lets find out this by using ternary operator

let result;
result = num % 2===0 ? "even" : "odd"
console.log(result);

// ternary operator is the short cut of if else statements
// It helps to assign a variable based on that condition


// condition ? code if true : codeif false


let age=21;
let message = age >=18 ? 'you are an adult' : 'you are a minor';
console.log(message)


let time = 16;
let greeting = time <12 ? 'good morning ' : 'good after noon';
console.log(greeting);

 