const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage() 
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this.username);
// this keyword hmesha object ke sath use hoga 
}

chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//it is arrow function
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

//arrow fonction 
// () =>{ }

//arraor function first use 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

//implicit return aarow function(esme hme {} ye paranthises lgane kee jarurat nhi hoti hai )

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

//object ke liye 
// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()