let name ="Teju"
let repo =50
//    this mathod is old
// console.log( name + repo+ " value")

//this is good and latest method 
console.log(`Hello my name ${name} and my repo count is ${repo}`)


const gameName = new String("hitesh")
console.log(gameName)
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)//not give negative number negative number(-number) = take as 0

console.log(newString);

const anotherString = gameName.slice(-4,4)// this function work as a substring but in slice we give the negative value 
console.log(anotherString);

//trim -- it trim the extra values (spaces )
const extraVlues= "  teju  ";
console.log(extraVlues);
console.log(extraVlues.trim());
 
const url = "tejaram20199/linkedin/%20google.com"
 console.log(url.replace('%20' , '__'));
 console.log(url.includes('ram'));

 const slpitArray = "My-Name-is-Tejaram-Chaouhan";
 console.log(slpitArray.split('-'));

 





