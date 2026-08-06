let a = 10;
console.log(a); // This will log '10' because the variable is accessible within the block scope

if (true) {
    console.log(a); // This will log '10' because the variable is accessible within the block scope
    let a = 20;
    console.log(a); // This will log '20' because the inner variable 'a' is now accessible within the block scope
}