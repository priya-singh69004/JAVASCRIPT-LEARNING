const user = {
    username : "priya",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , Welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()

// console.log(this);

/* This work in object not in function */

// function one(){
//     let username = "priya"
//     console.log(this.username);
// }
// one()


//+++++++++++++++++ Declare Function through Arrow Function +++++++++++++++

// const one = () => {
//     let username = "priya"
//     console.log(this.username);
// }
// one()


// const addTwo = (num1 , num2) => {        //(explicit) Always return is used
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)   // return is not used(implicit)

const addTwo = (num1 , num2) =>({username : "priya"})    // for object

console.log(addTwo(3,4));
