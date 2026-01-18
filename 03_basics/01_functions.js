// +++++++++++++++++ To Declare Function ++++++++++++=

function sayMyName () {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    
}
// to access value

// sayMyName()   

// function addTwoNumbers(number1, number2) {     
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(3, null) 


function addTwoNumbers(number1, number2) {      
    let result = number1 + number2
    // console.log("Shail");
    // return result
    return number1 + number2
    
    
}

const result = addTwoNumbers(3, null)     // 3,null -> argument
// console.log("Result: ", result);


function loginUserMessage(username) {
    if(username === undefined) {
       console.log("Please enter a username");
       return
       
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shail"))
// console.log(loginUserMessage())


/* -------For shopping cart---------- */

function calculateCartPrice(val1, val2,...num1) {    //...-> rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


// To Pass object in Function

const user = {
    username : "priya",
    price : 199
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
     username : "priya",
    price : 199
})

// to pass Array in Function

const newArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(newArray));

console.log(returnSecondValue([200 ,400 ,100 ,600]));
