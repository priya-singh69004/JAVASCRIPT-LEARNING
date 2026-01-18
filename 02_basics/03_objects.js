// Singleton

// ++++++++++++ object literals declare ++++++++++++

const mySym = Symbol("key1")  // Symbol declare
const JsUser = {
    name : "Priya",
    [mySym] : "mykey1",
    age : 18,
    location : "Durgapur",
    email : "priya@google.in",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

//+++++++++++ to access object("." , [""]) ++++++++++++

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// +++++++++++ to change value(" = ") ++++++++++++

JsUser.email = "priya@chatgpt.in"
// Object.freeze(JsUser)
JsUser.email = "priya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
