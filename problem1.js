// Write a program to check if a given number is a palindrome. If it is, calculate the sum of its digits.

const prompt = require("prompt-sync")();
let message = prompt("Enter the number :");
let num = parseInt(message);

let n,rev=0;
let x=num;
let sum=0;

while(num > 0){
    n = num % 10;
    rev = (rev * 10) + n ;
    sum=sum+n
    num =Math.floor(num/10);
}

if(x==rev){
    console.log("The given number is a palindrome");
    console.log("sum of digits is :",sum);


}
