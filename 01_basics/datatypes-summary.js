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
// console.log(typeof myObj);
// console.log(typeof myFunction);





// ++++++++++++++++++++++++++++ Memory ++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

let myName = "priya";
let anotherName = myName;
anotherName = "singh";
// console.log(myName);
// console.log(anotherName);

let userOne = {
    email : "priya@google.com",
    upi : "priya@ybl"
}

let userTwo = userOne
userTwo.email = "user@google.com"
console.log(userOne.email);
console.log(userTwo.email);