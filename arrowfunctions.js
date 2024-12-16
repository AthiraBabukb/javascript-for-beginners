let greet = function()
{
    console.log("hello world");
    return 1;
}
greet()                             // ans will be - hello world

console.log(greet());               //ans will be - hello world
                                            //      1
 


let great = (user) => {                 //arrow function
    console.log("hello" + user);
    return 1;

}
console.log(great('athira'));


function add(a,b){
    return a+ b;
}

console.log(add(4,5));
 

let mul = (a,b) =>{
    return a * b;
};

console.log(mul(2,3));


function hello(){
   return "hello world";
}

console.log(hello());

let hell = () =>{
    return "hello world";
}
console.log(hell());


function square(a){
    return a * a;
}
console.log(square(9));

const squ = (a) =>{
    return a * a;
}
console.log(squ(7));


 