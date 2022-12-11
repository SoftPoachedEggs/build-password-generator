// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphabetLower = ['a','b','c','d','e','f','g','j','i','j','k','l','m','n','o','p','q','r','s','t','u','b','w','x','y','z'];
const alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var passwordLength = "";

function generatePassword() {
        console.log("Hey! You clicked the button")
        return "createdPassword";
}

// Write password to the #password input
function writePassword() {
  var password  = generatePassword();
  var passwordText = document.querySelector("#password");
  var concatString = [];
  //var createdPassword = randomString;
  passwordText.value = password;


  //pw length check
  var passwordLength = prompt("How many charachters would you like your password? (ie. 8-128)");
    while (passwordLength < 7 || passwordLength > 128) {
      alert("Please choose a whole number between 8-128");
      var passwordLength = prompt("How many charachters would you like your password? (ie. 8-128)");
      }

      console.log("The string will be: ", passwordLength ) //console pw length criteria

  var passwordLower = confirm("Would you like to include lowercase letters?");
  var passwordUpper = confirm("Would you like to include uppercase letter?");
  var passwordSymbols = confirm("Would you like to include symbols in the password?");
  var passwordNumbers = confirm("would you like to include numbers in the password?");

  if (passwordLower) {
    concatString = concatString.concat(alphabetLower)
  }
  if (passwordUpper) {
    concatString = concatString.concat(alphabetUpper)
  }
  if (passwordSymbols) {
    concatString = concatString.concat(symbols)
  }
  if (passwordNumbers) {
    concatString = concatString.concat(numbers)
  }

  
  console.log("concat string: ", concatString);
}

generateBtn.addEventListener("click", writePassword); 



//Ask for criteria and then form concat array


//concat the results of confirm criteria to one large array






// above creates variable = concatString

//create string of combined criteria array and form string randomly using for loop
//Bellow is random string function

}

/*

}

}

// Write loop for errors on input. 

// create alert confirm boxes for password parameters

// Add event listener to generate button


1. Prompt User on password criteria 
  A. length
  B. Lower, Upper, Symbols, Numbers
2. Validate input (ex. make sure correct # of length is entered)
  A. while loop to make sure number is between 8-128
  b. while loop to make entry is number

3. Generate password based on criteria
4. Display password in box (insert gerated password variable into box)

*/