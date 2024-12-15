console.log('we  are in  tut7.js and lets discuss about arrays and object ');
let marks = [34,23,24,93,73,25];
const fruits = ['orange' , 'Apple' , 'pineple'];
const mixed = ['srt' , 89 , [3,5]]
const arr = new Array(23,123,23,'orange');
// console.log(arr);
// console.log(mixed);
// console.log(fruits);
// console.log(fruits[1]);
// console.log(arr.length);
// console.log(Array.isArray());
// console.log(Array.isArray('orange'));
arr[0] = 'harry';
// console.log(arr);
 arr[0] = 'harry';
 let arrelement = arr[0];
//  console.log('element:' , arrelement);
//  console.log(arr);

 let value = marks.indexOf(73);
//  console.log(value);
//    marks.push(34);
//   console.log(marks)
//   marks.unshift(50)
//   console.log(marks);
//   marks.pop()
//   console.log(marks);
//   marks.shift()
//   console.log(marks)
//   marks.splice(1,4)
//   console.log(marks);
//   marks.reverse()
//   console.log(marks);
  

  let marks2 = [1,2,3,7];
  marks = marks.concat(marks2);
  // console.log(marks);
     
// object
let myobj = { 'First name': 'harry', channel:'codewithharry' , isactive : true , marks: [1,2,3,6] }

console.log(myobj)
console.log(myobj['First name']);
console.log(myobj ['isactive']);
console.log(myobj['channel']);

// second method 
console.log(myobj.channel);
console.log(myobj.isactive);
console.log(myobj.marks);
