// Step 1 - Defining a function
function getUserStatus() {
    // var status code = undefined; // This variable is hoisted to the top of the function scope
    console.log(status); // This will log 'undefined' because the variable is hoisted but not yet assigned a value
    var status = "Active"; // Now we assign a value to the variable
    console.log(status);
}

// Step 2 - Calling the function
getUserStatus();