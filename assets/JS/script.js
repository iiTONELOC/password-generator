// Password Keys Arrays

passwordArray=[];
specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
upperChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
lowerChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
numericChar=["1","2","3","4","5","6","7","8","9","0"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword(){
  let passwordArray=[];
  let userPassword="";
  // Ask user how many characters they would like their password to be set this to an integer so we can validate that we have a number value.
  let finalPasswordLength = parseInt(prompt("How many characters do you want your new password to be? Enter a value between '8' and '128'.\nPlease read through the following prompts and make at least one selection to continue."));
  

 
  console.log(finalPasswordLength);


    // Create loop to validate password length
    while(finalPasswordLength < 8 || finalPasswordLength > 128 || typeof(finalPasswordLength) != "number" || finalPasswordLength === null || finalPasswordLength === NaN);{
      window.alert("Pick a number between '8' and '128' and type it in below, only numeric responses are accepted.");
      finalPasswordLength = parseInt(prompt ("How many characters do you want your new password to be? Enter a value between '8' and '128'.\nPlease read through the following prompts and make at least one selection to continue."));
    }
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

   //Build the user response array for password keys
   if (useSpecialChar == true){
    passwordArray.push(specialChar);
  }
  if (useUpperCase == true) {
    passwordArray.push(upperChar);
  }
  if (useLowerCase == true) {
    passwordArray.push(lowerChar);
  }
  if (useNumbers == true) {
    passwordArray.push(numericChar);
  }

  

  
  // Create loop to vaildate user responses and prompt user to make at least one choice to continue.
  while(useSpecialChar == false && useUpperCase == false && useLowerCase == false && useNumbers == false) {
    
    window.alert("Please select one of the following to continue.");
    // Ask user to confirm if they would like to use special characters
    useSpecialChar = confirm("Would you like to include special characters?");
    
    // Ask user to confirm if they would like to use upper case letters
    useUpperCase = confirm("Would you like to inlcude uppercase letters in your new password?");
    
    // Ask user to confirm if they would like to use lower case letters
    useLowerCase = confirm("Would you like to include lowercase letters in your new password?");
    
    // Ask user to confirm if they would like to use numbers
    useNumbers = confirm("Would you like to include numbers in your new password?");     
  }
  
  
  // Take user responses and generate a random password 
  
 
  // Create a loop for the length of the password using random values from thechosen criteria 
  
  for (let i=0; i < finalPasswordLength; i ++){
    let randomPassNum;
    let selectedCaseArray;
    let randomIndexNumber;
    let randomPass;

    randomPassNum = parseInt(Math.floor(Math.random()*passwordArray.length));
    selectedCaseArray = passwordArray[randomPassNum];
    randomIndexNumber = Math.floor(Math.random()*selectedCaseArray.length);
    randomPass = selectedCaseArray[randomIndexNumber];
    
    userPassword += randomPass
  }
  
// Write password to the #password input
function writePassword() {
document.getElementById('password').innerHTML = userPassword;
}
writePassword();


  
}