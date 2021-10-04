// Alphabet
function sortLetters(str) {
  var arraySplit = str.split("")
  console.log(arraySplit)
  var arraySort = arraySplit.sort()
  console.log(arraySort)
  var arrayJoin = arraySplit.join("")
  console.log(arrayJoin)
}

sortLetters("konexio")

console.log("")
console.log("")

// XOXO
function countEach(str) {
  var xNumber = 0
  var oNumber = 0

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x") { // str[i] === "x"
      xNumber = xNumber + 1
    }

    if (str.charAt(i) === "o") { // str[i] === "o"
      oNumber = oNumber + 1
    }
  }

  if (xNumber === oNumber) {
    console.log(true)
  } else {
    console.log(false)
  }
}

countEach("xxxoooox")
countEach("xox")

console.log("")
console.log("")

// Palindrome
function checkPal(str) {
  console.log(str)
  var palindrome = str.split("")
  console.log(palindrome)
  var palindrome1 = palindrome.reverse()
  console.log(palindrome1)
  var palindrome2 = palindrome1.join("")
  console.log(palindrome2)

  if (str === palindrome2) {
    return "palindrome"
  } else {
    return "No palindrome"
  }
}

var palindrome = checkPal("racecar")
console.log(palindrome)

console.log("")
console.log("")

// Swap
function swap(str) {
  var result = ""

  for (var i = 0; i < str.length; i++) {
    var character = str[i]

    if (character === character.toUpperCase()) { // si character est une majuscule
      result = result + character.toLowerCase()
    } else {
      result = result + character.toUpperCase()
    }
  }

  console.log(result)
}

swap("Hello World")

console.log("")
console.log("")
