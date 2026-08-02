function greet(name) {
    return `Hello, ${name}!`;
}



const greet1 =  function(name1) {
    return `Hello, ${name1}!`;
}

//Arrow function
const greet2 = (name2) => `Hello, ${name2}!`;

console.log(greet1("Alice")); // Output: Hello, Alice!
console.log(greet2("Bob")); // Output: Hello, Bob!
console.log(greet("Charlie")); // Output: Hello, Charlie!