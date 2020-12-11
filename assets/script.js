//================PASSWORD GENERATOR=================//


//define variables  
var passwordText = document.querySelector("#password");
passwordText.value = 'push the red button';
var generateBtn = document.querySelector("#generate");
var alphaLowerChars = ('abcdefghijklmnopqrstuvwxyz')
var alphaUpperChars = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
var numericChars = ('1234567890')
var specialChars = ('!"#$%&*+-/;<=>?@\^_`|~')
var password = ''
var passwordLength = 0
var selectionsArray = []
console.log('program ready')


generateBtn.addEventListener("click", function(){
  //clear variables for looped use
  
  selectionsArray=[]
  password=''
  console.log('program started')
  
  // launch program when button clicked
  correctEntry()  
})


//edge case, verify legal input values
function correctEntry() {    
  // prompt user for input and store value in variable
  userInput = prompt('enter desired password length between 8 and 128 characters')
  //convert user input string to integer and store in variable
  passwordLength = parseInt(userInput)
  //verify legal user prompt input
  if (passwordLength > 7 && passwordLength < 129) {
    // if user input is legal, run function
    // password is written to the page
    selectionLowerCase()
    // if user input is illegal, alert user to try again
  } else {
    console.log('invalid user input')
    alert('Please enter a number between 8 - 128')
  }
}
//if lowercase is desired, index 'lowercase' in selectionsArray, then move to next promt
function selectionLowerCase() {
  x = confirm('Include lowercase letters?')
  if (x === true) {
    x = "lowercase"
    selectionsArray.push(x)
    selectionUpperCase()
  } else {
    //if lowercase is not desired, move onto next prompt
    selectionUpperCase()
  }
}
//if uppercase is desired, index 'uppercase' in selectionsArray, then move to next prompt
function selectionUpperCase() {
  x = confirm('Include UPPERCASE letters?')
  if (x === true) {
    x = "UPPERCASE"
    selectionsArray.push(x)
    selectionNumber()
  } else {
    //if uppercase is not desired, index 'uppercase' in selectionsArray, then move to next prompt
    selectionNumber()
  }
}
//if number is desired, index 'number' in selectionsArray, then move to next prompt
function selectionNumber() {
  x = confirm('Include number?')
  if (x === true) {
    x = "number"
    selectionsArray.push(x)
    selectionSpecial()
  } else {
    //if number is not desired, move to next prompt
    selectionSpecial()
  }
}
//if special characters are desired, index 'special' in selectionsArray, then start generatePassword function
function selectionSpecial() {
  x = confirm('Include special characters?')
  if (x === true) {
    x = "special"
    selectionsArray.push(x)
    generatePassword()
  } else {
    //if special characters are not desired, move to generatePassword function
    generatePassword()
  }
}

function generatePassword() {
  if (selectionsArray.length === 0) {
    //if user selects no options, then selectionsArray is empty, and user is alerted to try again
    console.log('invalid user selections')
    alert('!!!!--Please select character types!--!!!!')
  }
  //user has selected atleast 1 character type
  else {
    console.log('generating new password')
    //generate the desired password length
    for (let index = 0; index < passwordLength; index++) {
      //generate random number to represent available index of selectionsArray
      x = Math.floor(Math.random() * selectionsArray.length)
      //if random number matches the 'lowercase' index, choose index. If it does not match, try next index
      if (selectionsArray[x] === 'lowercase') {
        //generate random number to choose a character index
        l = Math.floor(Math.random() * alphaLowerChars.length)
        //add the chosen character to the password string
        password = password + (alphaLowerChars[l])
      }
      
      //if random number matches the 'UPPERCASE' index, choose index. If it does not match, try next index
      else if (selectionsArray[x] === 'UPPERCASE') {        
        //generate random number to choose a character index
        u = Math.floor(Math.random() * alphaUpperChars.length)
        //add the chosen character to the password string
        password = password + (alphaUpperChars[u])
      }
      
      //if random number matches the 'number' index, choose index. If it does not match, try next index
      else if (selectionsArray[x] === 'number') {
        //generate random number to choose a character index
        n = Math.floor(Math.random() * numericChars.length)
        //add the chosen character to the password string
        password = password + (numericChars[n])
      }
      
      //if random number matches the 'special' index, choose index. If it does not match, try next index
      else if (selectionsArray[x] === 'special') {
        //generate random number to choose a character index
        s = Math.floor(Math.random() * specialChars.length)
        //add the chosen character to the password string
        password = password + (specialChars[s])
      }
    }
    //launch function
    printToscreen()
  }

  function printToscreen() {
    //password is written to the page
    passwordText.value = password;
    //password is cleared from memory
    password= ''
    console.log('password erased from program')
  }
}