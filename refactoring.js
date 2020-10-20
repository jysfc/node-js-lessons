// when the user submits on sign up

const message = getEmailError(emailInput);

// if there is an email error, e.g. if message !== blank
showErrorValidation("#email-error", message);
// pass the email error id and the message from getEmailError()

// if there is a password error, e.g. if message !== blank
showErrorValidation("#password-error", message);
// pass the password error id and the message from getPasswordError()

function getEmailError(emailInput) {
   // check the user email input against all validation.
   // if emailInput is blank
   // return "Please enter your email address."
   // else return "" // an empty string
}

function showErrorValidation(id, message) {
   // use jQuery to toggle the error message and error styling
}

function getPasswordError(passwordInput) {
   // check the user email input against all validation.
   // if passwordInput is blank
   // return "Please create a password."
   // if password is less than 9 chars
   // return "Your password must be at least 9 characters."
   // if password contains part or all of the local-part of email
   // return "All or part of your email cannot be used in your password."
   // if password contains a unacceptable password
   // return `Your password contains a commonly used password, "123456", and can be easily discovered by attackers. Please use something else.`
   // else return "" // an empty string
}

// running al validation over one function to clean up code

// Put in their own files
// getPasswordError.js
// getEmailError.js
// password lists (3)
