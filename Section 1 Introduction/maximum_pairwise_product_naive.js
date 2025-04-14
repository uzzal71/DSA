const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", function(input) {
    const numbers = input.split(" ").map(Number);

    if (numbers.length < 2) {
        console.log("Please enter at least two numbers.");
      } else {
        let max = -Infinity;
    
        for (let i = 0; i < numbers.length; i++) {
          for(let j = i + 1; j < numbers.length; j++) {
            const product = numbers[i] * numbers[j];
            if (product > max) {
                max = product;
            }
          }
        }
    
        console.log("Maximum pairwise product is:", max);
      }
    
      rl.close();
})