//list primes in range — return all primes between a and b.
const prompt = require("prompt-sync")();

let start = Number(prompt("Enter the starting number :"));
let end = Number(prompt("Enter the ending number :"));

let primes =[];

for(let num =start; num<= end; num ++ ) {
    let count =0;
    for(let i=2 ; i<=num ; i++){
        if(num % i==0){
            count++;
        }
    }
    if(count==1){
        primes.push(num);
    }
}
console.log(primes);