let a = 10;
console.log(a); // Output: 10

for(let a = 0; a < 10000; a++) {
     console.log(a); 
     badCodefu();
}

function badCodefu() {
    console.log("Bad code function"); // Output: 20
}