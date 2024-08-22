const form = document.getElementById("form");
const bookListArea = document.getElementById("bookListArea");
const openBook = document.getElementById("openBookImg");
const closedBook = document.getElementById("closedBookImg");

let title = document.getElementById("bookTitle");
let surname = document.getElementById("surname");
let pages = document.getElementById("pages");
let readStatus = document.getElementById("readStatus");

const myLibrary = [];


function Book(title, surname, pages, readStatus) {
    this.title = title;
    this.surname = surname;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {

// errors include regex match checks
// NAME pattern="[A-Za-z]+{2,}" minlength="2" title="Author surname only. No spaces."
// PAGES pattern="[1-9]+"

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

function changeMenu() {
    if (form.style.display === ""){
        form.style.display = "none";
        bookListArea.style.display = "";
        closedBook.style.display = "none";
        openBook.style.display = "";
    }

    else{
        form.style.display = "";
        bookListArea.style.display = "none";
        closedBook.style.display = "";
        openBook.style.display = "none";
    }
}