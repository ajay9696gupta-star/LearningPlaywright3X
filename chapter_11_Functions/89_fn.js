function name1() {
    console.log("Hi");
}
name1(); // Output: Hi

// IIFW
(function() {
    console.log("Annonymous function");
})();

// Empty Arrow function
(() => {
    console.log("Empty Arrow function");
})();