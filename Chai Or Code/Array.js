//arrays

const myArr = [10,1,2,3,4]
const MyHeors =["Hanuman" ,"MyFather"]
 
//second method of decleare the array

const myArr2 = new Array(9,8,7,6,5);
// console.log(myArr[0])

//convert the array in staring by the use of join 
const newArray = [2,5,7,4,5]
const joinArray = newArray.join();
// console.log(joinArray)
// console.log(typeof joinArray)


// Slice Splice

// console.log('A' , myArr)

const myArr1 = myArr.slice(1,3);
// console.log(myArr1);
// console.log('B' , myArr);


//splice give the last range in result and change the orignal array
// according splice Range 
const myArr3 = myArr.splice(1,3);
// console.log(myArr3)
// console.log('C ' , myArr);



//***********************************Array part 2*******************/

let ArrayPart1 =[1,2,3,4]
let ArrayPart2 = [11,23,33,44,]

 ArrayPart1.push(ArrayPart2)
//  console.log(ArrayPart1);
//  console.log(ArrayPart1[4][2])

 //use concat

//  ArrayPart1 = ArrayPart1.concat(ArrayPart2);
//  console.log(ArrayPart1);

 //spread the two arrays it is work same as the concat

//  const all_new_heros =[...ArrayPart1,...ArrayPart2];
//  console.log(all_new_heros);

 //flat all the array 

 const another_Array = [2,3,4,5,[11,12,13,14],7,[22,33,[555,666]]];
 
 const real_another_Array = another_Array.flat(Infinity);
 console.log(real_another_Array);

 //The Array.isArray() static method determines whether the passed value is an Array.
 
 console.log(Array.isArray("teju"))
 console.log(Array.isArray([1,2,3]))

 //The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

 console.log(Array.from("teju"))
 console.log(Array.from({name: "teju"})) // intersting  // object me btana pdega kee hme key ya values ka array bnna hai 

//  The Array.of() method makes a new array from any number or type of values you give it.

let marks1= 100;
let marks2 = 200;
let marks3 =300;

console.log(Array.of(marks1,marks2,marks3));

