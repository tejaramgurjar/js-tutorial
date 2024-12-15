console.log('welcom to tutorial 24')
let today = new Date()
console.log(typeof today)

let otherdate = new Date('8-4-2003 04:30:12')
// otherdate = new Date('june 13 2019')
// otherdate = new Date(09/16/1976)
// console.log(otherdate)

a=otherdate.getDay();
a=otherdate.getDate();
a=otherdate.getMinutes();
a=otherdate.getSeconds();
a=otherdate.getHours();
a=otherdate.getTime();
a=otherdate.getMonth();
a=otherdate.getFullYear();
a=otherdate.getUTCFullYear();
a=otherdate.setDate('2');
a=otherdate.setHours('2');
a=otherdate.setTime('2');
a=otherdate.setMonth('2');
a=otherdate.setFullYear('2');
console.log(a)