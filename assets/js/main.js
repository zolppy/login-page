const passwordIcon = document.querySelector("#password-icon");

function togglePasswordVisibility(event) {
  const iconElement = event.target;
  const passwordInput = document.querySelector("#password-input");

  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }

  if (iconElement.classList.contains("bi-eye")) {
    iconElement.classList.remove("bi-eye");
    iconElement.classList.add("bi-eye-slash");
  } else {
    iconElement.classList.remove("bi-eye-slash");
    iconElement.classList.add("bi-eye");
  }
}

function clearInputs() {
  const emailInput = document.querySelector("#email-input");
  const passwordInput = document.querySelector("#password-input");

  emailInput.value = "";
  passwordInput.value = "";
}

passwordIcon.addEventListener("click", (event) => togglePasswordVisibility(event));
window.addEventListener("load", clearInputs);