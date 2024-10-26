// Generator Functions

/* Character Codes 

26 English Lowercase Characters -
[
  { "letter": "a", "code": 97 },
  { "letter": "b", "code": 98 },
  { "letter": "c", "code": 99 },
  { "letter": "d", "code": 100 },
  { "letter": "e", "code": 101 },
  { "letter": "f", "code": 102 },
  { "letter": "g", "code": 103 },
  { "letter": "h", "code": 104 },
  { "letter": "i", "code": 105 },
  { "letter": "j", "code": 106 },
  { "letter": "k", "code": 107 },
  { "letter": "l", "code": 108 },
  { "letter": "m", "code": 109 },
  { "letter": "n", "code": 110 },
  { "letter": "o", "code": 111 },
  { "letter": "p", "code": 112 },
  { "letter": "q", "code": 113 },
  { "letter": "r", "code": 114 },
  { "letter": "s", "code": 115 },
  { "letter": "t", "code": 116 },
  { "letter": "u", "code": 117 },
  { "letter": "v", "code": 118 },
  { "letter": "w", "code": 119 },
  { "letter": "x", "code": 120 },
  { "letter": "y", "code": 121 },
  { "letter": "z", "code": 122 }
]


[ 26 English Uppercase Characters:

  { "letter": "A", "code": 65 },
  { "letter": "B", "code": 66 },
  { "letter": "C", "code": 67 },
  { "letter": "D", "code": 68 },
  { "letter": "E", "code": 69 },
  { "letter": "F", "code": 70 },
  { "letter": "G", "code": 71 },
  { "letter": "H", "code": 72 },
  { "letter": "I", "code": 73 },
  { "letter": "J", "code": 74 },
  { "letter": "K", "code": 75 },
  { "letter": "L", "code": 76 },
  { "letter": "M", "code": 77 },
  { "letter": "N", "code": 78 },
  { "letter": "O", "code": 79 },
  { "letter": "P", "code": 80 },
  { "letter": "Q", "code": 81 },
  { "letter": "R", "code": 82 },
  { "letter": "S", "code": 83 },
  { "letter": "T", "code": 84 },
  { "letter": "U", "code": 85 },
  { "letter": "V", "code": 86 },
  { "letter": "W", "code": 87 },
  { "letter": "X", "code": 88 },
  { "letter": "Y", "code": 89 },
  { "letter": "Z", "code": 90 }
]


*/

// Generate Random Lowercase Character
function getRandomLower(){

    // To get a decimal number between 1 - 26
    // Random decimal is multiplied by number of characters
    // Round down decimal to get a whole number
    // Get random code between 97 - 122
    // Get character using random code 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

// Generate Random Uppercase Character
function getRandomUpper(){

    // Get random code between 65 - 90
    // Get character using random code 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


// Get Random Characters
console.log(getRandomLower(), getRandomUpper()); 