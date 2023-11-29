function validateEmail(email) {
  let re = /\S+@\S+\.\S+/; // tekst apestaartje tekst puntje tekst
  return re.test(email); // true of false
}

function checkForm() {
  // first name
  let firstName = document.getElementById("firstName");
  if (firstName.value == "") {
    firstName.style.border = "2px solid hsl(0, 100%, 74%)";
    firstNameError.style.display = "block";
    firstNameErrorIcon.style.display = "block";
    firstName.placeholder = "";
    // console.log("first name is empty");
  } else {
    firstName.style.border = "1px solid hsl(246, 25%, 77%)";
    firstNameError.style.display = "none";
    firstNameErrorIcon.style.display = "none";
  }

  // last name
  let lastName = document.getElementById("lastName");
  if (lastName.value == "") {
    lastName.style.border = "2px solid hsl(0, 100%, 74%)";
    lastNameError.style.display = "block";
    lastNameErrorIcon.style.display = "block";
    lastName.placeholder = "";
    // console.log("last name is empty");
  } else {
    lastName.style.border = "1px solid hsl(246, 25%, 77%)";
    lastNameError.style.display = "none";
    lastNameErrorIcon.style.display = "none";
  }

  // email
  let email = document.getElementById("userEmail");
  if (validateEmail(email.value)) {
    // geldig
    // console.log("valid email");
    email.style.border = "1px solid hsl(246, 25%, 77%)";
    emailError.style.display = "none";
    emailErrorIcon.style.display = "none";
  } else {
    // ongeldig
    // console.log("invalid email");
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    emailError.style.display = "block";
    emailErrorIcon.style.display = "block";
    userEmail.placeholder = "email@example/com";
  }

  // password
  let password = document.getElementById("password");
  if (password.value == "") {
    password.style.border = "2px solid hsl(0, 100%, 74%)";
    passwordError.style.display = "block";
    passwordErrorIcon.style.display = "block";
    password.placeholder = "";
  } else {
    password.style.border = "1px solid hsl(246, 25%, 77%)";
    passwordError.style.display = "none";
    passwordErrorIcon.style.display = "none";
  }
}
