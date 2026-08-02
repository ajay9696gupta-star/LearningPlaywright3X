// Checking Arrays

// Check if something is an array

let result = Array.isArray([1,2,3]);
let result1 = Array.isArray("a");

console.log(result);
console.log(result1);


// map, fliter and reduce

//every, some

[80,90,85].every(s =>s >=70);
[80,60,85].every(s =>s >=70);

//some -Atleast one must pass

[80,90,85].every(s =>s <70);
[80,60,85].every(s =>s <70);