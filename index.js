const form = document.getElementById("form");
const bookList = document.querySelector("#bookList ul");
const openBook = document.getElementById("openBookImg");
const closedBook = document.getElementById("closedBookImg");

let title = document.getElementById("bookTitle");
let surname = document.getElementById("surname");
let pages = document.getElementById("pages");
let readStatus = document.getElementById("readStatus");

const surnameRegex = /^[a-zA-Z]+$/;

const titleError = document.querySelector(".book p");
const nameError = document.querySelector(".name p");
const pageError = document.querySelector(".page p");

const myLibrary = [];


function Book(title, surname, pages, readStatus) {
    this.title = title;
    this.surname = surname;
    this.pages = pages;
    this.readStatus = readStatus;
}


function addBookToLibrary() {

    checkTitle();
    checkSurname();
    checkPages();

    if(title.classList.contains("error") || surname.classList.contains("error") || pages.classList.contains("error")){
        return;
    }

    else{
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
        bookList.appendChild(li);
        
        form.reset();

        title = document.getElementById("bookTitle");
        surname = document.getElementById("surname");
        pages = document.getElementById("pages");
        readStatus = document.getElementById("readStatus");

        //**Additional feature to implement a "more info"-type pop-up when list item is clicked"

        // listItems = document.querySelectorAll("li");
        // listItems.forEach((item) => {
        //     item.setAttribute("onclick", "dispInfo()")
        // });
    }
}

function checkTitle(){

    let cleanTitle = title.value.trim();

    if(cleanTitle === ""){
        titleError.innerText = "Field can't be empty";
        titleError.style.display = "";
        title.classList.add("error");
        return;
    }

    else{
        titleError.style.display = "none";
        title.classList.remove("error");
    }  
}

function checkSurname(){

    let cleanSurname = surname.value.trim();

    if(cleanSurname === ""){
        nameError.innerText = "Field can't be empty";
        nameError.style.display = "";
        surname.classList.add("error");
        return;
    }

    else if(!surnameRegex.test(cleanSurname)){
        nameError.innerText = "Alphanumeric only.";
        nameError.style.display = "";
        surname.classList.add("error");
        return;
    }

    else{
        nameError.style.display = "none";
        surname.classList.remove("error");
    } 
}

function checkPages(){

    let cleanPages = pages.value.trim();

    if( cleanPages === ""){
        pageError.innerText = "Field can't be empty";
        pageError.style.display = "";
        pages.classList.add("error");
        return;
    }

    else{
        pageError.style.display = "none";
        pages.classList.remove("error");
    }  
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