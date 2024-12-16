//check the number is a perfect number,the product of its digits

const prompt = require ("prompt-sync")();
  
let x=num;
let sum=0;
for(let i=1;i< num/2 ;i++){
    if(num % i ==0){
        sum+=i;
    } 
}

if(sum==num){
    console.log("perfect number")
}



