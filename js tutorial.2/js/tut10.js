console.log('this is a tut10.js');

const mygreet=function (name ,thanks) {
    console.log(` Happy birthday!${name} I hope all your birthday wishes and dreams come true ${thanks}`);

    return 4;
    
}


let name = 'skilf'
let name2 = 'rohan'

let val = mygreet(name , 'thanks a lot ')
console.log(val)


const myobj = {
    name: 'skilf' ,
    game: function () {
        return "GTA";
        
    }
    
}
console.log(myobj.game());

arr = ["fruit" ,'vegitebles', 'furniture']

arr.forEach(function(element, array , index) {
    console.log(element, array, index)
    
});
