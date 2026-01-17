//  Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

//console.log(typeof myDate);

// let myCreatedDate = new Date(2026 , 1 , 26);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2026 , 0 , 23 , 5 ,3 , 7); // yyyy/mm/dd/hrs/min/sec
// console.log(myCreatedDate.toLocaleString());


 let myCreatedDate = new Date("2026-01-16");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());  //Starts from Monday(1,2,..)
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default' , {
    weekday : "long",
    
})
