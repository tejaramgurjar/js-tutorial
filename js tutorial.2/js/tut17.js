console.log('helo this tut17.js');

document.getElementById('heading').addEventListener('click', function () {
    console.log('you have the click the heading')
    // location.href = '// code with harry.com'

})


document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('you have the click the heading')
    variable = e.target
    variable = e.target.className
    variable= e.target.id
    variable = e.target.classList
    variable= Array.from(e.target.classList)
    variable = e.offsetX
    variable = e.offsetY
    variable = e.clientX
    variable = e.clientY
    // variable = e.o

console.log(variable)

})

document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('you have the click the heading')
    variable = e.target
    variable = e.target.className
    variable= e.target.id
    variable = e.target.classList
    variable= Array.from(e.target.classList)
    variable = e.offsetX
    variable = e.offsetY
    variable = e.clientX
    variable = e.clientY
    // variable = e.o

console.log(variable)

})

// document.getElementById('heading').addEventListener('mouseover', function (e) {
//     let variable;
//     console.log('you have the click the heading')
//     variable = e.target
//     variable = e.target.className
//     variable= e.target.id
//     variable = e.target.classList
//     variable= Array.from(e.target.classList)
//     variable = e.offsetX
//     variable = e.offsetY
//     variable = e.clientX
//     variable = e.clientY
//     // variable = e.o

// console.log(variable)

// })
