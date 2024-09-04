const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]



let hasPassword = false
let firstPassword = document.getElementById("first-pass-div")
let secondPassword = document.getElementById("second-pass-div")
let passwordLength = document.getElementById("passW-length")


function generatePasswords () {
    let lengthValue = parseInt(passwordLength.value)
    
    if (!lengthValue || isNaN(lengthValue) ) {
        alert("Please select a valid password length");
        return;
    }

    if (lengthValue < 6 || lengthValue >15) {
        alert("Password length must be between 6 and 16 characters");
        return;
    }
    
    clearPasswords ();

    if (hasPassword === false) {
        randomPasswords()
    }
}

//Clear the previous passwords
function clearPasswords () {
    firstPassword.textContent = "";
    secondPassword.textContent = "";
    hasPassword = false;
}

function updateLengthDisplay(value) {
    document.getElementById('length-display').textContent = value;
}

//Generate two random passwords by the selected length
function randomPasswords () {
    let lengthValue = passwordLength.value;
    
    //Determine if symbols or numbers should be included
    let includeSymbols = document.getElementById("symbols-checkbox").checked;
    let includeNumbers = document.getElementById("numbers-checkbox").checked;
    
    //Build the character pool based on toggle switches
    //The '...' spread operator allows you to take an array and spread out its elements into another array.
    let characterPool = [...characters];
    if (includeNumbers === true) {
        //'concat' creates a new array by merging existing arrays. It does not modify the original array but returns a new one.
        characterPool = characterPool.concat(numbers)
    }
    if (includeSymbols) {
        characterPool = characterPool.concat(symbols)
    }
    
    //Generate the first password
    for (let i=0; i<lengthValue; i++) {
        r = Math.floor (Math.random() * characterPool.length);
        firstPassword.textContent += characterPool[r]
    }
    
    //Generate the second password
    for (let i=0; i<lengthValue; i++) {
        r = Math.floor (Math.random() * characterPool.length);
        secondPassword.textContent += characterPool[r]
     }
    
    //Set hasPassword to true to indicate that passwords have been generated
    hasPassword = true
}

function copyPassword(elementId) {
    let copiedPassDiv = document.getElementById(elementId);
    let passwordText = copiedPassDiv.textContent;

    console.log(passwordText); // This will log the password to the console

    // Copy the password to the clipboard
    navigator.clipboard.writeText(passwordText).then(function() {
        console.log('Password copied to clipboard: ' + passwordText);
    }).catch(function(error) {
        console.error('Failed to copy password: ', error);
    });
}




