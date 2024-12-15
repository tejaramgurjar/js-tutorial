// const tinder =new Object() //singleton object // contructor object

const tinder ={};
tinder.name = "teju"
tinder.friend="apeksha"

console.log(tinder);

//nesting object 

const netingObj = {
    name:"teju",
    Fullname:{
        kumawat:"sikar",
        city:{
            state:"raj"
        }
    }
}

console.log(netingObj.Fullname)
console.log(netingObj.Fullname.city.state)

//merge two object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",3:"d"}
const obj3 = {obj1,obj2};
console.log(obj3)
const obj4 =Object.assign(obj1,obj2)
// const obj4 =Object.assign({},obj1,obj2)
console.log(obj4)
const obj5 ={...obj1,...obj2} //spread is best method
console.log(obj5)


// read by mdn
// object.key(arrayname), esme sari key  de dega  object kee ,array ke andar 
// object.values(arrayname),esme sari values  de dega  object kee ,array ke andar

// object.entries(arrayname), //har ek value or key ko object me change kr denga jese
// [ [name:"teju" ],[friend:"apeksha"]]
//for check the property is avl in object yes  yaa  no
//object.hasOwnproPerty('')

