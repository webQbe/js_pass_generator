// Define DOM Elements
const result = document.getElementById('result');
const lenInput = document.getElementById('length');
const upperCheck = document.getElementById('uppercase');
const lowerCheck = document.getElementById('lowercase');
const numCheck = document.getElementById('number');
const symbCheck = document.getElementById('symbol');
const genBtn = document.getElementById('generate');
const clipBtn = document.getElementById('clipboard');


// Keep Functions inside randomFunc Object 
const randomFunc = {

    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomDigit,
    symbol: getRandomSymbol

}


// EVENT LISTENERS

// Listen for genBtn click
genBtn.addEventListener('click', () => {

    // Get value from lenInput
    const length = +lenInput.value;

    // Checked Options
    // True if Checked, False if unchecked
    const hasLower = lowerCheck.checked;
    const hasUpper = upperCheck.checked;
    const hasNumber = numCheck.checked;
    const hasSymbol = symbCheck.checked;

    // Pass Options & Length to passGen()
    // Output to result element
    result.innerHTML = passGen(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

// Generate Password
function passGen(lower, upper, number, symbol, length){

    // 1. Initialize Password Variable
    // 2. Filter out Unchecked Options
    // 3. Loop Over length & Call generator() for each type
    // 4. Add Final Password to Password Variable & Return 

    // 1. Initialize Password Variable

    let genPass = '';


    // 2. Filter out Unchecked Options

    // Count Checked Options
    const typesCount = lower + upper + number + symbol;

    // Log Total Checked Count
    console.log('typesCount: ', typesCount);

 
}




// Generator Functions

/* Character Codes 

26 English Lowercase Characters with corresponding ASCII code

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


[ 26 English Uppercase Characters with corresponding ASCII code

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


// Generate Random Digit
function getRandomDigit(){

    // Get random code between 48 - 57
    // Get digit using random code 
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Generate Random Symbol
function getRandomSymbol(){

    // Create a String with All Symbols
    const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    // Get Symbol with Random Index Number 
    return symbols[Math.floor(Math.random() * symbols.length)];
    
}




// Get Random Characters, Number, & Symbol
console.log(getRandomLower(), getRandomUpper(), getRandomDigit(), getRandomSymbol()); 