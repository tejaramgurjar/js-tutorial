console.log('hello this is a tut20.js ')


let impArray = ['adrak','pyaz','bhindi']
localStorage.setItem('Name','harry')
localStorage.setItem('Name2','rohan')
localStorage.setItem('sabji',JSON.stringify(impArray))
// localStorage.removeItem('Name')

let name = localStorage.getItem('Name')
name = JSON.parse(localStorage.getItem('sabji'))
console.log(name)

// localStorage.clear()






















