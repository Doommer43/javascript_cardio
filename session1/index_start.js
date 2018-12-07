// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  let revstr = "";
  str = str.split('');
  str.forEach(char => {
    revstr = char + revstr;
  });
  return revstr;
}





// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  if (str === reverseString(str)) {
    return true;
  }
  return false;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  int = int + "";
  // - 0 converts back to number
  return reverseString(int) - 0;
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let newLine = "";
  str = str.split(' ');
  str.forEach(string => {
    let shortLine = string.split().splice(0,1);
    newLine += string[0].toUpperCase() + string.replace(string[0], '') + " ";
  });
  return newLine;
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let results = [,];
  for(i = 0; i < str.length(); i++) {
    let repeats = 0;
    str.forEach(char => {
      if(char == str[i]) {
        repeats++;
      }
      results.pop(repeats,str[i]);
    });
  }
  return "Not implemented"
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(i = 0; i <= 100; i++) {
    let fizzer = i + " ";
    switch(0) {
      case i%15:
        fizzer += "FizzBuzz";
        break;
      case i%3:
        fizzer += "Fizz";
        break;
      case i%5:
        fizzer += "Buzz";
      break;
    }
    console.log(fizzer);
  }
  return true;
}


// Call Function
const output = fizzBuzz();

console.log(output);

//Expression test
/*
let test = function(num = 0) {
  if(num > 0){
    return "Hello";
  } else {
    return "Goodbye;";
  }
}

let copy = test(1);
let fstring = test.toString();

console.log(test);
console.log("");
console.log(copy);
console.log("");
console.log(fstring);
*/

let fizzer = "";

switch(0) {
  case i%3:
    fizzer += "Fizz";
  case i%5:
    fizzer += "Buzz";
  default:
    fizzer += i;
  break;
}