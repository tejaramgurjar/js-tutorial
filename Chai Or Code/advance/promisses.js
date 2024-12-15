
//  In simpler terms, think of a Promise as a special container for something that will happen in the future, like fetching data from a server or reading a file.

// Imagine you order a package online. The promise is like the tracking number you receive. It doesn't immediately give you the package, but it tells you that your package is on its way. You can then wait for the delivery to be completed. Once it's delivered, you can open the package and get what's inside.

// Similarly, a Promise represents something that will be delivered to you in the future. It could be successful, meaning you get what you expected, or it could fail, like if the package got lost in transit. But either way, the Promise gives you a way to handle that delivery when it happens. 

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed. 



// Future Value Holder: A Promise represents something that will happen in the future, like fetching data from a server.

// Three States: Promises can be in one of three states: pending, fulfilled, or rejected.

// Chaining: You can chain multiple async operations, making code cleaner.

// Result Handling: Use .then() to handle successful results and .catch() for errors.

// Promise.all(): Resolves when all Promises in an array have resolved.

// Promise.race(): Resolves or rejects as soon as one Promise in an array resolves or rejects.

// Creating Promises: Construct a Promise with new Promise(), providing resolve and reject functions.

// Async/Await: Newer syntax making async code look like sync, using async and await keywords.

// promise hmesha ek callback lega or eske andar ek function aayega or es function ke do part hote first resolve(promise ya toh pura hoga ) and second reject(promise ya toh nhi hoga )
const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network

    // setTimeout(function(){
    //     console.log("async task is complete");
    // },1000)

    setTimeout(function(){
            console.log("async task is complete");
            resolve()
        },1000)


})

// promiseOne.then() //yh krne par hmara async task toh chl jayega lekin ab hme then me likhe function ko print krane ke liye upar wale resolve or then() ko connect krna pdega setTimeout function me by rhe help of resolve() se

promiseOne.then(function(){
    console.log("promise consumed")
})


//we can process by the help of second method and in this method we can not make a promiseOne vairiable and any other 
// let see

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("async 2 task is complete")
        resolve()
    },1000)
}).then(function () {
    console.log("promise 2 consumed")
})

//maan lo network se koi data aaya hai toh ab wo data bhi toh pass krana pdega toh hm resolve se data ko send krenge then and print kra denge 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve({username:"teju",email:"tejaram20199@gmail.com"})//yha se hm kuch bhi pass kr skte array object and etc
    },1000)
})
//ab resolve wale data ko lene ke liye hme use then wale function me pass krna pdega 
promiseThree.then(function(user) {
    console.log(user)
})


// essme hmne ek error dee or maan lo error ABHI  true hai   ab error base checking par krke me bolunga actually me resolve hoga ya reject ab maal lo mene web request kri ya network request kri ya file access  krni chahi ab file access ho gyi  toh kuch bolunga file access nhi hui tb kuch bolunga pdega 

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        // let error =false;
        if (!error) {
            resolve({username:"Apeksha",email:"tejaram20199@gmail.com"})

        }
        else{
            reject("ERROR :SOMTHING WENT WRONG ")

        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
     console.log(error)
}).finally(()=>console.log("finale code is run"))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =true;
        // let error =false;

        if (!error) {
            resolve({username:"Riti",email:"tejaram20199@gmail.com"})

        }
        else{
            reject("ERROR :JS WENT WRONG ")

        }
    },1000)
})

async function consumePromiseFive(){

    
        // const response= await promiseFive
        // console.log(response);
        
    try{
    const response= await promiseFive
    console.log(response);
    }
    catch(error){
console.log(error);
    }

}

consumePromiseFive();


async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }
    
    getAllUsers()


//     fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))