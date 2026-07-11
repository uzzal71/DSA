const reverseWordsInPlace = (s) => {
  const chars = Array.from(s.trim()); // convert to mutable array (JS equivalent of char[])

  reverse(chars, 0, chars.length - 1); // step 1: reverse everything

  let start = 0; // step 2: reverse each word back
  for (let end = 0; end <= chars.length; end++) {
    if (end === chars.length || chars[end] === " ") {
      reverse(chars, start, end - 1);
      start = end + 1;
    }
  }

  return collapseSpaces(chars);
};

const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

// manual space-collapsing instead of split(" ").filter(Boolean).join(" ")
const collapseSpaces = (chars) => {
  let result = "";
  let i = 0;
  while (i < chars.length) {
    if (chars[i] === " ") {
      i++;
      continue;
    }
    if (result.length > 0) result += " ";
    while (i < chars.length && chars[i] !== " ") {
      result += chars[i];
      i++;
    }
  }
  return result;
};
