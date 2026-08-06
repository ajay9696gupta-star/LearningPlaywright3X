function add(a, b, c) {
  return a + b + c;
}

let num = [1, 2, 3];
console.log(add(...num)); // Output: 6

//Spread operator can be used to pass multiple arguments to a function as an array. In this example, the `add` function takes three parameters and we use the spread operator to pass the elements of the `num` array as individual arguments to the function. The result is the sum of the three numbers, which is 6.
function hasError(...codes) {
  return codes.some(c => c === 500);  
}

let responseCodes = [200, 404, 500, 403];

console.log(hasError(...responseCodes)); // Output: true