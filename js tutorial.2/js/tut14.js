console.log('hello')


// var i = [12,647,6,76]
// var sum = 0;


// for (let i = 0; i < 700; i++) {
    
    
//     sum = sum + i
    
// }
// console.log(sum)

let element = document.getElementById('myfirst')
console.log(element)

let element2 = document.getElementById('myfirst')
element2 = element2.className

console.log(element2)

let element3 = document.getElementById('myfirst')

element3 = element3.childNodes
console.log(element3);


let element4 = document.getElementById('myfirst')
element4 = element4.parentNode
console.log(element4)

let element5= document.getElementById('myfirst')
 element5.style.clour = 'red'
console.log(element5)

let element6 = document.getElementById('myfirst');
element6.innerText = 'harry is a god boy'
console.log(element6)

let element7= document.getElementById('myfirst')
element7.innerHTML= '<b>harry is a god boy</b> '
console.log(element7)


// QUERYSELECTOR

let sel = document.querySelector('#myfirst')
console.log(sel)

let sel2 = document.querySelector('.child')
console.log(sel2);

let sel3 = document.querySelector('div')
console.log(sel3)


let sel4 = document.querySelector('#myfirst')
sel4.style.clour = 'green'
console.log(sel4)

// 2 MULTISELECTORAS  
// function isSmallest(array) {
//     let smallestNumber = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]<smallestNumber) {
//             smallestNumber=array[i];
//         }
//     }
//     return smallestNumber
        
//     }
    
//     let givenArr = [46228814,5,462746283672,46473,63727,4578,57]
    
    
//     console.log(isSmallest(givenArr))

// let elems = document.getElementsByClassName('child');

// console.log(elems);
// console.log(elems[0])

let elems2 = document.getElementsByClassName('container');
console.log(elems2[0].getElementsByClassName('child'))

elems2 = document.getElementsByTagName('div')
console.log(elems2)

    
    
    
