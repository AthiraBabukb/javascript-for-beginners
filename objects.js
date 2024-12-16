let alien = {}
console.log(typeof alien);              //Ans is object

let ali={
    name:'athira',
    tech:'js',
                                         //work exp: 4   - This will be an error
    'work exp' :4                        //if we have a property name with 2 words must use single quotes.
}
console.log(ali);                       //Ans will be  -  { name: 'athira', tech: 'js' }

console.log(ali.name);                  //Ans will be  -  athira

console.log(ali.tech);                  //Ans will be  -  js

// to fetch value of an object or property we use 'dot' operator


console.log(ali['name']);               //Ans will be  -  athira .This is an another method
console.log(ali['work exp']);           // Here the dot operator will not work .we must use square bracket [].

