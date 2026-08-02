let arr = [1, 2, 3, 5, 6];
console.log(arr);

// Add to End
arr.push(4);
console.log(arr);

// Remove to End
arr.pop();
console.log(arr);

// Add to BEGINING
arr.unshift(0);
console.log(arr);

// Remove to BEGINING
arr.shift();
console.log(arr);

arr.splice(2, 1);
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);

arr.splice(1, 1, 30, 40);
console.log(arr);