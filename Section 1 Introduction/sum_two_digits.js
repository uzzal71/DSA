// sum_two_digits.js
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(inputA) {
    rl.question("Enter second number: ", function(inputB) {
        const a = parseInt(inputA);
        const b = parseInt(inputB);

        function sum_two_digits(a, b) {
            return a + b;
        }

        const sum = sum_two_digits(a, b);
        console.log("Sum: ", sum);

        rl.close();
    })
})