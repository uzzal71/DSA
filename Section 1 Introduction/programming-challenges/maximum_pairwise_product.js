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
        let max1 = -Infinity;
        let max2 = -Infinity;
    
        for (let num of numbers) {
          if (num > max1) {
            max2 = max1;
            max1 = num;
          } else if (num > max2) {
            max2 = num;
          }
        }
    
        const product = max1 * max2;
        console.log("Maximum pairwise product is:", product);
      }
    
      rl.close();
})