// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// * Premitive Datatypes

//                   Type                                   typeof

// (i)             Number                               number
// (ii)            String                                   string
// (iii)           Boolean                               boolean
// (iv)           Bigint                                   bigint
// (v)            Symbol                                symbol
// (vi)           Null                                      object
// (vii)          Undefined                           undefined





let scorem= 33
let scoreValue=110.33

const isLoggedIn =false
let outSideTemp =null;
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);
console.log(id===anotherId);


// BigInt
const bigNumber =838838383838n



// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// (i)               Object                                object
// (ii)              Array                                  object
// (iii)             Function                            function(object)





// *****************************MEMORY-IN-JAVASCRIPT*******************

// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory(it is give the copy of variable)

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory


let MyYoutubename = "2Buddy784"
 let anotherName = MyYoutubename
 anotherName = "hitesh@123"

 console.log(MyYoutubename);
 console.log(anotherName);

 let UserOne ={
    email:"user @gmail.com" ,
    upi: "use@ybl"

 }
let userTwo = UserOne;
 userTwo.email ='teju@12334'
 console.log(UserOne);
 console.log(userTwo);