// Assignment Code
// variables----
var DefaultTxt = "Click Generate Password to start!"
var baseChar= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar= ["!","@","#","$","%","^","&","*"];
var selCriteria=[];
var MinPWDlength = 8;
var MaxPWDlength = 128;
var UserSelection = "";
alert(DefaultTxt);

// Event listener
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",writePassword)



// call password writing function

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// return random letter from basechar------

function randomChar(){
var randomcharacter = baseChar[Math.floor(Math.random()* baseChar.length)+1]
console.log(randomcharacter)
return randomcharacter;
// console log to check if script is working

}

function randomSpec(){
  var randomspecial = specialChar[Math.floor(Math.random()* specialChar.length)+1]
  console.log(randomspecial)
  return randomspecial;
}
// random number gen 0-9
function randomNum(){
  var randomNumber = [Math.floor(Math.random()* 9)+1]
  console.log(randomNumber)
  return randomNumber;
}


function generatePassword() {
// must return password
// prompt length
  // if length<8-128< stop/exit 
  // if undefined stop
  // if not number stop
  var pwlength= prompt("Please select a password length between 8-128")

  if (pwlength ==""){
    alert("Your selection is not a number between 8 - 128, please try again.");
  }

  else if (isNaN(pwlength)){
  alert("You did not select a number. Please try again.");
  }
  // checking length

  if(pwlength < 8){
    alert("please select a number between 8 - 128, Try again.");
  }
  else if(pwlength > 128){
    alert("Your selection is not between 8 - 128, Please try again.")

  }
// length varified

// confirm lower
var selectLowerCase= confirm("Would you like to use lowercase letters?");
// confirm upper
var selectUpperCase= confirm("would you like to use uppercase letters?");
// confirm special characters
var SelectSpecialChar= confirm(" Would you like to use special Characters?");
// confirm numbers
var selectrandomNum= confirm("Would you like to use numbers?");

// did the user select an option
if (!selectLowerCase && !selectUpperCase && !SelectSpecialChar && !selectrandomNum){
  alert("please select at least one option and try again!");
}
// create array for selected values

var selectedValues = [];
if (selectLowerCase){
  selectedValues.push("lowercase");
  
}
if(selectUpperCase){
  selectedValues.push("uppercase")
}
if (SelectSpecialChar){
  selectedValues.push("specialchar")
}
if (selectrandomNum){
  selectedValues.push("randomNumber")
}
//---------

// -- generate password based on selection

  for(var i =0; i < pwlength; i++){
var GeneratedPWD = Math.floor(Math.random()* selectedValues.length);
switch (selectedValues[GeneratedPWD]){
  case "lowercase": UserSelection+= randomChar();
  break;
  case "uppercase": UserSelection+= randomChar().toUpperCase();
  break;
  case "specialchar": UserSelection+= randomSpec();
  break;
  case "randomnumber": UserSelection+= randomNumber();
  break;
  
}
return UserSelection
}}
