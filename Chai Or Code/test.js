 // prefer not to use var
 //because of issue in block scope and functional

 const accountId=1234
let accountEmail="teju@gmail.com"
var accountPassword = "123456"
accountCity ="Jaipur"
accountCity="Banglur"
let accountState;

// accountId =2

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])                           
