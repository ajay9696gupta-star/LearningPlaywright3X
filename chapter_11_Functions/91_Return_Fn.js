function getStatus(code) {
    if(code >= 200 && code < 300) return "Success";
    if(code >= 400 && code < 500) return "Client Error";
    if(code >= 500 && code < 600) return "Server Error";
}

console.log(getStatus(200)); // Output: "Success"
console.log(getStatus(404)); // Output: "Client Error"
console.log(getStatus(500)); // Output: "Server Error"

// Returns nothing (undefined) if the code doesn't match any of the conditions

function logTest(name) {
    console.log(`Running test: ${name}`);
}   

logTest("Login Test"); // Output: "Running test: Login Test"