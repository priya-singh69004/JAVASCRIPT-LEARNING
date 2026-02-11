const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(descriptor);

// console.log(Math.PI);

const course = {
  name : "python",
  price : 250,
  isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(course , "name"));

Object.defineProperty(course , 'name' , {
  writable : false,
  enumerable : true,
  configurable : false
})


console.log(Object.getOwnPropertyDescriptor(course , "name"));

for(let [key , value] of Object.entries(course)){
  if(typeof value !== 'functon'){

    console.log(`${key} : ${value}`);
  }
}