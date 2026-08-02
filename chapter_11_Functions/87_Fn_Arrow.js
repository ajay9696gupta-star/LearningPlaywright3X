function double(x) {
    return x * 2;
}

const doubleArrow = (x) => x * 2;
doubleArrow(5); // Output: 10

const getEnv = () => "staging";
console.log(getEnv()); // Output: staging

// multiline arrow function

const getResult = (score) => {
    if (score >= 70)  return "Pass";
    return "Fail";
     
};
console.log(getResult(85)); // Output: Pass
console.log(getResult(45)); // Output: Fail