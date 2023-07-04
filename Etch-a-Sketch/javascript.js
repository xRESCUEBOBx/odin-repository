const divElements = [];
const divElementsContainer = document.createElement("div");
document.body.appendChild(divElementsContainer);
divElementsContainer.classList.add("div-elements-container");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", () => {
  switch (true) {
    case divElementsContainer.classList.contains("div-elements-container"):
      divElementsContainer.classList.remove("div-elements-container");
      divElementsContainer.classList.add("size2");
      break;
    case divElementsContainer.classList.contains("size2"):
      divElementsContainer.classList.remove("size2");
      divElementsContainer.classList.add("size3");
      break;
    case divElementsContainer.classList.contains("size3"):
      divElementsContainer.classList.remove("size3");
      divElementsContainer.classList.add("size4");
      break;
    case divElementsContainer.classList.contains("size4"):
      divElementsContainer.classList.remove("size4");
      divElementsContainer.classList.add("size5");
      break;
    default:
      divElementsContainer.classList.remove("size5");
      divElementsContainer.classList.add("div-elements-container");
      break;
  }
});

for (let i = 0; i <= 255; i++) {
  const div = document.createElement("div");
  div.classList.add("div-elements");
  divElements.push(div);
  // Start drawing on mousedown
  div.addEventListener("mousedown", () => {
    isDrawing = true;
  });

  // Stop drawing on mouseup
  div.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  // Draw on mouseover if drawing state is true
  div.addEventListener("mouseover", function () {
    if (isDrawing) {
      this.classList.add("drawn");
      // Add the "drawn" class
    } else {
      this.classList.remove("drawn");
    }
  });
}
for (let i = 0; i <= 255; i++) {
  divElementsContainer.appendChild(divElements[i]);
}
