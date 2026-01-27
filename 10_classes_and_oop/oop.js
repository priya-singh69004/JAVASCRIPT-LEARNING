const user = {
    username : 'priya',
    logincount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log('Got user Details from database');
        // console.log(`username : ${this.username}`);
    }
}
// console.log(user.getUserDetails());
// console.log(user.username);
// console.log(user["username"]);


// ++++++++ Constructor Function ++++++++++++

// const promiseOne = new Promise()
// const date = new Date()


function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        // console.log(`Welcome ${this.username}`);
    }

    return this
}
const userOne = new User("priya" , 12 , true)
const userTwo = new User("singh" , 11 , false)

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);

