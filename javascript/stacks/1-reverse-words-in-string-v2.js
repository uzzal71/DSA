// Question 1 : Given an input string, reverse the order of the words.

// Input: "the sky is blue" ----->>>> Output: "blue is sky the"
// Input: "  hello world!  " ----->>>> Output: "world! hello"
// Input: "a good   example" ----->>>> Output: "example good a"

// "the sky is blue" =>  ["the", "sky", "is", "blue"] => ["blue", "is", "sky", "the"] => "blue is sky the"

const reverseWords = (s) => {
  const splitedString = s.split(" ");
  const stack = [];

  for (let i of splitedString) {
    if (i !== "") {
      stack.push(i);
    }
  }

  let finalString = "";
  while (stack.length > 0) {
    const current = stack.pop();
    if (current) {
      finalString += " " + current;
    }
  }

  return finalString.trim();
};

console.log(reverseWords("the sky is blue")); // Output: "blue is sky the"
console.log(reverseWords("  hello world!  ")); // Output: "world! hello"
console.log(reverseWords("a good   example")); // Output: "example good a"

// Time Complexity: O(n) where n is the length of the input string
// Space Complexity: O(n) where n is the length of the input string
