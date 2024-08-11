
const bookList = document.getElementById("bookList");

let listItems;

const myLibrary = [];



function Book(title, surname, pages, readStatus) {
    this.title = title;
    this.surname = surname;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    const form = document.getElementById("form");
    const title = document.getElementById("title").value;
    const surname = document.getElementById("surname").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("read").checked;
    
    const li = document.createElement("li");
    li.setAttribute("id", `${surname}`);
    li.setAttribute("class", `${title}`);
    li.innerHTML = title;
    
    const book = new Book(title, surname, pages, readStatus);
    myLibrary.push(book);
    bookList.appendChild(li);
    form.reset();

    listItems = document.querySelectorAll("li");

    listItems.forEach((item) => {
        item.setAttribute("onclick", "dispInfo()")
    });
}

function dispInfo() {
    alert("It works!");
}