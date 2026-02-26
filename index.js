// Array containing all possible characters for password
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Selects HTML button element with the "passwordGen" ID
const generateButton = document.getElementById("passwordGen") 
// Selects HTML container for passwordOne & passwordTwo 
const passwordOneEl = document.getElementById("passwordOne")
const passwordTwoEl = document.getElementById("passwordTwo")

// Calls the generateBothPasswords function upon clicking HTML button to retrieve generated passwords
generateButton.addEventListener("click", generateBothPasswords);

// For loop that generates password of length 15 from available characters array
function generatePassword(length = 15) {
    const password = []; // initialize empty array to hold the generated password

    for (let i = 0; i < length; i++) {
        // Utilizes Math.random to generate a random index with range from 0 - characters array length
        // Math.floor to round down to nearest whole number -- places index # into randomIndex variable
        const randomIndex = Math.floor(Math.random() * characters.length);
        // Use the randomIndex variable to push the selected index from the characters array
        // into the empty "password" array.
        password.push(characters[randomIndex]);
    }
    // Combine all characters into a single string with no separator.
    return password.join("");
}
// Function to call the generatePassword() function twice,
// Updates the text for passwordOneEl & passwordTwoEl containers 
function generateBothPasswords() { 
    passwordOneEl.textContent = generatePassword();
    passwordTwoEl.textContent = generatePassword();
}

// NOTES FOR MYSELF: 
// pick 15 random characters from the array
// use a for loop to pick 15 characters (WITH REPLACEMENT)