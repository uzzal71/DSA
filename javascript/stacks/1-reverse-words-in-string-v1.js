// Question 1 : Given an input string, reverse the order of the words.

// Input: "the sky is blue" ----->>>> Output: "blue is sky the"
// Input: "  hello world!  " ----->>>> Output: "world! hello"
// Input: "a good   example" ----->>>> Output: "example good a"

// "the sky is blue" =>  ["the", "sky", "is", "blue"] => ["blue", "is", "sky", "the"] => "blue is sky the"

const reverseWords = (s) => {
  return s
    .split(" ") // split on spaces
    .filter(Boolean) // remove empty strings (handles extra spaces)
    .reverse() // reverse the array
    .join(" "); // join back into a string
};

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world!  ")); // "world! hello"
console.log(reverseWords("a good   example")); // "example good a"
