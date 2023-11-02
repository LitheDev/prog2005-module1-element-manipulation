// Event handler for a button

let clicked = false;
let toggleNumber = 0;
let clickNumber = 0;

// Person object, returns details to fullName array using anonymous function.
let person = {
    firstName: "Reza",
    lastName: "Wood",

    // Using firstName and lastName, return to fullName field.
    fullName: function ()
    {
        return this.firstName + " " + this.lastName;

    }
}

let employee = {name: "Barry", address: "123 Test Street", age: 21}
}

// Assigns the string from 'Fullname" to the paragraph with ID name
function displayName()
{

    console.log(person.fullName()); // Logs full name using function
    console.log(document.getElementsByTagName("p")[2]); // Logs fullname using array notation
    document.getElementById("name").innerHTML = person.fullName(); // Sets fullname to ID name

}



// Function toggle, toggles the button on and off.
function toggle()
{
    clicked = !clicked;
    let index = "";

    // If not clicked
    if (!clicked)
    {
        index = "not ";
    }

    // Display message and log in console
    document.getElementById("toggle").innerHTML = "The Button is " + index + "clicked";
    toggleNumber++;
    console.log("Toggle " + toggleNumber);


}

// Creates a new paragraph line and displays the amount of times the button has been clicked.
function create()
{
    clickNumber++; // Increase counter by 1
    let paragraph = document.createElement("p"); // Create paragraph element
    paragraph.innerHTML = "This is a new line, the button has been clicked " + clickNumber + " times."; // Set innerHTML message
    document.body.appendChild(paragraph); // Append new paragraph object.

}