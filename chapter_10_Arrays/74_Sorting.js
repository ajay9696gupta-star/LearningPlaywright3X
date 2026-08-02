let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);
// alphabetical by default

let score = [4, 3, 2];
console.log(score.sort());

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);
// Natural Sorting 

//proper sorting 
nums.sort((a,b) => a-b); //Ascending
console.log(nums);

nums.sort((a,b) => b-a); //Desc
console.log(nums);

nums.reverse();
console.log(nums);