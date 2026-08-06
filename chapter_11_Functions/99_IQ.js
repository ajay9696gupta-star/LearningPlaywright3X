var a ="Ajay";

if(true){
    console.log(a); // This will log 'Ajay' because the variable is accessible within the block scope
    var a = "temp"; // This variable is block-scoped and shadows the outer variable 'a'
    console.log(a); // This will log 'temp' because the inner variable 'a' is now accessible within the block scope
}