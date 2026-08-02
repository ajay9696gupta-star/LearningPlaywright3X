let score1 = 85;
let result = score1 >= 60 ? "Pass" : "Fail";
console.log(result);

let score2 = 45;
let result2 = score2 >= 60 ? "Pass" : "Fail";
console.log(result2);

//Define
function getResult(score) {
    return score >= 60 ? "Pass" : "Fail";
}

let result3 = getResult(85);
let result4 = getResult(45);
console.log(result3);
console.log(result4);