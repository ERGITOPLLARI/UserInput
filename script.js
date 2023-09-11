const form = document.getElementById("form");
const nameInput = document.getElementById("username");
const nameFocus = document.getElementById("usernameFocus");
const nameError = document.getElementById("usernameError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  valideFormElements();
});

function valideFormElements() {
  const nameValue = nameInput.value;

  if (nameValue.length <= 0) {
    nameFocus.innerText = "UserName";
  }
  if (nameValue.length <= 4) {
    nameError.innerText = "nono";
  }
  return false;
}
