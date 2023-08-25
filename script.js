//Variables
const numberChosen = document.getElementById("number-chosen"); //select the place the number will display
let number = 0; //select starting value

//Error Handling
if (!numberChosen) {
    console.error("Missing elements!");
}

//Addition function
function addition() {
    number++; //add a number
    numberChosen.textContent = number; //display it
}

//Subtraction function
function subtraction() {
    number--; //subtract a number
    numberChosen.textContent = number;  //display it
}