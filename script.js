// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphabetLower = ['a','b','c','d','e','f','g','j','i','j','k','l','m','n','o','p','q','r','s','t','u','b','w','x','y','z'];
const alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var passwordLength = "";


function generatePassword() {
  console.log("Hey! You clicked the button")
   
    
    
    var passwordLength = prompt("How many charachters would you like your password? (ie. 8-128)");
    while (passwordLength < 7 || passwordLength > 128) {
       alert("Please choose a whole number between 8-128");
      var passwordLength = prompt("How many charachters would you like your password? (ie. 8-128)");
      }
  
  
    return "generatedPassword"; //this is where the generated password variable will go
  }



// Write password to the #password input
function writePassword() {
  var password  = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




  passwordLower = confirm("Would you like to include lowercase letters?");
  passwordUpper = confirm("Would you like to include uppercase letter?");
  passwordSymbols = confirm("Would you like to include symbols in the password?");
  passwordNumbers = confirm("would you like to include numbers in the password?");
}


generateBtn.addEventListener("click", writePassword); 
// Write loop for errors on input. 

// create alert confirm boxes for password parameters

// Add event listener to generate button

/*

1. Prompt User on password criteria 
  A. length
  B. Lower, Upper, Symbols, Numbers
2. Validate input (ex. make sure correct # of length is entered)
  A. while loop to make sure number is between 8-128
  b. while loop to make entry is number

3. Generate password based on criteria
4. Display password in box (insert gerated password variable into box)
*/