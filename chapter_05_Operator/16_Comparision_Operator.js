// Compersion Operator  

// =, ==, ===, !=, !==, >, <, >=, <=

// = -> Assignment operator, used to assign a value to a variable.
// == -> Equality operator, used to compare two values for equality. It performs type coercion if the types are different.
// === -> Strict equality operator, used to compare two values for equality without type coercion. It checks both value and type.
// != -> Inequality operator, used to compare two values for inequality. It performs type coercion if the types are different.  
// !== -> Strict inequality operator, used to compare two values for inequality without type coercion. It checks both value and type.
// > -> Greater than operator, used to compare if the left value is greater than the right value.
// < -> Less than operator, used to compare if the left value is less than the right value.
// >= -> Greater than or equal to operator, used to compare if the left value is greater than or equal to the right value.
// <= -> Less than or equal to operator, used to compare if the left value is less than or equal to the right value.

console.log(5 == 5); // Output: true
console.log(3 > 4); // Output: false
console.log(5 === 5); // Output: true
console.log(5 == "5"); // Output: true // lose comparison operator
console.log(5 === "5"); // Output: false
console.log(3 < 4); // Output: true
console.log(5 >= 5); // Output: true
console.log(3 <= 4); // Output: true

console.log(3 == 3); // Output: true
console.log(3 == "3"); // Output: true // lose comparison operator
console.log(3 === "3"); // Output: false

console.log(3 != "3"); // Output: false
console.log(3 !== "3");  // Output: true