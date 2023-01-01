$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  // Get the form and email input elements
const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');

// Add an event listener to the form's submit event
form.addEventListener('submit', event => {
  // Prevent the form from submitting
  event.preventDefault();

  // Retrieve the email address from the form
  const email = emailInput.value;

  // Send an AJAX request to the API endpoint with the email address
  fetch('https://api.example.com/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'abcdefghijklmnopqrstuvwxyz'
    },
    body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
    // Check the response from the API to see if the email was added to the list
    if (data.success) {
      console.log('Email added to list');
    } else {
      console.error('Error adding email to list');
    }
  });
});
