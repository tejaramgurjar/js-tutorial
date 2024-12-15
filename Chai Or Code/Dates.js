//Dates

// Object and instance of date 

let myDate = new Date();
console.log(myDate);

//try to convert date in string (becouse this is  provide the better result before the first result )
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof(myDate));


//how to create the date and in the date  the month is start with 0 number
//means 0 = jan , 1= fab , 2 = march
// if give the mm-dd-yy format than month start with 01=jan
//  let myCreateDate = new Date(01-25-2024);

//  let myCreateDate = new Date(2023,0,25);

 let myCreateDate = new Date(2023,0,25,5,3);
 console.log(myCreateDate.toString());
//  console.log(myCreateDate.toLocaleString());

 

let timEStamp = Date.now()
console.log(timEStamp)
console.log(myCreateDate.getTime());
// milisecond ko second me change krne ke liye date.now() ko 1000 se devide kr do 
console.log(Math.floor(Date.now()/1000))