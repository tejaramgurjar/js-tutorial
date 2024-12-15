console.log('this is a tut16.js file');
let element = document.createElement('li')
let text = document.createTextNode('i am a text node ')
element.appendChild(text)
element.className= 'childul'
element.id = 'creatli'

element.setAttribute('title','mytitle');

console.log(element);
// element.innerText = 'hello this created by vaibhav'
let ul = document.querySelector('ul.this')

console.log(ul);
ul.appendChild(element)

let elem2 = document.createElement('h3')
elem2.id = 'elem2'
elem2.className= 'elem2'
let tnode = document.createTextNode('this is a creaded a text node for elem2')
elem2.appendChild(tnode)
element.replaceWith(elem2)



let myul = document.getElementById('myul')
myul.replaceChild(element,document.getElementById('ui'))
myul.removeChild(document.getElementById('lui'))
console.log(elem2)

let pr = elem2.getAttribute('id')
console.log(pr)
let pr2 = elem2.hasAttribute('class')
console.log(pr2)

elem2.removeAttribute('id')
console.log(pr)