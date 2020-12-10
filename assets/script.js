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
    // if user input is illegal,
  } else {
    alert('Please Try Again')
  }
}

function generatePassword() {
  
  //define function's local variables
  
  var alphaLowerChars = ('abcdefghijklmnopqrstuvwxyz')
  
  var alphaUpperChars = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  
  var numericChars = ('1234567890')
  
  var specialChars = ('!"#$%&*+-/;<=>?@\^_`|~')
  var userInputArr = []
  var password = ''
  var randomCharArr = []
  var randomCharVal = ''

  var userChoicesArr = []
  
  //================================================
  
  //function to pick a random value from array 'x' and add it to our password string
  function generate(x) {
    randomCharVal = Math.floor(Math.random() * x.length)
    randomCharArr.push(x[randomCharVal])
    password = password + (x[randomCharVal])
    
  }
  
  function addToBox(x) {
    if (x === true)
    userChoicesArr.push()
  }
  
  //================================================
  
  // confirm options
  alphaLower = confirm('Include lowercase characters?')   
  alphaUpper = confirm('Include UPPERCASE characters?')
  numeric = confirm('Include numebers?')
  special = confirm('Include special characters?')  
  
  //run loop as many times as password length input
  for (let index = 0; index < passwordLength; index++) { 
    //use option if selected & decrease password length by 1
    if (alphaLower === true) {
      generate(alphaLowerChars)
      --passwordLength
    }
    //use option if selected & decrease password length by 1
    if (alphaUpper === true) {
      generate(alphaUpperChars)   
      --passwordLength 
    }
    //use option if selected & decrease password length by 1
    if (numeric === true) {
      generate(numericChars)
      --passwordLength
    }
    //use option if selected & decrease password length by 1
    if (special === true) {
      generate(specialChars)
      --passwordLength
    }
    
  }
  
  // store our password here
  var passwordText = document.querySelector("#password");
  // password is written to the page
  passwordText.value = password;
}


