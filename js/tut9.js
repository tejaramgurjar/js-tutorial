console.log('hello tut9 .js how are you');

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// while (condition) {

// }
// a=34;
// a+=1
// a++
// console.log(a);


// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }

// let teju = 0
// while (teju < 100) {
//     console.log(teju + 1)
//     teju++

// }


// let man = 0
// do {
//     console.log(man+1)
//     man += 1
// } while (man < 100);

// let k=0
// do {
//     console.log(k+1);
//     k++
//     if (k===5) {
//         break;
        
//     }

    
// } while (k<10);

// console.log('done');

// let h = 0;
// do { 
//     if (h===5) {h++
//         continue
//     }
//     console.log(h+1);
//     h++
// } while (h<10);

// for (let l = 0; l < 10; l++) {
//     if (l===5) {
//         continue
        
//     }
//     console.log(l+1)
    
// }

// FIRST METHOD FOR ARRAYS LOOPS

// let arr =[1,2,3,4,5];

// arr.forEach(function(element){
//     console.log(element)
// })

// SECOND METHOD

// for (let i = 0; i < 5; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// FIRST METHOD FOR OBJECT LOOPS

// FIRST

// let obj={name:'rohan Das',
//          age:78,
//          type:'Dengerous programmer',
//          os:'ububtu'
// }
//  for(let key in obj){
//     console.log(obj[key])
//  }

// let obj={name:'rohan Das',
// age:78,
// type:'Dengerous programmer',
// os:'ububtu'
// }
// for(let key in obj){
// console.log(`the ${key} of object is ${obj[key]}`)
// }

for (let age = 0; age < 50; age++) {
    console.log(50-age)
    

    }

    let array = [6,10,13,16,18,8,11,12,17,8,14,17,20]
    let n1 = []
    let n2 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i]%3==0) {
            n1.push(array[i])
            
        } if ((array[i]%4==0))
            n2.push(array[i])
            
        
        }
        
    
    console.log(n1)
    console.log(n2)






