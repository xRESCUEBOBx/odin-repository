const divElements = [];
const divElementsContainer = document.createElement("div");
document.body.appendChild(divElementsContainer);
divElementsContainer.classList.add("div-elements-container");

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
    }
  });
}
for (let i = 0; i <= 255; i++) {
  divElementsContainer.appendChild(divElements[i]);
}
