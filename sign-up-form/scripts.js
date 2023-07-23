function displayErrorMessage(inputElement, message) {
  let errorElement = inputElement.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains("error-text")) {
    errorElement = document.createElement("div");
    errorElement.classList.add("error-text");
    inputElement.parentNode.insertBefore(
      errorElement,
      inputElement.nextElementSibling
    );
  }
  errorElement.textContent = message;
}

// Function to remove error message for a specific input field
function removeErrorMessage(inputElement) {
  let errorElement = inputElement.nextElementSibling;
  if (errorElement && errorElement.classList.contains("error-text")) {
    errorElement.parentNode.removeChild(errorElement);
  }
}

// Function to check if passwords match and apply red border if they don't
function validatePasswords() {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.style.border = "1px solid red";
    confirmPasswordInput.style.border = "1px solid red";
    displayErrorMessage(
      confirmPasswordInput,
      "Passwords don't match. Please try again."
    );
    return false;
  } else {
    passwordInput.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    confirmPasswordInput.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    removeErrorMessage(confirmPasswordInput); // Clear the error message when passwords match
    return true;
  }
}

// Add form submit event listener
const signUpForm = document.getElementById("sign-up-form");
signUpForm.addEventListener("submit", (event) => {
  if (!validatePasswords()) {
    event.preventDefault(); // Prevent form submission if passwords don't match
  }
});

// Add input event listeners to remove error messages on input change
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

passwordInput.addEventListener("input", () => {
  removeErrorMessage(confirmPasswordInput);
});

confirmPasswordInput.addEventListener("input", () => {
  removeErrorMessage(confirmPasswordInput);
});
