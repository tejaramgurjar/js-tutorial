// An IIFE in JavaScript is a function that runs immediately after it's created
// iife--immediately invoked function expression
//global scope ke polution se bachne ke liye use krenge 
//semicolon is important after the function

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(function chai(name){
    // named IIFE
    console.log(`DB CONNECTED ${name}`);
})("hanuman ji");

// ()()--esme jo function aayega wo iifee hai 

( () => {
    console.log(`DB CONNECTED TWO `);
} )();

( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');