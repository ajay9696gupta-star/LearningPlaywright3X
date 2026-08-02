function greet1(name) {
    return `Hello, ${name}!`;
}

// fumction expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet1("Alice")); // Output: Hello, Alice!
console.log(greet("Bob")); // Output: Hello, Bob!