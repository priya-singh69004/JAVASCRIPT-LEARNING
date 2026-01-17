//+++++++++++++ ARRAY +++++++++++++++++++

// Array Declare Types
const myArr = [0 , 1 , 2 , 3 ,4];
const myHeros = ["Shaktiman" , "nagraj"];
const myArr2 = new Array(1,2,3,4)

// console.log(myArr2[2]);
// console.log(typeof myArr);
// console.log(myArr[1]);


//+++++++++++++++ ARRAY METHOD +++++++++++++++++++++++

//  myArr.push(6);
//  myArr.pop(); 

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(3)); // chack whwther 3 exists in the Array or not
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
 

// Slice Splice

console.log("A " , myArr);
const myn1 = myArr.slice(1,3); // original Array remains same
console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1,3); // original Array manipulate
console.log("C" , myArr);
console.log(myn2);