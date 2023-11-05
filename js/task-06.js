const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const requiredLength = validationInput.getAttribute("data-length");

  if (inputValue.length === Number(requiredLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
