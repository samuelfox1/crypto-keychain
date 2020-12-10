// Assignment Code
var generateBtn = document.querySelector("#generate");


// launch program when button clicked
generateBtn.addEventListener("click", correctEntry);


//edge case verify entry
function correctEntry() {
  userInput = prompt('enter password length from 8 to 128 characters')
  console.log(userInput)
  if (parseInt(userInput) > 7 && parseInt(userInput) < 129) {
    generatePassword()
  } else {
    alert('Please Try Again')
  }
}

function generatePassword() {

  //define function's local variables
  var alphaLow = true
  var alphaLowChars = ('abcdefghijklmnopqrstuvwxyz')
  var alphaUp = true
  var alphaUpChars = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  var numeric = true
  var numericChars = ('1234567890')
  var special = true
  var specialChars = ('!"#$%&*+-/;<=>?@\^_`|~')
  var userInputArr = []
  var userInput = ''
  var password = ''
  var randomCharArr = []
  var randomCharVal = ''

  //================================================

  // confirm options
  alphaLow = confirm('Include lowercase characters?')
  console.log(alphaLow)
  alphaHigh = confirm('Include UPPERCASE characters?')
  console.log(alphaHigh)
  // numeric = confirm('Include numebers?')
  // console.log(numeric)
  // special = confirm('Include special characters?')
  // console.log(special)
  

  if (alphaLow = true){
  randomCharVal = Math.floor(Math.random() * alphaLowChars.length)
  randomCharArr.push(alphaLowChars[randomCharVal])
  password = password + (alphaLowChars[randomCharVal])

  console.log(randomCharArr, randomCharVal, password)
  }
  if (alphaUp = true){
  randomCharVal = Math.floor(Math.random() * alphaUpChars.length)
  randomCharArr.push(alphaUpChars[randomCharVal])
  password = password + (alphaUpChars[randomCharVal])

  console.log(randomCharArr, randomCharVal, password)
  }


  // var password = generatePassword();
  // define container to store password
  var passwordText = document.querySelector("#password");
  // password is written to the page
  passwordText.value = password;
}





//---------------------I need a new, secure password-------------------------

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
//TODO: prompt user for character length 8 -128, set as var
//TODO: set edge case, numbers only, 8-128

// WHEN prompted for password criteria
// select criteria to include in the password 
  //TODO: prompt for lower case letters, set as     var level1
  //TODO: prompt for upper case letters, set as     var level2
  //TODO: prompt for numbers, set as                var level3      
  //TODO: prompt for special characters, set as     var level4




// WHEN all prompts are answered
  // store password in a     var password

