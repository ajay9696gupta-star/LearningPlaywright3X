let a = "Ajay";

if (true) {
    console.log(a); // This will log 'Ajay' because the variable is accessible within the block scope
    let a = "temp"; // This variable is block-scoped and shadows the outer variable 'a'
}