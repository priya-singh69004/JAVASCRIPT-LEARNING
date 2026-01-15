/*     Primitive  
      7 Types : Strong , Number , Boolean < null , undefined , Symbol , BigInt
*/

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);


/*         Non Primitive (Reference)     
      Array , Objects , Functions
*/

const  heros  = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name : "priya",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber)
console.log(typeof myObj);
console.log(typeof myFunction);
