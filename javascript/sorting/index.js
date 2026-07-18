let fruits = ["banana", "apple", "orange", "mango", "kiwi"];

// Sort the array in ascending order
fruits.sort();
console.log("Sorted fruits (ascending):", fruits);

// Sort the array in descending order
fruits.sort((a, b) => b.localeCompare(a));
console.log("Sorted fruits (descending):", fruits);
