// Assignment Code
var passwordLength =[8,9,10,] 
var uppercase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,]
var lowercase = [ a,b,c,d,e,f,g,h,i,]
var numeric = [0,1,2,3,4,5,6,7,8,9]
var specialCharacters = [ ~,!,@var,#,$,&,%,^,*,+=,(),>,<,]



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//define a function that
function generatePassword() {
  var passwordLength = prompt("choose a length of at least 8 characters and no more than 128 characters");
  
  if (isNaN(passwordLength) === false) {
    var numberlength = Number(passwordLength);
    if (numberlength >= 8 && numberlength <= 128){
      console.log("correct Input")
    } else { 
       passwordLength = prompt("choose a length of at least 8 characters and no more than 128 characters");
    }

  } else {
    console.log("Invalid Input")
  }
  
  var passwordUppercase = confirm("do you want uppercase characters?")
  console.log(passwordUppercase)

  var lowerCase = confirm("do you want lowercase characters?")
  console.log(lowerCase)
  var numeric = confirm("do you want numeric characters?")
  console.log(numeric)

var specialCharacters = confirm("do you want specialCharacters?")
console.log(specialCharacters)


return " ";
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
