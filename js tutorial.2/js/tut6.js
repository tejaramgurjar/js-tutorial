console.log("we are a tut 6")
const name = "harry";
const greeting = "Good Morning";
console.log(greeting+name);

console.log(greeting+" " + name);
// if greeting constant ho to wrna 
//    const greeting = "Good Morning "; 
 
let html;
html = "<h1> this is heading</h1>"+"<p> this is my para</p>";

html = html.concat("this" , " str2");
console.log(html)
console.log(html.length)
console.log(html.toLowerCase())
console.log(html.toUpperCase())

console.log(html[0])
console.log(html.indexOf(">"));
console.log(html.lastIndexOf(">"));
console.log(html.charAt(5));
console.log(html.endsWith("str2"));
console.log(html.includes("is"));
console . log(html.substring(5,9));
console.log(html.slice(-4));
console.log(html.slice(0,5))
console.log(html.split());
console.log(html.split(">"))
// console.log(html.replace("this" , "that"))


// templet literls in javascript

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `hello ${name} 
               <h1> This is heading </h1>
               <p> You like ${fruit1} and ${fruit2}
               
               `;

    document.body.innerHTML = myHtml;           

    let h1 = 'Raj';
    let h2 = 'Kumar';
    let Rk = ' Rajkumar';
    let myhtml = `hello ${Rk}
                  <k1> this is my son</k1><p> You like ${h1} and ${h2}
    
             `;

    document.body.innerHTML = myhtml;
    