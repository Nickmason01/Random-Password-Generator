var lowercase =["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers=[ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbols=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function generatePassword() {
  var choice = [];
  var passLength =prompt("password length (between 8 and 128 characters)") ;
    if (isNaN(passLength) || passLength < 8 || passLength >128 ){
    alert("Please enter a number betweem 8 and 128");
    generatePassword ();
    return;
    }
  var Uselowercase=confirm("Include lowercase?");

    if (Uselowercase ===true) {
      choice = choice.concat(lowercase);
   }
    
  var Useuppercase =confirm("include uppercase");
   if (Useuppercase ===true){
    choice=choice.concat(uppercase);
  }
    
  var Usenumber =confirm("Include numbers") ; 
    if (Usenumber ===true){
    choice=choice.concat(numbers);
   }
    
    
  var Usesymbols = confirm("include symbols?"); 
    if (Usesymbols ===true) {
    choice=choice.concat(symbols);
    
  }
var characters ="";
  for (var i =0; i < passLength; i++) {
      characters += choice[Math.floor(Math.random() * choice.length)];
  }
  
  return characters;
}

 var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password ; 
 }
 
 generateBtn.addEventListener("click", writePassword)

