const name = "priya "
const repoCount = 4

//console.log(name + repoCount);
//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('priya-hc');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-8,4);
//negativeindex = length + negativeindex[length = 8,negativeindex = -8 => 8+(-8) = 0 => (-8,4)===(0,4)]
//end => excluded [(0,4) == 4 will be excluded.....0-3 index will be count]
console.log(anotherString);

const newStringOne = "                priya          "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://priya.com/priya%20singh";
console.log(url.replace('%20' , '-'));

console.log(url.includes('priya'));

console.log(gameName.split('-'));
