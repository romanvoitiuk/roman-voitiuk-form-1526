// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>


let fnIn = document.querySelector("#fullname");
let emIn = document.querySelector("#email");
let messIn = document.querySelector("#mess");
let btn = document.querySelector("#submit-btn");
let form = document.querySelector("form");

// Declare variable that will 
// store regular expression for email

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function handleForm(e) {
         e.preventDefault()
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    
    // Declare object that will store the form-data
    
    let data = {};
    // Declare array that will store the errors
    let error = [];

        
    // Check if fullname is not empty.
    
    if (fnIn.value !== "") {
        data.name = fnIn.value;
        // If so:
       // Pass the collected value
       // to your object "data".
        console.log(data);
    } else {
        // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
         error.push("Input your name,please!");
    }

    /*
    +-------+    
    | EMAIL | 
    +-------+
    */
    // Check if email is not empty.
       // Check if email is valid.
    function testEmail(email){
       let emailFormat = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
       return emailFormat.test(email);
    }
    // Pass the collected value
          // to your object "data".
    if (emIn.value !== "") {
        if(testEmail(emIn.value)){
            data.email = emIn.value;
        } else {
            // Create a corresponding error-message
          // and add it to your array "errors".
            error.push("Email is invalid");
        }
    } else {
        // Create a corresponding error-message
       // and add it to your array "errors"
        error.push("Email is missing");
    }
    
    /*
    +---------+    
    | MESSAGE | 
    +---------+
    */
    // Check if message is not empty.
    
    if (messIn.value !== "") {
        data.message = messIn.value;
        // If so:
       // Pass the collected value
       // to your object "data".
        console.log(data);
    } else {
         // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
         error.push("Message is missing");
    }
    /*
    +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+
    */
    // Check if there is anything in array errors
    
     if (error.length > 0) {
         // If so: 
       // Print it in JavaScript console.
        console.log(error);
    }
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    
        console.log(data);
        form.reset();
    
    // End your conditional here.

// Close your function here
}   

// Register your form to "click" event.
btn.addEventListener("click", handleForm);


