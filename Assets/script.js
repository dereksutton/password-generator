/* this function asks the user which characters they want to include, concatenates the results of each prompt,
then uses an "if" statement to check if user chose at least one character type. */

var charSelect = function() {

  let charUpper = confirm('Would you like to include UPPERCASE letters?') ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
  let charLower = confirm('Would you like to include lowercase letters?') ? 'abcdefghijklmnopqrstuvwxyz' : '';
  let charNum = confirm('Would you like to include numbers?') ? '0123456789' : '';
  let charSpecial = confirm('Would you like to include special characters?') ? '!@#$%&*+' : '';

  let charString = charUpper + charLower + charNum + charSpecial;

  if (charString.length > 0) {
    console.log(`Character string is ${charString}`);
    return charString;
  } else {
    alert('Please choose at least one type of character.');
    return charSelect();
  }
}

// this function generates a random password.

var generatePass = function() {

  // prompting the user for desired password length.
  let charLength = parseInt(prompt('How long would you like your password to be? Please enter a number between "8" and "128".'));

  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    return generatePass();
  }

  // this section generates the random password.
  let charSet = charSelect();
  let retrievePass = '';

  for (let i = 0, n = charSet.length; i < charLength; i++) {
    retrievePass += charSet[Math.floor(Math.random() * n)];
  }

  // this logs the new password to the console.
  console.log(`Generated password is ${retrievePass}`);

  // this returns the value of the new generated password.
  return retrievePass;
}


// this grabs a reference to the generate button using the element ID.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
