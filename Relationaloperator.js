let bool= 7 > 6 ;
console.log(bool);

bool = 6 > 6 ;
console.log(bool);  


let x="pen";
let y="book";
let data = x > y ;
console.log(data);

//a=65,b=66 as per the asci value ,here it consider the asci value of each letter and compare these values.

let m="pen";
let n="pencil"; //because "pencil" the first 3 letters are same but it has more letters .ie,"cil".
let p= m > n;
console.log(p);

let d="3";
let h=8;
console.log(d > h);  //the ans will be false.Because the string value in variable d will automatically convert into number in javascript


let t="8";
let u=8;
let res= t===u ;//ans will be false beacuse it is for comparision
console.log(res);



let res1= t==u;        //ans will be true beacuse it converts the string format into number and then compare it.
console.log(res1);


