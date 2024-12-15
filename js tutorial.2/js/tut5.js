// type conversion and type coercion 

// A conversion

console.log('tut5.js');
let myVar ;
myVar =String(34);
console.log( myVar, (typeof myVar)) 

let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

let date = String(new Date());
console.log(date,(typeof date));
// let arr = String([1,2,3,4,5]);
// console.log(arr, (typeof arr));
let arr =[1,2,3,4,5];
console.log(arr.length)
let i = 8;
console.log(i.toString())

// number-function

let stri =  Number("3434");
console.log(stri,(typeof stri));

stri = Number("34d34");
console.log(stri,(typeof stri))
stri = Number(true)
 console.log(stri,(typeof stri))
stri = Number([1,2,3,4,5]);
console.log(stri , (typeof stri))
 
// parseInt in function
// let number = parseInt("35.5")
// console.log(number,(typeof number));

// parseFloat in function
let number = parseFloat('34.5');
console.log(number , (typeof number));

console.log(number.toFixed(5) , (typeof number));
console.log(number.toFixed(6) , (typeof number));

// B coerrcion

let mystr = "34";
let mynum = 37;
console.log(mystr+ mynum);

// if
let mystri = Number("34");
let mynumb = 37;
console.log(mystri+ mynumb);