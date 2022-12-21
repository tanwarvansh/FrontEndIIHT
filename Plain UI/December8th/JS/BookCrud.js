class Book{

    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }

}

class UI{


    addBookToList(book){
        const list=document.getElementById("book-list");
        const row=document.createElement('tr');

        row.innerHTML=`<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#" class="delete">X</a></td>`;

            
                
            list.appendChild(row);
    }


    clearFormFields(){
        document.getElementById('title').value="";
        document.getElementById('author').value="";
        document.getElementById('isbn').value="";

    }

    showAlert(message,className){
        const div=document.createElement('div');
        div.className = `alert ${className}`;

        div.appendChild(document.createTextNode(message));

        const container=document.querySelector('.container');

        const form = document.querySelector('#book-form');

    // adding the alert in the container div
        container.insertBefore(div,form);


        setTimeout(function(){
            document.querySelector('.alert').remove();

        },2000);

    }

    deleteBook(target){
        if(target.className==='delete')
        target.parentElement.parentElement.remove();
    }


}


// Local Storage class to keep data after refreshing the page

class Store{

    static getBooks(){

        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }


    static displayBooks(){
        const books =Store.getBooks();

        books.forEach((book)=>{
            const ui=new UI;
            ui.addBookToList(book);
        })

    }

    static addBook(book){
        const books=Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));


    }

    static removeBook(isbn){
        const books=Store.getBooks();

        books.forEach((book,index)=>{
            if(book.isbn==isbn){
                books.splice(index,1);
            }
        });


        localStorage.setItem('books',JSON.stringify(books));
    }

    

}



document.addEventListener('DOMContentLoaded',Store.displayBooks);

document.getElementById('book-form').addEventListener('submit',function(e){

const title =document.getElementById('title').value;
auhtor =document.getElementById('author').value;
isbn=document.getElementById('isbn').value;

const book =new Book(title,auhtor,isbn);

Store.addBook(book);

const ui=new UI();

if(title===""||author===""||isbn===""){
    ui.showAlert("please populate fields","error");
}else{
    ui.addBookToList(book);
    ui.showAlert('You book has been added','success');

    ui.clearFormFields();

}
e.preventDefault();



});


document.getElementById('book-list').addEventListener('click',function(e){

    const ui=new UI();

    // when user click on X link it will be called
    ui.deleteBook(e.target);

    // remove it from local storage also
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('Your book has been removed','success');

    

})