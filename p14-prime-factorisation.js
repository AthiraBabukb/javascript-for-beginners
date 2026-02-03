//Return prime factorization of n.

const prompt = require("prompt-sync")();

let num= Number(prompt("Enter the number :"))

let factors= [];

while(num % 2 == 0){
    factors.push(2);
    num = Math.trunc(num / 2);
}

for(i=3;i*i <= num;i+=2){
    while(num % i ==0){
        factors.push(i);
        num = Math.trunc(num/ i);
    }
}

if(num > 1){
    factors.push(num);
}

console.log(factors);