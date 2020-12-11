//================PASSWORD GENERATOR========================

// establish button variable
var generateBtn = document.querySelector("#generate");
// launch program when button clicked
generateBtn.addEventListener("click", correctEntry);


//edge case, verify legal input values
function correctEntry() {
  // prompt user for input and store value in variable
  userInput = prompt('enter password length from 8 to 128 characters')
  //convert user input string to integer and store in variable
  passwordLength = parseInt(userInput)
  //verify legal user prompt input
  if (passwordLength > 7 && passwordLength < 129) {
    // if user input is legal, run function
    generatePassword()
    // if user input is illegal, alert user to try again
  } else {
    alert('Please Try Again')
  }
}

function generatePassword() {
  
  //define local function variables  
  var alphaLowerChars = ('abcdefghijklmnopqrstuvwxyz')  
  var alphaUpperChars = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')  
  var numericChars = ('1234567890')  
  var specialChars = ('!"#$%&*+-/;<=>?@\^_`|~')
  var password = ''
  var randomCharArr = []
  var randomCharVal = ''
  var userChoicesArr = []
  var userInputArr = [] 
  
  //================================================
  
  //pick a random value from array 'x' and add it to our password string
  function pickRndmChar(x) {
    randomCharVal = Math.floor(Math.random() * x.length)
    randomCharArr.push(x[randomCharVal])
    password = password + (x[randomCharVal])
    
  }
  
 
  //================================================
  
  // record user input of password character options
  alphaLower = confirm('Include lowercase characters?')   
  alphaUpper = confirm('Include UPPERCASE characters?')
  numeric = confirm('Include numbers?')
  special = confirm('Include special characters?')  
  
  //run loop as many times as password length input
  for (let index = 0; index < passwordLength; index++) { 
    //include character option if selected & decrease password length by 1 if used
    if (alphaLower === true) {
      pickRndmChar(alphaLowerChars)
      --passwordLength
    }
    //include character option if selected & decrease password length by 1 if used
    if (alphaUpper === true) {
      pickRndmChar(alphaUpperChars)   
      --passwordLength 
    }
    //include character option if selected & decrease password length by 1 if used
    if (numeric === true) {
      pickRndmChar(numericChars)
      --passwordLength
    }
    //include character option if selected & decrease password length by 1 if used
    if (special === true) {
      pickRndmChar(specialChars)
      --passwordLength
    }
    
  }
  
  // store our password here
  var passwordText = document.querySelector("#password");
  // password is written to the page
  passwordText.value = password;
}