//find wheather a number is palindrome or not

const prompt = require("prompt-sync")();        // this is the step we must add while using prompt.
var num;                                        // declare a variable num for storing the value.
num = prompt("Enter a number :");   //The input from prompt is a string, but you need to perform arithmetic operations.
                                    //Convert the input to an integer using parseInt.


console.log("type of num =",typeof num);            // now it is a string.
let rev=0;                          // initialize reverse by using a zero.

let num1=parseInt(num ,10);                 //convert ths string into integer and store into num1.
console.log(typeof num1,num1);

let originalnum=num1;                   //    When we use the loop to reverse the number, we continuously
                                        //modify num1 by dividing it by 10. By the end of the loop,
                                        // num1 becomes 0. If we compare rev directly with num1, the comparison
                                        // will be between the reversed number and 0, which will always be false
                                        // unless the input number is 0.
while(num1 > 0)
{
    n=num1%10;
    rev=(rev * 10) + n;                 // rev of number
    num1=Math.floor(num1/10);


}

if(originalnum==rev){
    console.log("The number is palindrome");
}
else
{
    console.log("the number is not palindrome");
}
