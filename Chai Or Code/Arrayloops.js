

// forof loop 
// for (const iterator of object) {
    
// }
//object = name of array 

 let arr = [1,2,3,4,5,6,7];
for (const i of arr) {
console.log(i);
    
}

const greeting = "hello teju "
for (const greet of greeting) {
    console.log(`greet msg ${greet}`)
    
}

const greeting2 = "hello teju"
for (let i = 0; i< greeting2.length; i++) {
    console.log(`greet2 msg ${greeting2[i]}`)
    }




    // **********************************MAP*********************************8

    // objects are collections of key-value pairs
    //A Map is like a container holding unique pairs of keys and their corresponding values. When you loop through a Map, you get key-value pairs one at a time.

    const map1 = new Map()
    map1.set("IN", "india")
    map1.set("us","united state of america")
    map1.set("IN", "india")
    map1.set("IN2", "india2")
    map1.set("IN3", "india3")
    console.log(map1);

    // we want gate the value of key then

    console.log(map1.get("IN"));
    console.log(map1.size);
    map1.delete('IN');
    console.log(map1.size);


    //FOR OF LOOP

    for (const key of map1) {
        console.log(key)
        
    }
    

    // if i am not intersted printing the values in array formate and print the values in perticular 

    for (const [key,value] of map1) {
        console.log(key,`:-`,value)
    }


    // for of loop in object

    const myObj = {
        game1 :"spiderman",
        game2:"batman"
    }
    // for (const [key,value] of myObj) {
    //     // console.log(key,`:-`,value)
    // }

    ///  so this error after run code :===  myObj is not iterable , for of loop is  not used for objects 

    // for in loop  is used for objecs

    // for (const key in object) {
        
    //     // if (Object.hasOwnProperty.call(object, key)) {
    //     //     const element = object[key];
            
    //     // }
    // }

    for (const key in myObj) {
    //    console.log(key)
    //    console.log(myObj[key])
    //    console.log(key+`:-`+ myObj[key])

    }


//let try the use of for in loop in arrays

for (const key in arr) {
//     console.log(arr[i])
//     console.log(key)
}


//objects === for in loop  lga do 
//arrays == for of loop lga do 



/// foreach loop 
//callback function: - wo fuction jinke name nhi hote

const arr2 = [1,2,3,4,5,6,7,8,9]

arr2.forEach(function (element){
    // console.log(element);
})


//arrow(callback) function in foreach

arr2.forEach((item)=>{

    // console.log(item);

})
arr2.forEach((item,index, arr2)=>{

    // console.log(item,index, arr2);

})


// array ke andar object


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )