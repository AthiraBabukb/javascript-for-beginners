// check a number is armstrong or not

const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number :"));
let res =0;
let check =num;
let numString = num.toString().length;
console.log(numString);
while(num > 0){
    let n1 = num % 10;
    res += n1 ** numString;
    num = Math.trunc(num/10);
}
if(check == res){
    console.log("Armstrong");
}
else{
    console.log("Not armstrong");
}
