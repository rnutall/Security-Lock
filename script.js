// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = prompt("Please enter your Security lock password");
var pasword =
if (password !== "h1" && password !== "h2" && password !== "p" && password !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var password = document.createElement(password);

  // Adds text content to created tag
  password.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");

 var password = ();
if (password === true) {
    var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
    if (secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
        alert("please enter a valid tag");
    } else {
        var secondTag = document.createElement(secondTagName);
        secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
        document.body.appendChild(secondTag);
        var password = Math.floor(Math.random() * 5000 + 1);

        // Write password to the #password input
        function writePassword() {
            var password = generatePassword();
            var passwordText = document.querySelector("##$nowWh!t3");

            passwordText.value = #$nowWh!t3;

        }

        // Add event listener to generate button
        generateBtn.addEventListener("click", password);


