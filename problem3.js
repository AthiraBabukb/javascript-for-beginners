// find the factorial of a number and also find a number is a prime or not.

const prompt =require("prompt-sync")();
let num = parseInt(prompt("Enter the number : "));
//console.log(typeof num,num);
let x=num;


function fact(num){
    if(num < 0){
        console.log("the number is negative");
    }
    
    let result=1;

    for(let i=1;i<=num;i++){
        result=result*i;
    }
    console.log(`factorial of  ${num} : ${result}`);
}

fact(num);

function isprime(num){
    if(num<=1){
        console.log("the number is not prime");
    }
    let res=0;
    for(i=2;i<=num;i++){
        if(num % i ==0){
            res+=1;
        }
    }
    if(res==1){
        console.log(`the ${num} is a prime number `);
    }
    else{
        console.log(`the ${num} is not a prime number `);
    }
   
}
isprime(num);