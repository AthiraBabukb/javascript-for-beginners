
let newi = {
    name:'paru',
    degree:'Btech',
    tech:'js',
    laptop : {                   //object within another object. 
        name:'hp',
        ram:'4 gb',
        version:'17eghd'
    }
}

console.log(newi);              

console.log(newi.laptop.name.length);           //will print 2.Because the length of name is 2.

