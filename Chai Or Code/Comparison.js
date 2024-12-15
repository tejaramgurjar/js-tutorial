// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);


//complex convertion
console.log("2">1)
console.log("02">1)

console.log(null>0);
console.log(null==0);
console.log(null>=0);

// What really happens is that the Greater-than-or-equal Operator (>=), performs type coercion (ToPrimitive), with a hint type of Number, actually all the relational operators have this behavior.

// null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

// null == null; // true
// null == undefined; // true


console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// strict check(===) (check the value and type)
