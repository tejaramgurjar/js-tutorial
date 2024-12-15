//score is a give number
const score = 100;
console.log(score)

//but if we give 100percent number then we use 

const ScoreNumber = new Number(100);
console.log(ScoreNumber);

// convert the value in string by the use of tostring()
console.log(typeof(score.toString()))
console.log(typeof(score))

console.log(score.toString().length)
console.log(score.toFixed(3))

const score2= 123.89344
console.log(score2.toPrecision(5))

const hundreds =1000000000;
console.log(hundreds.toLocaleString('en-IN'));


//******************************MATHS**********************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,6,3,5,8,9));
console.log(Math.max(4,6,3,5,8,9));

// math.random() values always in the range 0 to 1 and always give the different value

console.log(Math.random());
console.log((Math.random()*10)+1);
//floor give the always the small value and single value not provide the after the point value 
console.log((Math.floor(Math.random()*10)+1));

const min =10;
const max =20;

console.log(Math.floor(Math.random()*(max-min))+min);





