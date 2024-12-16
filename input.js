/*const prompt = require("prompt-sync")();

let a;
a=prompt("enter a number :");
console.log(a);
let n,mul;
num=parseInt(a);

while(num > 0){
    n=num%10;
    mul= n * n; 
    console.log(`the square of ${n} is : ${mul}`);
    num=Math.floor(num/10);
    let b= append(mul);
}
console.log(mul)
*/


const prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let reversedStr = str.split('').reverse().join('');
console.log("Reversed String:", reversedStr);

