console.log('welcom to tut 32.js ');

// create a class library and implement the following ;
// constructor must be used 
// getBooklist()
// issuBook(bookName , user)
// return(bookName)

class Library{
    constructor(booklist){
    this.booklist = booklist
    
    }
    getBooklist(){
        return`the list of books ${this.booklist}`
    }
    issuBook(bookname,user){
        return ` this ${bookname} issu for the ${user}`
    }

    returnBook(bookname,user){
        return `${bookname} was returned back from ${user}`
    }
}

let lbr = new Library(
    'the lord of the rings'
)
console.log(lbr)
console.log(lbr.getBooklist())
console.log(lbr.issuBook('the lord of the rings' ,'vaibhav'))
console.log(lbr.returnBook('the lord of the rings ','rohit'))
