// Password Keys Arrays

 passwordArray=[];
 specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
 upperChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
 lowerChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 numericChar=["1","2","3","4","5","6","7","8","9","0"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword(){
    // Ask user how many characters they would like their password to be
    var passwordLength = prompt ("How many characters do you want your new password to be? Enter a value between '8' and '128'.\nPlease read through the following prompts and make at least one selection to continue.");
    console.log(passwordLength);
    // Ask user to confirm if they would like to use special characters
    var useSpecialChar = confirm("Would you like to include special characters?");
    console.log(useSpecialChar);
    // Ask user to confirm if they would like to use upper case letters
    var useUpperCase = confirm("Would you like to inlcude uppercase letters in your new password?");
    console.log(useUpperCase);
    // Ask user to confirm if they would like to use lower case letters
    var useLowerCase = confirm("Would you like to include lowercase letters in your new password?");
    console.log(useLowerCase);
    // Ask user to confirm if they would like to use numbers
    var useNumbers = confirm("Would you like to include numbers in your new password?");
    console.log(useNumbers);
    
    // Create loop to validate password length and set this value as our value for our password generator function for password length.
    // Create loop to vaildate user responses and prompt user to make at least one choice to continue.
    
    
    // Take user responses and generate a random password 
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
