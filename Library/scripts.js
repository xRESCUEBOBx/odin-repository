let myLibrary = [];

const bookDisplayElement = document.querySelector(".js-books-in-library");
const addBookButtonElement = document.querySelector(".js-add-books");
const formContainerElement = document.querySelector(".js-form-container");
const formElement = document.querySelector(".js-form");
const titleInputElement = document.querySelector("#title");
const authorInputElement = document.querySelector("#author");
const pagesInputElement = document.querySelector("#pages");
const readInputElement = document.querySelector("#read");
const dontSubmitButtonElement = document.querySelector("#submit");
const submitButtonElement = document.querySelector(".submit");
const deleteButton = document.createElement("button");

addBookButtonElement.addEventListener("click", () => {
  formContainerElement.style.display =
    formContainerElement.style.display === "none" ? "block" : "none";
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

bookDisplayElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-book")) {
    const index = e.target.getAttribute("data-index");
    removeBookFromLibrary(index);
  } else if (e.target.classList.contains("toggle-read")) {
    const index = e.target.getAttribute("data-index");
    toggleReadStatus(index);
  }
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.getInfo = function () {
  return `Title:${this.title} => Author:${this.author} => Pages:${this.pages} => Read:${this.read}`;
};

function addBookToLibrary() {
  const title = titleInputElement.value;
  const author = authorInputElement.value;
  const pages = pagesInputElement.value;
  const read = readInputElement.value;

  if (title !== "" && author !== "") {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
  } else {
    titleInputElement.placeholder = "Must input title!";
    authorInputElement.placeholder = "Must input author!";
  }

  console.log(myLibrary);
}

function displayBooks() {
  bookDisplayElement.textContent = "";

  myLibrary.forEach((book, index) => {
    const bookDisplay = document.createElement("div");
    bookDisplay.classList.add("book-card");
    bookDisplay.innerHTML = `
      <p>${book.getInfo()}</p>
      <button class="remove-book" data-index="${index}">Remove</button>
      <button class="toggle-read" data-index="${index}">Toggle Read</button>
    `;
    bookDisplayElement.appendChild(bookDisplay);
  });
}
function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}
function toggleReadStatus(index) {
  myLibrary[index].read =
    myLibrary[index].read === "Read" ? "Not Read" : "Read";
  displayBooks();
}
