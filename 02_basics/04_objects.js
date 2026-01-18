// +++++++++++ object declare +++++++++=

// const tinderUser = new Objects()  // Singleton Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Priya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "priya",
            lastname : "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj4 = {5 : "a" , 6 : "b"}
// const obj3 = {obj1 , obj2}
// const obj3 =  Object.assign({} , obj1 , obj2 , obj4)

const obj3 = {...obj1 , ...obj2};
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
         id : 1,
        email : "h@gmail.com"
    },
    {
         id : 1,
        email : "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// +++++++++++ Destructure +++++++++++++++

const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "hitesh"
}
// +++++++++++++ to access +++++++++++++++++++

//course.price;
// const {courseInstructor } = course

const {courseInstructor : instructor} = course  // destructure
console.log(instructor);


// +++++++++++++++ JSON  API ++++++++++++

// object

// {
//     "name" : "priya",
// }

// Array

// [
//     {},
//     {},
//     {},
//     {}
// ]