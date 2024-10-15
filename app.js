// app.js

// Get the form element by its ID
const form = document.getElementById('signup-form');
const messageDiv = document.getElementById('message');

// Add an event listener to the form for the submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const topic = document.getElementById('topic').value;

    // Display a success message to the user
    messageDiv.innerHTML = `Thank you, <strong>${name}</strong>! We will send updates about <strong>${topic}</strong> to <strong>${email}</strong>.`;
    messageDiv.classList.add('success'); // Add the success class for styling

    // Clear the form after submission
    form.reset();
});
