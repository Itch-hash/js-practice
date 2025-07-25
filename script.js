// Task 1 - Count Letters
// ==============================
function countLetters(word) {
  let count = 0;
  for (let letter in word) {
    letter++;
    count = letter;
  }
  return count;
}
console.log(countLetters("Hello"));

// ----------------------------------------------- //

// // Task 2 - Reverse Word
// // ==============================
function reverseWord(word) {
  return word.split("").reverse().join("");
}
console.log(reverseWord("hello"));

// ----------------------------------------------- //

// Task 3 - Remove Duplicates
// ==============================
function removeDuplicates(arr) {
  return arr.filter((element, index) => arr.indexOf(element) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 1, 4, 5, 4]));

// ----------------------------------------------- //

// Task 4 - Palindrome Checker
// ==============================
function isPalindrome(sentence) {
  let word = sentence.trim().toLowerCase();
  let reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    console.log("Is Palindrome");
  } else console.log("Not a palindrome");
}
isPalindrome("amanaplanacanalpanama");
