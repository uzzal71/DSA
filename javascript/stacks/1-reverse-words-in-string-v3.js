// Question 1 : Given an input string, reverse the order of the words.

// Input: "the sky is blue" ----->>>> Output: "blue is sky the"
// Input: "  hello world!  " ----->>>> Output: "world! hello"
// Input: "a good   example" ----->>>> Output: "example good a"

// "the sky is blue" =>  ["the", "sky", "is", "blue"] => ["blue", "is", "sky", "the"] => "blue is sky the"

// If you want an in-place / no-built-ins version (common interview follow-up)
// Interviewers sometimes ask you to do this without using split/reverse/join,
// treating the string as a mutable char array (as you would in C++/Java):

const reverseWordsInPlace = (s) => {
  const chars = s.trim().split(""); // still need array form in JS since strings are immutable

  // Step 1: reverse the whole array
  reverse(chars, 0, chars.length - 1);

  // Step 2: reverse each word in place
  let start = 0;
  for (let end = 0; end <= chars.length; end++) {
    if (end === chars.length || chars[end] === " ") {
      reverse(chars, start, end - 1);
      start = end + 1;
    }
  }

  // Step 3: clean up multiple spaces
  return chars.join("").split(" ").filter(Boolean).join(" ");
};

const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

console.log(reverseWordsInPlace("the sky is blue")); // "blue is sky the"
console.log(reverseWordsInPlace("  hello world!  ")); // "world! hello"
console.log(reverseWordsInPlace("a good   example")); // "example good a"
