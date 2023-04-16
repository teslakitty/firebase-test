// Get a reference to the Firestore database service
const db = firebase.firestore();

// Get references to the HTML elements
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("output");

// Add a click event listener to the submit button
submitButton.addEventListener("click", () => {
    // Get the name from the input field
    const name = nameInput.value;
    
    // Add the name to the database
    db.collection("names").add({
        name: name
    })
    .then(() => {
        // Clear the input field
        nameInput.value = "";
        
        // Update the output with a success message
        outputDiv.innerHTML = "Name added successfully!";
    })
    .catch((error) => {
        // Update the output with an error message
        outputDiv.innerHTML = `Error adding name: ${error.message}`;
    });
});
