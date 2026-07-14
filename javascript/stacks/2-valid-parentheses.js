// Question 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//              determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

// Input: s = "([)]"
// Output: false

// Input: s = "{[]}"
// Output: true

function isValid(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (isEmpty(stack)) {
        return false;
      }

      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}

const string1 = "()";
const string2 = "()[]{}";
const string3 = "(]";
const string4 = "([)]";
const string5 = "{[]}";

console.log(isValid(string1)); // Output: true
console.log(isValid(string2)); // Output: true
console.log(isValid(string3)); // Output: false
console.log(isValid(string4)); // Output: false
console.log(isValid(string5)); // Output: true

// Time Complexity: O(n), where n is the length of the input string s. We iterate through each character in the string once.
// Space Complexity: O(n), where n is the length of the input string s. In the worst case, we may need to store all opening brackets in the stack.
