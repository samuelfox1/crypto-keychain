//================PASSWORD GENERATOR========================

// establish button variable
var generateBtn = document.querySelector("#generate");
// launch program when button clicked
generateBtn.addEventListener("click", correctEntry);



//define local function variables  
var alphaLowerChars = ('abcdefghijklmnopqrstuvwxyz')
var alphaUpperChars = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
var numericChars = ('1234567890')
var specialChars = ('!"#$%&*+-/;<=>?@\^_`|~')
var password = ''
var userChoicesArr = []
var userInputArr = []
var passwordLength = 0
var selectionsArray = []


function clearTextBox() {

  
}

//edge case, verify legal input values
function correctEntry() {
  document.querySelector("#password").value = '';
  
  alert('screen cleared?')

  // prompt user for input and store value in variable
  userInput = prompt('enter password length from 8 to 128 characters')
  //convert user input string to integer and store in variable
  passwordLength = parseInt(userInput)
  //verify legal user prompt input
  if (passwordLength > 7 && passwordLength < 129) {
    // if user input is legal, run function
    // password is written to the page
    selectionLowerCase()
    // if user input is illegal, alert user to try again
  } else {
    alert('Please enter a number between 8 - 128')
  }
}

function selectionLowerCase() {
  x = confirm('Include lowercase characters?')
  if (x === true) {
    x = "lowercase"
    selectionsArray.push(x)
    selectionUpperCase()
  } else {
    selectionUpperCase()
  }
}

function selectionUpperCase() {
  x = confirm('Include UPPERCASE characters?')
  if (x === true) {
    x = "UPPERCASE"
    selectionsArray.push(x)
    selectionNumber()
  } else {
    selectionNumber()
  }
}

function selectionNumber() {
  x = confirm('Include number characters?')
  if (x === true) {
    x = "number"
    selectionsArray.push(x)
    selectionSpecial()
  } else {
    selectionSpecial()
  }
}

function selectionSpecial() {
  x = confirm('Include special characters?')
  if (x === true) {
    x = "special"
    selectionsArray.push(x)
    generatePassword()
  } else {
    generatePassword()
  }
}

function generatePassword() {
  if (selectionsArray.length === 0) {
    alert('Please select character types!')
    selectionLowerCase()
  }

  else {

    for (let index = 0; index < passwordLength; index++) {
      x = Math.floor(Math.random() * selectionsArray.length)
      if (selectionsArray[x] === 'lowercase') {
        l = Math.floor(Math.random() * alphaLowerChars.length)
        password = password + (alphaLowerChars[l])
      }

      else if (selectionsArray[x] === 'UPPERCASE') {
        u = Math.floor(Math.random() * alphaUpperChars.length)
        password = password + (alphaUpperChars[u])
      }

      else if (selectionsArray[x] === 'number') {
        n = Math.floor(Math.random() * numericChars.length)
        password = password + (numericChars[n])
      }

      else if (selectionsArray[x] === 'special') {
        s = Math.floor(Math.random() * specialChars.length)
        password = password + (specialChars[s])
      }
    }
    printToscreen()
  }

  function printToscreen() {    
    // store our password here
    var passwordText = document.querySelector("#password");
    // password is written to the page
    passwordText.value = password;
  }
}


