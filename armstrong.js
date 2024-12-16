//check wheather the given number is an armstrong number.if it is armstrong find the reverse of that number


const prompt = require("prompt-sync")()

let num = prompt("Enter the number : ");
//console.log(num);

let num1=parseInt(num);
//console.log(typeof num1,num1);

let n;
let rev = 0, m;
let cube = 0;
let x = num1;

while(num1 > 0){
    n=num1 % 10;   
    cube = cube + n * n * n;
    num1 = Math.floor(num1 /10);

}

if(x==cube){
    console.log("the number is an armstrong number...");
    let c =x;
    while(c > 0){
        m = c % 10;
        rev= (rev * 10) + m;
        c = Math.floor(c/10);
        
    }
    console.log("reverse of the num is : ",rev);
}

else{
    console.log("The number is not an armstrong number...")
}


