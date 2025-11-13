//Request a three-digit number from a user and check whether it has identical digits in it.
let num = prompt("Enter a three-digit number:");
if (num.length !== 3 || isNaN(num)) {
  alert("Please enter a valid three-digit number.");
} else {
  if (num[0] === num[1] || num[0] === num[2] || num[1] === num[2]) {
    alert("There are identical digits!");
  } else {
    alert("All digits are unique.");
  }
}

//Request a five-unit number from a user and check whether it is a palindrome
let fiveNum = prompt("Enter a five-digit number:");
if (fiveNum.length !== 5 || isNaN(fiveNum)) {
  alert("Please enter a valid five-digit number.");
} else {
  if (fiveNum === fiveNum.split('').reverse().join('')) {
    alert("It's a palindrome!");
  } else {
    alert("Not a palindrome.");
  }
}

//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result.
let usd = parseFloat(prompt("Enter amount in USD:"));
let currency = prompt("Convert to (EUR, SEK, AUD):").toUpperCase();

let rates = {
  EUR: 0.92,
  SEK: 10.55,
  AUD: 1.55
};

if (rates[currency]) {
  let result = usd * rates[currency];
  alert(`${usd} USD = ${result.toFixed(2)} ${currency}`);
} else {
  alert("Unknown currency.");
}

//Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.
let circumference = parseFloat(prompt("Enter the circumference of the circle:"));
let perimeter = parseFloat(prompt("Enter the perimeter of the square:"));

let r = circumference / (2 * Math.PI);
let a = perimeter / 4;

if (2 * r <= a) {
  alert("The circle fits inside the square!");
} else {
  alert("The circle does NOT fit inside the square.");
}

//Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.
