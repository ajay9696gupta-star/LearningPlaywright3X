let statusCode = 404;
let category = statusCode <300 ? "Success" : statusCode < 400 ? "Redirect" : statusCode <500 ? "Client Error" : "Server Error";
console.log(`Status: ${statusCode}, Category: ${category}`); // Output: Status: 404, Category: Client Error  