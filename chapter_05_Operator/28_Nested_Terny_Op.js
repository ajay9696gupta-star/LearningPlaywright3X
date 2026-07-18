// Multiple Conditions with Nested Ternary Operator
// The nested ternary operator allows you to evaluate multiple conditions in a single expression. It can be useful for simple cases, but it can also make the code harder to read if overused. The syntax for the nested ternary operator is as follows:

let age = 26;
// age > 18  -> he will to goa, else not goa
// drink > 25 yes, else no

let is_ajay_enjoy = age > 18 ? (age > 25 ? "Drink" : "No") : "Not Goa";
console.log(is_ajay_enjoy); // Output: Yes