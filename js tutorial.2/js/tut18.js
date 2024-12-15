console.log('this is a tut 18.js')
// let btn = document.getElementById('btn')
// btn.addEventListener('click', func1);
// btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);
// function func1(e) {
//     console.log('thanks', e)
//     e.preventDefault();
// }

// function func2(e) {
//     console.log('thanks', e)
//     e.preventDefault()
// }

// function func3(e) {
//     console.log('thanks its a mouse down click',e)
//     e.preventDefault()
// }

// document.querySelector('.no').addEventListener('mouseenter', function() {
//     console.log('you entered no')
// })


// document.querySelector('.no').addEventListener('mouseleave', function() {
//     console.log('you exited no')
// })


document.querySelector('.container').addEventListener('mousemove', function() {
    // console.log(e.offsetX , offset )
    // document.body.style.backgroundColor = 'red'
     document.body.style.backgroundColor = `rgb(${e.offsetX} (${e.offsetY} (${e.offsetX + e.offsetY})`
    console.log('you trigged mouse move event')
})