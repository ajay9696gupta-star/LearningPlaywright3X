// Type 2 Functions

// So with argument/Parameter but no return value
// Define a function named greetByNam that takes a parameter name
function greetByName(name) {
    console.log("Hello, " + name + "!");
} 

greetByName("Ajay"); // Output: Hello, Ajay!
greetByName("Vijay"); // Output: Hello, Vijay!
greetByName("Suresh"); // Output: Hello, Suresh!    
greetByName("Ravi"); // Output: Hello, Ravi!

let name1 = greetByName("Ajay"); // Output: Hello, Ajay!
console.log(name1); // Output: undefined