console.log(Boolean(0)); // 0 it will be false and true for all the other numbers..
console.log(Boolean(7));
console.log(Boolean(-4));
console.log(Boolean(null)); //it is also return false...
console.log(Boolean("athi"));


//JavaScript variables can be converted to a new variable and another data type:
let x=Number("3.14");
let result= x*2;
console.log(result);

//Number("3.14") which convert string "3.14" in to a number 3.14


x=Number("");   //null string converts in to 0
console.log(x);

x=Number("Math.pi"); //string will be convert in to NaN
console.log(x);

x=Number("athira"); //string will be convert in to NaN
console.log(x);

let y=parseFloat("3.98"); // string into floating point number
console.log(y);

let z=parseInt("234"); // used to convert string into number
let a= z / 2;
let r= a * 2;
console.log(a,r);


