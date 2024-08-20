let form = document.getElementById("form");
let title = document.getElementById("bookTitle");
let surname = document.getElementById("surname");
let pages = document.getElementById("pages");
let readStatus = document.getElementById("readStatus");
const openBook = document.getElementById("openBookImg");
const closedBook = document.getElementById("closedBookImg");

const myLibrary = [];


function Book(title, surname, pages, readStatus) {
    this.title = title;
    this.surname = surname;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {

    title = title.value.trim();
    surname = surname.value.trim();
    pages = pages.value.trim();
    readStatus = readStatus.checked;

    const li = document.createElement("li");
    li.setAttribute("id", `${surname}`);
    li.setAttribute("class", `${title}`);
    li.innerText = title;
    
    const book = new Book(title, surname, pages, readStatus);
    myLibrary.push(book);
    // bookList.appendChild(li);
    
    form.reset();
    // listItems = document.querySelectorAll("li");
    // listItems.forEach((item) => {
    //     item.setAttribute("onclick", "dispInfo()")
    // });
}

// function dispInfo() {
//     alert("It works!");
// }
