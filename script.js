const form = document.getElementById("contactForm");

const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
    const phone = document.getElementById("phone");
  const message = document.getElementById("message");

    const successMessage = document.getElementById("successMessage");

      
    // Form submission validation
      form.addEventListener("submit", function(event) {
  // Prevent the form from actually submitting
  event.preventDefault();

  let hasError = false;

        // Check first name
       if (firstName.value.trim() === "") {
     document.getElementById("firstNameError").textContent =
      "Please enter your first name.";
       hasError = true;
   }

            // Check last name
      if (lastName.value.trim() === "") {
    document.getElementById("lastNameError").textContent =
      "Please enter your last name.";
    hasError = true;
  }

      // Check email
     if (email.value.trim() === "") {
    document.getElementById("emailError").textContent =
      "Please enter your email.";
    hasError = true;
  } 



      else if (!email.value.includes("@")) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    hasError = true;
  }

              // Check phone
          if (phone.value.trim() === "") {
       document.getElementById("phoneError").textContent =
       "Please enter your phone number.";
    hasError = true;
  }



  // Check message
   if (message.value.trim() === "") {
    document.getElementById("messageError").textContent =
      "Please enter a message.";
             hasError = true;
  }

      // Display success message
          if (!hasError) {
    successMessage.textContent = "Form submitted successfully!";
  } 
      else {
    successMessage.textContent = "";
  }
});


// Clear first name error when typing
    firstName.addEventListener("input", function() {
  document.getElementById("firstNameError").textContent = "";
});


        // Clear last name error when typing
        lastName.addEventListener("input", function() {
  document.getElementById("lastNameError").textContent = "";
});


      // Clear email error when typing
        email.addEventListener("input", function() {
   document.getElementById("emailError").textContent = "";
});


      // Clear phone error when typing
phone.addEventListener("input", function() {
  document.getElementById("phoneError").textContent = "";
});


// Clear message error when typing
message.addEventListener("input", function() {
  document.getElementById("messageError").textContent = "";
});


// Bonus: Fetch ajoke from a free public API
        fetch("https://official-joke-api.appspot.com/random_joke")
  .then(function(response) {



    // Check if the API request worked
          if (!response.ok) {
      throw new Error("API request failed");
    }

    return response.json();
  })

  .then(function(data) {



    // Display the joke on the page
        document.getElementById("fact").textContent =
      data.setup + " " + data.punchline;
  })

  .catch(function(error) {




    // Display an error message on the page
    document.getElementById("fact").textContent =
      "Sorry, the joke could not be loaded.";
  });

