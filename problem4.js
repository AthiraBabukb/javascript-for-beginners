// find the Fibonacci series of the given number

const prompt = require ("prompt-sync")();

let num = parseInt(prompt("Enter the given number : "));

let fib=[0,1];
for(let i=2;i<=num;i++){
    fib[i]=fib[i-1] + fib[i-2];
}
for(let i=0;i<=num;i++){
    console.log(fib[i]);
}

