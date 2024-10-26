// Generator Functions

/* Character Codes 

26 English lowercase characters -
a: 97, b: 98, c: 99, d: 100, e: 101, f: 102, g: 103, h: 104, i: 105, j: 106, k: 107, l: 108
m: 109, n: 110, o: 111, p: 112, q: 113, r: 114, s: 115, t: 116, u: 117, v: 118, w: 119
x: 120, y: 121, z: 122

*/

// Generate Random Character

// To get a decimal number between 1 - 26
// Random decimal is multiplied by number of characters
// Round down decimal to get a whole number
// Get random code between 97 - 122
console.log(Math.floor(Math.random() * 26) + 97);