//Write a program to check if a given number is a perfect number (a number that is equal to the sum of
// its proper divisors). If it is, calculate the product of its digits.


const prompt = require("prompt-sync")();

let num=prompt("Enter the number : ");
let num1 = parseInt(num);
let n=num1;
let i,m;
let sum=0;
let mul=1;

for(i=1;i<=num1/2;i++){
    if(num1 % i == 0){
        sum+=i;
    }

}

if(num1 == sum){
    console.log("Perfect num");
    // calculate the product of its digits
    while(n > 0){
        m= n % 10 ;
        mul = mul * m;
        n= Math.floor(n/10);
    }
    console.log("product of its digits : ",mul)
}
else{
    console.log("not perfect number")
}
