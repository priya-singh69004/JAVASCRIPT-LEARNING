// let myName = "priya"
// console.log(myName.length);

// let myName = "priya   "
// console.log(myName.trueLength);


let myHeros = ["thor" , "spiderman"]

let heroPower = {
  thor:"hammer",
  spiderman:"sling",

  getSpiderPower : function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}
Object.prototype.priya = function(){
  console.log(`priya is present in all object`);
}

Array.prototype.heyPriya = function(){
  console.log(`Priya says hello`);
}

// heroPower.priya();
// myHeros.priya();
// myHeros.heyPriya();
// heroPower.heyPriya();


// +++++++++++ inheritance +++++++++++++

const User = {
  name : "priya",
  email : "priya@google.com"
}

const Teacher = {
  makeVideo  :true
}

const TeachingSupport = {
  isAvailable : true
}

const TASupport = {
  makeAssignent : 'JS assignment',
  fulltime : true,
  __proto__ : TeachingSupport  // Prototype Inheritance
}

Teacher.__proto__ = User //Prototype Inheritance


// modern syntax

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUserName = "User1       "
String.prototype.trueLength = function(){
  console.log(`${this}`);
  
  console.log(`True Length is : ${this.trim().length}`);
}
anotherUserName.trueLength();

"priya".trueLength();
"iceTea".trueLength();