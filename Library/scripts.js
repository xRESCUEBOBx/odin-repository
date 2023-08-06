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

formContainerElement.style.display = "none";

addBookButtonElement.addEventListener("click", () => {
  if (formContainerElement.style.display === "none") {
    formContainerElement.style.display = "block";
  } else {
    formContainerElement.style.display = "none";
  }
});

dontSubmitButtonElement.addEventListener("click", preventDefault, false);
submitButtonElement.addEventListener("click", addBookToLibrary);

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Books.prototype.getInfo = function () {
  return `${this.title} ${this.author} ${this.pages} ${this.read}`;
};

function addBookToLibrary() {
  let input = new Books(
    titleInputElement.value,
    authorInputElement.value,
    pagesInputElement.value,
    readInputElement.value
  );

  if (titleInputElement.value !== "" && authorInputElement.value !== "") {
    myLibrary.push(input);
  } else if (
    titleInputElement.value === "" &&
    authorInputElement.value === ""
  ) {
    titleInputElement.placeholder = "Must input title!";
    authorInputElement.placeholder = "Must input author!";
  }

  myLibrary.forEach((book) => {
    const bookDisplay = document.createElement("div");
    bookDisplay.textContent = `${input.title} ${input.author} ${input.pages} ${input.read} `;
    bookDisplayElement.appendChild(bookDisplay);
  });

  console.log(myLibrary);
}

function preventDefault(event) {
  event.preventDefault();
}
