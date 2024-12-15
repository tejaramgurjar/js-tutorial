let i=0;
while (i <= 10) {
    console.log(`hello index  ${i}`)
    i= i+2
}

let arr =["vvhdjchv","bsdhcv" ,"cbshbd"];
let j =0;
while (j<=arr.length) {
    console.log(`heloo ${arr[j]}`)
    j++
    
}


let score =0;
do {
    console.log(`score is ${score}`)
    score++;
} while (score<=10);


// for 

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element==5) {
     console.log("5 is best number ");
     
        
    }
    console.log(element)

}


// const number = parseInt(prompt('Enter an integer: '));

for(let i = 1; i <= 10; i++) {
    
    for (let j =1; j <= 10; j++) {
        console.log(i + `*`+ j + `=` + i*j)
    }
   
}