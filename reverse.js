


var num = 123;
var rev = 0;

while (num > 0) {
    let n = num % 10; // Get the last digit of the number
    rev = (rev * 10) + n; // Append the digit to the reversed number
    num = Math.floor(num / 10); // Remove the last digit from the number
}

console.log(rev); // Output: 321



