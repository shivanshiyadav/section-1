// WAP to check is a number is palindrome.


function isPalindrome(number) {
    const str = String(number);
    return str === str.split('').reverse().join('');
  }
  console.log(isPalindrome(242)); // Output: true
console.log(isPalindrome(123)); // Output: false



// . WAP to print all perfect squares from 10 - 200.


function printPerfectSquares(start, end) {
    for (let i = start; i <= end; i++) {
      let squareRoot = Math.sqrt(i);
      if (Number.isInteger(squareRoot)) {
        console.log(i);
      }
    }
  }
  
  printPerfectSquares(10, 200);


//   WAP to reverse a number

function reverseNumber(number) {
    let reversedNumber = 0;
    while (number > 0) {
      reversedNumber = reversedNumber * 10 + (number % 10);
      number = Math.floor(number / 10);
    }
    return reversedNumber;
  }
  
  let inputNumber = 12345; // Replace this with  number u want to reverse
  let reversed = reverseNumber(inputNumber);
  
  console.log("Reversed number:", reversed);

//   WAP to print all prime numbers in range of 100 to 2000.

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function printPrimesInRange(start, end) {
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  let startRange = 100;
  let endRange = 2000;
  
//   console.log(Prime numbers between ${startRange} and ${endRange}:);
  printPrimesInRange(startRange, endRange);
