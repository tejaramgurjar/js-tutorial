//singleton(object constructor)
// The Object type in JavaScript is used to store collections of data and other complex entities. You can make objects either by using the Object() constructor or the curly braces notation.

//two way of create  object - object literals , object constructor
const mykey =Symbol("key1");//if i want use this symbol in jsUse objet then

const jsUse ={
    name:"teju",
    Branch:"Mca",
    [mykey]:"key2",
    age:20,
    isLoggedIn:true,
    lastLoggedInDays :["Monday","Friday"],
    greetingThree:function () {
        console.log("hey")
    }
    
}

console.log(jsUse.age)//first method for print the object

console.log(jsUse["Branch"]) // second method (important) it is use for symbol
console.log(jsUse[mykey])


//Object.freeze() makes an object unchangeable by preventing additions, deletions, or modifications to its properties.

jsUse.name="apeksha"

// Object.freeze(jsUse)
jsUse.name="rohit"
console.log(jsUse)

jsUse.greeting = function () {
    console.log("hello teju don ");

}

jsUse.greetingtwo = function () {
    console.log(`hello teju don, ${this.name} `);
    
}
console.log(jsUse.greeting()); //function print method in object
console.log(jsUse.greetingtwo())
console.log(jsUse.greetingThree())




