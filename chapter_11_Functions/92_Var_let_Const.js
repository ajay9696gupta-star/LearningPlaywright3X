var a = 10;
console.log(a); 
// var - function scoped, can be redeclared and updated, hoisted to the top of the function or global scope.

//Define
function printHello() {
    console.log("Hello, World!");
    var a = 20; // var is function scoped, so this 'a' is different from the 'a' outside the function
    console.log(a);
    if(true) {
        var a = 30;
        console.log(a); // Output: 30
    }
    console.log(a); // Output: 30, because 'var' is function scoped, not block scoped
}
printHello(); // Output: Hello, World! 20 30 30


let b = 10;
console.log(b); 
// let - block scoped, can be updated but not redeclared, not hoisted to the top of the function or global scope.

//Define
function printHello() {
    console.log("Hello, World!");
    let b = 20; // let is block scoped, so this 'b' is different from the 'b' outside the function
    console.log(b);
    if(true) {
        let b = 30;
        console.log(b); // Output: 30
    }
    console.log(b); // Output: 20, because 'let' is block scoped
}
printHello(); // Output: Hello, World! 20 30 20