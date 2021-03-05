
// create a class library and implement the following:
//constructer must take the book list as an argument
//getbooklist()
//issuebook(bookname, user)
//returnbook(bookname)
class library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookListforEach(element => {
            console.log(element);
        });

    }
    issueBook(bookname , user){
        this.issuedBooks[bookname] = user;
        
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname]
    }
}