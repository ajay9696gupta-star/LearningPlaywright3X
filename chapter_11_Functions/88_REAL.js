function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
       console.log("Request is fine");
    }   
}

const validateStatusCode_Exp = function(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Request is fine");
    }
};

const validateStatusCode_Arrow = statusCode => {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Request is fine");
    }
};  

validateStatusCode(200); // Output: Request is fine
validateStatusCode_Exp(200); // Output: Request is fine
validateStatusCode_Arrow(200); // Output: Request is fine