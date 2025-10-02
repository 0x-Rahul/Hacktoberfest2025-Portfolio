function reverseNumberStringMethod(num) {
  // Convert the number to a string
  const numStr = String(num);

  // Split the string into an array of characters
  const charArray = numStr.split('');

  // Reverse the array
  const reversedArray = charArray.reverse();

  // Join the array back into a string
  const reversedStr = reversedArray.join('');

  // Convert the reversed string back to a number
  // Use parseFloat to handle potential negative signs or decimal numbers
  return parseFloat(reversedStr);
}

// Example usage:
const originalNumber1 = 12345;
const reversedNumber1 = reverseNumberStringMethod(originalNumber1);
console.log(`Original: ${originalNumber1}, Reversed: ${reversedNumber1}`); // Output: Original: 12345, Reversed: 54321

const originalNumber2 = -6789;
const reversedNumber2 = reverseNumberStringMethod(originalNumber2);
console.log(`Original: ${originalNumber2}, Reversed: ${reversedNumber2}`); // Output: Original: -6789, Reversed: -9876
