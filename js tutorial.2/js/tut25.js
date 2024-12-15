// you have to create a div and inject into the page which containt and heading .whenever someone click on div , it shoud be coverted into an editable ClipboardItem.whenever click aay(blur) sve the into the local storage


// CREAT A NEW Element

let divElm = document.createElement('div');

// add text to that craeted Element
let val = localStorage.getItem('text')
let text
if (val == null) {
    text = document.createTextNode('this is my element .click to edit it ')
}
else {
    text = document.createTextNode(val)
}
divElm.appendChild(text)
// give element id ,style and class
divElm.setAttribute('id', 'elem')
divElm.setAttribute('class', 'elem')
divElm.setAttribute('style', 'border:2px splid black; width:154px;margin:34px; padding:23px')

// grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst')
//  insert the element before with id first
container.insertBefore(divElm, first)
divElm.appendChild(text)

console.log(divElm, container, first)

// add evnt lisnner to the divElm
divElm.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
        let html = elem.innerHTML
        divElm.innerHTML = '<textarea class="textarea form-control" class ="textarea" id="textarea" rows="3"></textarea>'
    }
    // listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value
        localStorage.setItem('text', textarea.value)

    })
})