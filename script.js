// Assignment Code
// Assignment Code
// password criteria include [upperChars, lowerChars, numbers, specialChars];
// variables assigned to #generate and #password
var generateBtn = document.querySelector("#generate");
var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '12344567890';
  var specialChars = '!@#%^&*()_+{}';
  var chosenOptions = "";

  // Write password to the #password input
function writePassword() {
  chosenOptions = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password function, initiate 'chosenOptions' variable within function,
function generatePassword() {
  var chosenOptions = "";
  var result = "";
  var length = prompt("How many characters would you like in your random password? (8 - 128)");
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please choose characters between 8 - 128!");
    return generatePassword();
  }

//confirm user for character length of 8 chars no more than 128
var includeUpperChars = confirm("Include upper case letters?", 'yes or no?');
var includeLowerChars = confirm("Include lower case letters?");
var includeNumbers = confirm("Include numbers?");
var includeSpecialChars = confirm("Include special characters?");

//validate password length
if (!includeLowerChars && !includeUpperChars && !includeNumbers && !includeSpecialChars) {
  alert("Please choose at least 1 character type! ");
  return generatePassword();
}

//if statement confirm characters input
  if (includeLowerChars) {
    chosenOptions += lowerChars;
} 
if (includeUpperChars) {
  chosenOptions += upperChars;
}
if  (includeNumbers) {
  chosenOptions += numbers
} 
if (includeSpecialChars) {
    chosenOptions += specialChars;
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chosenOptions.length);
    result += chosenOptions.charAt(randomIndex);
   }

   return result;

}


