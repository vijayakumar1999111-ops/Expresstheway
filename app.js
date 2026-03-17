// app.js

// Event registration form submission handling for AKC Sports

// Function to validate input fields
function validateForm(data) {
    const errors = [];
    if (!data.name) errors.push('Name is required.');
    if (!data.email) errors.push('Email is required.');
    // More validation logic can be added
    return errors;
}

// Function to store data in LocalStorage
function storeData(data) {
    const existingData = JSON.parse(localStorage.getItem('registrationData')) || [];
    existingData.push(data);
    localStorage.setItem('registrationData', JSON.stringify(existingData));
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        // Add more fields as necessary
    };

    const errors = validateForm(formData);
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }

    storeData(formData);
    alert('Registration successful!');
});

// Example usage:
// Assume there is form with id 'registrationForm' and inputs with ids 'name', 'email'