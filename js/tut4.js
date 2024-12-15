console.log('tut4.js')
// primitive data type 
// 1 String
let name='harry';
console.log("My string is harry "+ name)
console.log("Data type is" +(typeof  name));

// Number
let marks= 34;
console.log("Data type is" + (typeof marks))

// Boolean
let isDriver= true;
console.log("Data type is"+(typeof isDrive));

// null
let nullVar=null;
console.log("Data type is"+(typeof nullVar));

// undefined
let undef=undefined;
console.log("Data type is " + (typeof undef)) 

// reference data type
// 1 Arrays
let myarr = [1,2,3,4];
console.log("Data type is " + (typeof myarr ))

myarr = [1,2,3,4,false,"string"];
console.log("Data type is " + (typeof myarr ))

// 2 Object literats
let stMarks ={harry:89, shubham:45, rohanDas:56}
console.log(stMarks)
console.log( "Data type is" + (typeof stMarks))

function findName() {
    
}
console.log(typeof findName)
let date = new Date()
console.log(typeof date);
